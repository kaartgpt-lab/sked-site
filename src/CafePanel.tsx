import React, { useEffect, useMemo, useState } from "react";

/**
 * API CONTRACT (expected):
 * GET    /api/cafes               -> Cafe[]
 * POST   /api/cafes               -> Cafe
 * PUT    /api/cafes/:id           -> Cafe
 * DELETE /api/cafes/:id           -> { ok: true }
 */

type Status = "ACTIVE" | "INACTIVE";

export interface Cafe {
  id: string;
  cafeId: string;
  name: string;
  tags: string[];
  images: string[];
  description: string;
  startTime: string; // "09:00"
  endTime: string; // "21:00"
  latitude: number;
  longitude: number;
  bookingPrice: string; // keep string to preserve Decimal precision
  city: string;
  state: string;
  pincode: string;
  status: Status;
  createdAt?: string;
  updatedAt?: string;
}

const emptyForm: Cafe = {
  id: "",
  cafeId: "",
  name: "",
  tags: [],
  images: [],
  description: "",
  startTime: "09:00",
  endTime: "21:00",
  latitude: 0,
  longitude: 0,
  bookingPrice: "0",
  city: "",
  state: "",
  pincode: "",
  status: "ACTIVE",
};

const API_BASE = "";

export default function CafeAdminPage() {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [form, setForm] = useState<Cafe>(emptyForm);
  const [tagsInput, setTagsInput] = useState("");
  const [imagesInput, setImagesInput] = useState("");

  // Fetch all cafes
  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(API_BASE, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to fetch cafes (${res.status})`);
        const data = (await res.json()) as Cafe[];
        // Normalize types: ensure bookingPrice is string
        const normalized = data.map((c) => ({
          ...c,
          bookingPrice:
            typeof (c as any).bookingPrice === "number"
              ? String((c as any).bookingPrice)
              : (c as any).bookingPrice ?? "0",
        }));
        setCafes(normalized);
      } catch (e: any) {
        setError(e.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Filtered list by search query
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cafes;
    return cafes.filter((c) => {
      const hay = `${c.name} ${c.city} ${c.state} ${c.pincode} ${
        c.cafeId
      } ${c.tags.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [cafes, query]);

  // Utilities
  const splitToArray = (val: string) =>
    val
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  const arrayToCSV = (arr: string[]) => arr.join(", ");

  const resetForm = () => {
    setForm(emptyForm);
    setTagsInput("");
    setImagesInput("");
  };

  const handleEdit = (c: Cafe) => {
    setForm({
      ...c,
      bookingPrice: c.bookingPrice ?? "0",
    });
    setTagsInput(arrayToCSV(c.tags || []));
    setImagesInput(arrayToCSV(c.images || []));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buildPayload = () => {
    const tags = splitToArray(tagsInput);
    const images = splitToArray(imagesInput);
    // Basic guards
    if (!form.name.trim()) throw new Error("Name is required.");
    if (!form.cafeId.trim()) throw new Error("cafeId is required.");
    if (!/^\d{2}:\d{2}$/.test(form.startTime))
      throw new Error("startTime must be HH:MM.");
    if (!/^\d{2}:\d{2}$/.test(form.endTime))
      throw new Error("endTime must be HH:MM.");
    if (!form.city.trim()) throw new Error("City is required.");
    if (!form.state.trim()) throw new Error("State is required.");
    if (!form.pincode.trim()) throw new Error("Pincode is required.");
    if (isNaN(Number(form.latitude)))
      throw new Error("Latitude must be a number.");
    if (isNaN(Number(form.longitude)))
      throw new Error("Longitude must be a number.");

    // bookingPrice stays string; backend should map to Decimal
    const payload = {
      cafeId: form.cafeId.trim(),
      name: form.name.trim(),
      tags,
      images,
      description: form.description ?? "",
      startTime: form.startTime,
      endTime: form.endTime,
      latitude: Number(form.latitude),
      longitude: Number(form.longitude),
      bookingPrice: form.bookingPrice ?? "0",
      city: form.city.trim(),
      state: form.state.trim(),
      pincode: form.pincode.trim(),
      status: form.status,
    };
    return payload;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const payload = buildPayload();
      const isEditing = Boolean(form.id);
      const url = isEditing ? `${API_BASE}/${form.id}` : API_BASE;
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(
          txt || `Failed to ${isEditing ? "update" : "create"} cafe`
        );
      }
      const saved = (await res.json()) as Cafe;

      // Normalize bookingPrice
      saved.bookingPrice =
        typeof (saved as any).bookingPrice === "number"
          ? String((saved as any).bookingPrice)
          : (saved as any).bookingPrice ?? "0";

      if (isEditing) {
        setCafes((prev) => prev.map((c) => (c.id === saved.id ? saved : c)));
      } else {
        setCafes((prev) => [saved, ...prev]);
      }
      resetForm();
    } catch (e: any) {
      setError(e.message || "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this cafe? This cannot be undone.")) return;
    setDeletingId(id);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Failed to delete (${res.status})`);
      setCafes((prev) => prev.filter((c) => c.id !== id));
      if (form.id === id) resetForm();
    } catch (e: any) {
      setError(e.message || "Delete failed.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Cafe Admin</h1>
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, city, state, pincode, tags…"
            className="w-72 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
          />
          <button
            onClick={() => {
              setQuery("");
            }}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            type="button"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-10 rounded-lg border border-gray-200 p-4"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {form.id ? "Edit Cafe" : "Add New Cafe"}
          </h2>
          {form.id && (
            <button
              type="button"
              onClick={resetForm}
              className="text-sm underline underline-offset-4"
            >
              Cancel edit
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <TextField
            label="Name *"
            value={form.name}
            onChange={(v) => setForm((s) => ({ ...s, name: v }))}
          />
          <TextField
            label="Cafe ID * (unique)"
            value={form.cafeId}
            onChange={(v) => setForm((s) => ({ ...s, cafeId: v }))}
          />
          <SelectField
            label="Status"
            value={form.status}
            options={[
              { label: "ACTIVE", value: "ACTIVE" },
              { label: "INACTIVE", value: "INACTIVE" },
            ]}
            onChange={(v) => setForm((s) => ({ ...s, status: v as Status }))}
          />

          <TextField
            label="City *"
            value={form.city}
            onChange={(v) => setForm((s) => ({ ...s, city: v }))}
          />
          <TextField
            label="State *"
            value={form.state}
            onChange={(v) => setForm((s) => ({ ...s, state: v }))}
          />
          <TextField
            label="Pincode *"
            value={form.pincode}
            onChange={(v) => setForm((s) => ({ ...s, pincode: v }))}
          />

          <TextField
            label="Start Time (HH:MM)"
            value={form.startTime}
            onChange={(v) => setForm((s) => ({ ...s, startTime: v }))}
            placeholder="09:00"
          />
          <TextField
            label="End Time (HH:MM)"
            value={form.endTime}
            onChange={(v) => setForm((s) => ({ ...s, endTime: v }))}
            placeholder="21:00"
          />
          <TextField
            label="Booking Price"
            value={form.bookingPrice}
            onChange={(v) => setForm((s) => ({ ...s, bookingPrice: v }))}
            placeholder="199"
            inputMode="decimal"
          />

          <TextField
            label="Latitude"
            value={String(form.latitude)}
            onChange={(v) => setForm((s) => ({ ...s, latitude: Number(v) }))}
            inputMode="decimal"
            placeholder="26.4499"
          />
          <TextField
            label="Longitude"
            value={String(form.longitude)}
            onChange={(v) => setForm((s) => ({ ...s, longitude: Number(v) }))}
            inputMode="decimal"
            placeholder="80.3319"
          />
          <TextField
            label="Tags (comma separated)"
            value={tagsInput}
            onChange={setTagsInput}
            placeholder="wifi, quiet, espresso, power-outlets"
          />

          <TextField
            label="Images (comma separated URLs)"
            value={imagesInput}
            onChange={setImagesInput}
            placeholder="https://..., https://..."
          />
          <div className="md:col-span-2">
            <TextareaField
              label="Description"
              value={form.description}
              onChange={(v) => setForm((s) => ({ ...s, description: v }))}
              rows={3}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="rounded-md bg-black px-4 py-2 text-sm text-white disabled:opacity-60"
          >
            {saving ? "Saving..." : form.id ? "Update Cafe" : "Create Cafe"}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm"
          >
            Reset
          </button>
        </div>
      </form>

      {/* List */}
      <div className="rounded-lg border border-gray-200">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <h3 className="text-base font-semibold">
            Cafes {loading ? "(loading…)" : `(${filtered.length})`}
          </h3>
        </div>

        <div className="relative w-full overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50">
              <tr className="text-xs uppercase text-gray-500">
                <Th>Name</Th>
                <Th>Cafe ID</Th>
                <Th>City</Th>
                <Th>State</Th>
                <Th>Time</Th>
                <Th>₹ Price</Th>
                <Th>Status</Th>
                <Th>Tags</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-t">
                  <Td className="max-w-[200px]">
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-gray-500">
                      {c.description?.slice(0, 60)}
                    </div>
                  </Td>
                  <Td>{c.cafeId}</Td>
                  <Td>{c.city}</Td>
                  <Td>{c.state}</Td>
                  <Td>
                    {c.startTime}–{c.endTime}
                  </Td>
                  <Td>{c.bookingPrice}</Td>
                  <Td>
                    <span
                      className={
                        "rounded-full px-2 py-0.5 text-xs " +
                        (c.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-700")
                      }
                    >
                      {c.status}
                    </span>
                  </Td>
                  <Td className="max-w-[220px]">
                    <div className="truncate">{c.tags?.join(", ")}</div>
                  </Td>
                  <Td>
                    <div className="flex items-center gap-2">
                      <button
                        className="rounded-md border border-gray-300 px-2 py-1 text-xs"
                        onClick={() => handleEdit(c)}
                      >
                        Edit
                      </button>
                      <button
                        className="rounded-md border border-red-300 px-2 py-1 text-xs text-red-700"
                        onClick={() => handleDelete(c.id)}
                        disabled={deletingId === c.id}
                      >
                        {deletingId === c.id ? "Deleting…" : "Delete"}
                      </button>
                    </div>
                  </Td>
                </tr>
              ))}

              {!loading && filtered.length === 0 && (
                <tr>
                  <Td colSpan={9}>
                    <div className="py-10 text-center text-sm text-gray-500">
                      No cafes found. Try clearing the search.
                    </div>
                  </Td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ---------- UI Primitives ---------- */

function TextField(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  const { label, value, onChange, placeholder, inputMode } = props;
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium text-gray-600">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </label>
  );
}

function TextareaField(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  const { label, value, onChange, rows = 3, placeholder } = props;
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium text-gray-600">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </label>
  );
}

function SelectField(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  const { label, value, onChange, options } = props;
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium text-gray-600">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-2 font-medium">{children}</th>;
}
function Td({
  children,
  className,
  colSpan,
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}) {
  return (
    <td className={`px-4 py-2 align-top ${className ?? ""}`} colSpan={colSpan}>
      {children}
    </td>
  );
}

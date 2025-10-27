// src/lib/ui.ts
import type { SectionTone } from "./types";

export const classNames = (...c: Array<string | false | null | undefined>) =>
  c.filter(Boolean).join(" ");

export const arr = <T>(maybe: T[] | undefined | null): T[] =>
  Array.isArray(maybe) ? maybe : [];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

export const toneWrap = (tone?: SectionTone) =>
  tone === "dark"
    ? "bg-neutral-900 text-white border-neutral-700"
    : "bg-white text-gray-900 border-gray-200";

export const textMuted = (tone?: SectionTone) =>
  tone === "dark" ? "text-gray-300" : "text-gray-600";

export const textSubtle = (tone?: SectionTone) =>
  tone === "dark" ? "text-gray-400" : "text-gray-500";

export const cardBorder = (tone?: SectionTone) =>
  tone === "dark" ? "border-neutral-700" : "border-gray-200";

export const chipBg = (tone?: SectionTone) =>
  tone === "dark" ? "bg-neutral-800" : "bg-gray-100";

export const primaryBtn = (tone?: SectionTone) =>
  tone === "dark"
    ? "bg-white text-neutral-900 hover:bg-gray-100"
    : "bg-gray-900 text-white hover:bg-black";

export const ghostBtn = (tone?: SectionTone) =>
  tone === "dark"
    ? "border-neutral-700 hover:bg-neutral-800"
    : "border-gray-300 hover:bg-gray-50";

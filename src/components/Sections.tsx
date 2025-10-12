import { PropsWithChildren, useEffect, useRef } from 'react'

export function Reveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in-view')
        io.unobserve(el)
      }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className="reveal">
      {children}
    </div>
  )
}

export function StackSection({ children, bg = 'bg-white' }: PropsWithChildren<{ bg?: string }>) {
  return (
    <section className={`relative min-h-[80vh] ${bg}`}>
      <div className="h-16" />
      <div className="sticky top-16">
        <Reveal>
          <div className={`stack-card border border-zinc-200 px-4 sm:px-6 lg:px-8 py-14 md:py-16 rounded-md ${bg}`}>
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
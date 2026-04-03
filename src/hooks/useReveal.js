import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches an IntersectionObserver to a container ref.
 * All .reveal children inside it get the .visible class on scroll.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = entry.target.parentElement.querySelectorAll('.reveal')
            siblings.forEach((s, i) => {
              setTimeout(() => s.classList.add('visible'), i * 80)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    )

    targets.forEach((t) => observer.observe(t))

    return () => observer.disconnect()
  }, [])

  return ref
}

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#hero',      label: 'Inicio' },
  { href: '#skills',    label: 'Skills' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto',  label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>DR.</div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.burgerOpen : ''} />
        <span className={menuOpen ? styles.burgerOpen : ''} />
        <span className={menuOpen ? styles.burgerOpen : ''} />
      </button>
    </nav>
  )
}

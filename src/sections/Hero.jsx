import { useEffect } from 'react'
import { personal } from '../data'
import styles from './Hero.module.css'

export default function Hero() {
  // Animate hero elements on mount
  useEffect(() => {
    const els = document.querySelectorAll('#hero .reveal')
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 100 + i * 120)
    })
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      {/* Ambient orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <div className={`${styles.badge} reveal`}>
          <span className={styles.dot} />
          {personal.tagline}
        </div>

        {/* Name */}
        <h1 className={`${styles.name} reveal`}>
          <span className="gradient-text">{personal.name}</span>
          <br />
          {personal.lastName}
        </h1>

        {/* Role */}
        <p className={`${styles.role} reveal`}>{personal.role}</p>

        {/* Bio */}
        <p className={`${styles.bio} reveal`}>{personal.bio}</p>

        {/* CTAs */}
        <div className={`${styles.ctas} reveal`}>
          <a href="#proyectos" className="btn-primary">
          Ver proyectos →
          </a>
          <a href="#contacto" className="btn-secondary">
            Contáctame
          </a>
          <a href="/game" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: 'rgba(124,58,237,0.4)', color: '#A78BFA' }}>
          🎮 Aprendamos juntos
          </a>
        </div>

        {/* Stats */}
        <div className={`${styles.stats} reveal`}>
          {personal.stats.map(({ num, label }) => (
            <div key={label} className={styles.stat}>
              <div className={styles.statNum}>
                <span className="gradient-text">{num}</span>
              </div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

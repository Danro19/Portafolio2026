import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { skills, softSkills } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} className={styles.section}>
      <div className="container">
        
        <h2 className="section-title">
          Stack <span className="dim">&amp; skills</span>
        </h2>

        {/* Technical */}
        <div className={styles.grid}>
          {skills.map((s) => (
            <div key={s.name} className={`${styles.card} reveal`}>
              <div className={styles.icon}>{s.icon}</div>
              <div className={styles.name}>{s.name}</div>
              <div className={styles.level}>
                {s.level} · {s.pct}%
              </div>
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className={`${styles.softTitle} reveal`}>
          <span className="section-tag" style={{ marginBottom: 0 }}>
            habilidades blandas
          </span>
        </div>
        <div className={styles.softGrid}>
          {softSkills.map((s) => (
            <div key={s} className={`${styles.pill} reveal`}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

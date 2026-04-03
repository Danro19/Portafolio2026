import { useReveal } from '../hooks/useReveal'
import { projects } from '../data'
import styles from './Projects.module.css'

const tagClass = {
  blue:   styles.tagBlue,
  purple: styles.tagPurple,
  green:  styles.tagGreen,
}

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="proyectos" ref={ref} className={styles.section}>
      <div className="container">
        <span className="section-tag"></span>
        <h2 className="section-title">
          Proyectos <span className="dim">destacados</span>
        </h2>

        <div className={styles.grid}>
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} reveal`}
            >
              <div className={styles.preview}>{p.emoji}</div>

              <div className={styles.body}>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`${styles.tag} ${tagClass[p.tagColor]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>

                <span className={styles.link}>
                  Ver en GitHub <span className={styles.arrow}>→</span>
                </span>
                    
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

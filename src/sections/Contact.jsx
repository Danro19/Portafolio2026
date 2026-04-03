import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { personal } from '../data'
import styles from './Contact.module.css'

const socials = [
  {
    icon: '🐙',
    label: 'GitHub',
    handle: '@Danro19',
    url: personal.social.github,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    handle: 'Daniel Rodriguez',
    url: personal.social.linkedin,
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    handle: personal.social.phone,
    url: personal.social.whatsapp,
  },
]

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setError('Por favor completa todos los campos.')
      return
    }
    setError('')

    const text = `Hola Daniel, soy ${form.name} (${form.email}). ${form.message}`
    const url = `${personal.social.whatsapp}&text=${encodeURIComponent(text)}`
    window.open(url, '_blank')

    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contacto" ref={ref} className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <span className="section-tag">Contacto</span>
          <h2 className="section-title" style={{ marginBottom: 48 }}>
            Trabajemos <span className="dim">juntos</span>
          </h2>

          <div className={styles.grid}>
            {/* FORM */}
            <div className={`${styles.form} reveal`}>
              <div className={styles.field}>
                <label className={styles.label}>Nombre</label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Correo electrónico</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Mensaje</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <button className={styles.submit} onClick={handleSubmit}>
                Enviar mensaje →
              </button>

              {sent && (
                <div className={styles.success}>
                  ✓ ¡Mensaje enviado! Te responderé pronto.
                </div>
              )}
            </div>

            {/* INFO */}
            <div className={`${styles.info} reveal`}>
              <h3 className={styles.infoTitle}>¿Tienes un proyecto en mente?</h3>
              <p className={styles.infoText}>
                Estoy abierto a oportunidades de colaboración, proyectos
                freelance y posiciones de desarrollo backend.
              </p>

              <div className={styles.socials}>
                {socials.map(({ icon, label, handle, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <div className={styles.socialIcon}>{icon}</div>
                    <div>
                      <div className={styles.socialLabel}>{label}</div>
                      <div className={styles.socialHandle}>{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

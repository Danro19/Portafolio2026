import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.dim}>// </span>
      Daniel Orlando Rodriguez Ramirez
      <span className={styles.dim}> — </span>
      {new Date().getFullYear()}
      <span className={styles.dim}> — Desarrollado con ♥ en React</span>
    </footer>
  )
}

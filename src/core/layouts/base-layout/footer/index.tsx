import styles from './styles.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.container}>
      <h2 className="sr-only">Footer</h2>
      <p className={styles.copyright}>© {year} | All Rights reserved</p>
    </footer>
  )
}

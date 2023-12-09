import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>
          Welcome to <span className="text-purple-500">Frontend Garage</span>
        </h3>
        <h3 className={styles.heading}>
          a place for <span className={'text-blue-500'}>Learn </span>
          and <span className={'text-green-500'}>Growth</span>.
        </h3>
      </div>
    </div>
  )
}

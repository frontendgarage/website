import styles from './styles.module.css'

export default function Home() {
  return (
    <div className="w-full h-96 flex items-center justify-center m-auto px-8">
      <div>
        <h3 className={styles.heading}>
          Welcome to <span className="text-purple-500">Frontend Garage</span>
        </h3>
        <h3 className={styles.heading}>
          a place for <span className="text-blue-500">Learn</span>
        </h3>
      </div>
    </div>
  )
}

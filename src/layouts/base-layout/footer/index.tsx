export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="absolute bottom-8 mx-0 w-full grid place-items-center">
      <h2 className="sr-only">Footer</h2>
      <p className="text-xs">© {year} | All Rights reserved</p>
    </footer>
  )
}

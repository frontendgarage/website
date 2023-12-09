export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <p className="text-xs flex items-centes justify-center mt-60">
        © {year} | All Rights reserved
      </p>
    </>
  )
}

export default function Home() {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center pt-24 px-8">
      <div className="mb-12">
        <h3 className="text-2xl font-semibold lg:text-6xl">
          Welcome to <span className="text-purple-500">Frontend Garage</span>
        </h3>
        <h3 className="text-2xl font-semibold lg:text-6xl">
          a place for <span className={'text-blue-500'}>Learn </span>
          and <span className={'text-green-500'}>Growth</span>.
        </h3>
      </div>
      <div className="flex flex-col">
        <p className="mb-2">
          Join the community who read my free weekly Newsletter.
        </p>
        <iframe src="https://frontendgarage.substack.com/embed"></iframe>
      </div>
    </div>
  )
}

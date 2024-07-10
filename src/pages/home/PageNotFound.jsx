import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <p className="text-lg text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Go to Home
      </Link>
    </div></>
  )
}

export default PageNotFound
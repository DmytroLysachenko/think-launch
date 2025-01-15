import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-black-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-black-300 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow-100 hover:shadow-200 transition-shadow duration-300 ease-in-out"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

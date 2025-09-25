import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Dashboard App
        </h1>
        <p className="text-gray-600 mb-8">
          Authentication + Dashboard System
        </p>
        <div className="space-x-4">
          <Link 
            href="/login" 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
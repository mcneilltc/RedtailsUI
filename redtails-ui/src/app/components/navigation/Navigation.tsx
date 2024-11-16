import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground">
          Redtails
        </Link>
        <div className="space-x-6">
          <Link 
            href="/" 
            className="text-foreground hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-foreground hover:text-gray-600 transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="/book" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Book With Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

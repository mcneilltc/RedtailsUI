'use client';
import Link from 'next/link'
import { useCart } from '../../../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'

export default function Navigation() {
    const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-md p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground">
          Redtails Outdoors
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
          <Link 
            href="/cart" 
            className="relative text-foreground hover:text-gray-600 transition-colors"
          >
            <FaShoppingCart className="text-xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

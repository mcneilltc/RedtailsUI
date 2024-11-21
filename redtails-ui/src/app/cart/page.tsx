'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function CheckoutPage() {
  const { cartItems, updateItem, removeItem } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement checkout logic
    console.log('Processing checkout:', { customerInfo, cartItems });
  };

  const handleDateChange = (itemId: string, date: Date) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      updateItem(itemId, { ...item, bookingDate: date });
    }
  };

  const handleTimeChange = (itemId: string, time: string) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      updateItem(itemId, { ...item, startTime: time });
    }
  };

  const handleDurationChange = (itemId: string, duration: number) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      updateItem(itemId, { 
        ...item, 
        duration,
        price: (item.pricePerHour * duration) 
      });
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
     {/* Cart Items */}
     <div className="mb-8">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <DatePicker
                    selected={item.bookingDate}
                    onChange={(date: Date) => handleDateChange(item.id, date)}
                    className="w-full border p-2 rounded"
                    minDate={new Date()}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Start Time</label>
                  <input
                    type="time"
                    value={item.startTime}
                    onChange={(e) => handleTimeChange(item.id, e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                </div>
 
                <div>
                  <label className="block text-sm font-medium mb-1">Duration (hours)</label>
                  <select
                    value={item.duration}
                    onChange={(e) => handleDurationChange(item.id, Number(e.target.value))}
                    className="w-full border p-2 rounded"
                  >
                    {[1, 2, 3, 4].map(hours => (
                      <option key={hours} value={hours}>{hours}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-4 text-right">
                <span className="font-bold">${item.price}</span>
              </div>
            </div>
          ))
        )}
        
        <div className="font-bold text-xl mt-4 text-right">
          Total: ${total}
        </div>
      </div>
      {/* Customer Information Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={customerInfo.firstName}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={customerInfo.lastName}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customerInfo.email}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={customerInfo.phone}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={customerInfo.address}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required
        />
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Complete Checkout
        </button>
      </form>
    </div>
  );
}

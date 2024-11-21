"use client";

import React, { useState } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useCart } from "@/context/CartContext";

interface Kayak {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  pricePerHour: number;
  capacity: string;
  availability: boolean;
  quantity: number;
}

// Helper function to calculate available time slots based on duration
const getAvailableTimeSlots = (duration: number) => {
  const allTimeSlots = [
    { start: "9:00 AM", end: "10:00 AM", value: 9 },
    { start: "10:00 AM", end: "11:00 AM", value: 10 },
    { start: "11:00 AM", end: "12:00 PM", value: 11 },
    { start: "12:00 PM", end: "1:00 PM", value: 12 },
    { start: "1:00 PM", end: "2:00 PM", value: 13 },
    { start: "2:00 PM", end: "3:00 PM", value: 14 },
    { start: "3:00 PM", end: "4:00 PM", value: 15 },
    { start: "4:00 PM", end: "5:00 PM", value: 16 },
  ];

  // Filter time slots that would end after 5 PM (17:00)
  return allTimeSlots.filter((slot) => slot.value + duration <= 17);
};

const durationOptions = [1, 2, 3, 4];

const kayaks: Kayak[] = [
  {
    id: 1,
    name: "Explorer 12",
    description: "Stable recreational kayak perfect for beginners",
    imageUrl: "/images/kayaks/explorer-12.jpg",
    pricePerHour: 35,
    capacity: "1 Person",
    availability: true,
    quantity: 1,
  },
  {
    id: 2,
    name: "Tandem Adventure",
    description: "Two-person kayak ideal for shared experiences",
    imageUrl: "/images/kayaks/tandem-adventure.jpg",
    pricePerHour: 45,
    capacity: "2 Person",
    availability: true,
    quantity: 3,
  },
  {
    id: 3,
    name: "Fisher Pro",
    description: "Specialized fishing kayak with rod holders",
    imageUrl: "/images/kayaks/fisher-pro.jpg",
    pricePerHour: 40,
    capacity: "1 Person",
    availability: true,
    quantity: 5,
  },
  {
    id: 4,
    name: "River Runner",
    description: "Agile kayak perfect for river exploration",
    imageUrl: "/images/kayaks/river-runner.jpg",
    pricePerHour: 35,
    capacity: "1 Person",
    availability: true,
    quantity: 1,
  },
  {
    id: 5,
    name: "Family Cruiser",
    description: "Stable and spacious family kayak",
    imageUrl: "/images/kayaks/family-cruiser.jpg",
    pricePerHour: 50,
    capacity: "2-3 Person",
    availability: true,
    quantity: 3,
  },
  {
    id: 6,
    name: "Sport Elite",
    description: "Performance kayak for experienced paddlers",
    imageUrl: "/images/kayaks/sport-elite.jpg",
    pricePerHour: 45,
    capacity: "1 Person",
    availability: true,
    quantity: 5,
  },
];

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedKayak, setSelectedKayak] = useState<Kayak | null>(null);
  const [duration, setDuration] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showKayaks, setShowKayaks] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { addItem } = useCart();
  const [sections, setSections] = useState({
    calendar: { isOpen: true, isComplete: false },
    kayaks: { isOpen: false, isComplete: false },
    timeSlots: { isOpen: false, isComplete: false }
  });

  const handleKayakSelect = (kayak: Kayak) => {
    if (kayak.quantity === 0) return;
    setSelectedKayak(kayak);
    setSections({
      calendar: { isOpen: false, isComplete: true },
      kayaks: { isOpen: false, isComplete: true },
      timeSlots: { isOpen: true, isComplete: false }
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSections({
      calendar: { isOpen: false, isComplete: true },
      kayaks: { isOpen: true, isComplete: false },
      timeSlots: { isOpen: false, isComplete: false }
    });
  };

  const handleDurationSelect = (hours: number) => {
    setDuration(hours);
    setShowTimeSlots(true);
    setSelectedTime(null); // Reset selected time when duration changes
  };

  const handleTimeSelect = (startTime: string) => {
    setSelectedTime(startTime);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    if (!selectedKayak) return 0;
    return selectedKayak.pricePerHour * duration;
  };

  // Handle booking confirmation with modal
  const handleConfirmBooking = () => {
    setShowModal(true);
  };

  const handleAddToCart = () => {
    if (!selectedKayak || !selectedDate || !selectedTime) return;
    
    const cartItem = {
      id: `${selectedKayak.id}-${Date.now()}`, // unique ID
      name: selectedKayak.name,
      price: calculateTotalPrice(),
      pricePerHour: selectedKayak.pricePerHour,
      bookingDate: selectedDate,
      startTime: selectedTime,
      duration: duration,
      imageUrl: selectedKayak.imageUrl,
    };

    addItem(cartItem);
    setShowModal(false);
    // Reset selections if needed
    setSelectedKayak(null);
    setSelectedDate(null);
    setSelectedTime(null);
  };
  
  const handleSectionToggle = (section: 'calendar' | 'kayaks' | 'timeSlots') => {
    setSections(prev => ({
      ...prev,
      [section]: { ...prev[section], isOpen: !prev[section].isOpen }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Reserve a Kayak</h1>

        {/* Step 1: Calendar Selection */}
        <div className="max-w-2xl mx-auto mb-4">
          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            onClick={() => handleSectionToggle('calendar')}
          >
            <div className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold">
                1. Select a Date
                {sections.calendar.isComplete && !sections.calendar.isOpen && 
                  <span className="ml-2 text-sm text-gray-600">
                    ({selectedDate?.toLocaleDateString()})
                  </span>
                }
              </h3>
              <button className="text-blue-600">
                {sections.calendar.isOpen ? '−' : '+'}
              </button>
            </div>
            
            {sections.calendar.isOpen && (
              <div className="p-6">
                <Calendar
                  onChange={(date) => handleDateSelect(date as Date)}
                  value={selectedDate}
                  minDate={new Date()}
                  className="mx-auto"
                />
              </div>
            )}
          </div>
        </div>

        {/* Step 2: Kayak Selection */}
        {(sections.kayaks.isOpen || sections.kayaks.isComplete) && (
          <div className="max-w-2xl mx-auto mb-4">
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              onClick={() => handleSectionToggle('kayaks')}
            >
              <div className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold">
                  2. Select a Kayak
                  {sections.kayaks.isComplete && !sections.kayaks.isOpen && 
                    <span className="ml-2 text-sm text-gray-600">
                      ({selectedKayak?.name})
                    </span>
                  }
                </h3>
                <button className="text-blue-600">
                  {sections.kayaks.isOpen ? '−' : '+'}
                </button>
              </div>
              
              {sections.kayaks.isOpen && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {kayaks.map((kayak) => (
                      <div
                        key={kayak.id}
                        onClick={() => kayak.quantity > 0 ? handleKayakSelect(kayak) : null}
                        className={`bg-white rounded-lg shadow-md overflow-hidden relative max-w-sm mx-auto w-full
                          ${kayak.quantity > 0 ? "cursor-pointer transform transition-transform hover:scale-105" : "opacity-60 cursor-not-allowed"}
                          ${selectedKayak?.id === kayak.id ? "ring-2 ring-blue-600" : ""}`}
                      >
                        <div className="relative h-64">
                          <Image
                            src={kayak.imageUrl}
                            alt={kayak.name}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{kayak.name}</h3>
                          <p className="text-gray-600 mb-4">{kayak.description}</p>
                          <div className="flex justify-between items-center">
                            <p className="text-lg font-bold">${kayak.pricePerHour}/hour</p>
                            <p className="text-gray-600">{kayak.capacity}</p>
                          </div>

                          {/* Availability indicator */}
                          {kayak.quantity === 0 ? (
                            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm">
                              Out of Stock
                            </div>
                          ) : kayak.quantity < 2 ? (
                            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm">
                              Only 1 Available
                            </div>
                          ) : (
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                              {kayak.quantity} Available
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3 & 4: Duration and Time Selection */}
        {(sections.timeSlots.isOpen || sections.timeSlots.isComplete) && selectedKayak && (
  <div className="max-w-2xl mx-auto mb-4">
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      onClick={() => handleSectionToggle('timeSlots')}
    >
      <div className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer">
        <h3 className="text-lg font-semibold">
          3. Select Time & Duration
          {sections.timeSlots.isComplete && !sections.timeSlots.isOpen && 
            <span className="ml-2 text-sm text-gray-600">
              ({selectedTime}, {duration} hours)
            </span>
          }
        </h3>
        <button className="text-blue-600">
          {sections.timeSlots.isOpen ? '−' : '+'}
        </button>
      </div>
              
      {sections.timeSlots.isOpen && (
        <div className="p-6">
          {selectedKayak && (
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
              {/* Duration Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">3. Select Duration</h3>
                <div className="grid grid-cols-4 gap-3">
                  {durationOptions.map((hours) => (
                    <button
                      key={hours}
                      onClick={() => handleDurationSelect(hours)}
                      className={`p-2 rounded ${
                        duration === hours
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {hours} {hours === 1 ? "hour" : "hours"}
                    </button>
                  ))}
                </div>
              </div>

                      {/* Time Slots - Now controlled by showTimeSlots */}
                      {showTimeSlots && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    4. Select Start Time
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {getAvailableTimeSlots(duration).map((slot) => (
                      <button
                        key={slot.start}
                        onClick={() => handleTimeSelect(slot.start)}
                        className={`p-2 rounded ${
                          selectedTime === slot.start
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {slot.start}
                      </button>
                    ))}
                  </div>
                  {duration > 1 && (
                    <p className="text-sm text-gray-600 mt-2">
                      Note: Only showing time slots that allow for a {duration}
                      -hour rental within operating hours (9 AM - 5 PM)
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  </div>
)}

        {/* Booking Summary */}
        {sections.calendar.isComplete && 
 sections.kayaks.isComplete && 
 sections.timeSlots.isComplete && (
  <div className="max-w-2xl mx-auto">
    {selectedTime && (
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Reservation Summary</h3>
        <p>Date: {selectedDate?.toLocaleDateString()}</p>
        <p>Kayak: {selectedKayak.name}</p>
        <p>
          Time: {selectedTime} ({duration}{" "}
          {duration === 1 ? "hour" : "hours"})
        </p>
        <p>Price: ${calculateTotalPrice()}</p>
        <button 
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          onClick={handleConfirmBooking} 
        >
          Confirm Reservation
        </button>
      </div>
    )}
  </div>
)}

        {/* Add Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Reservation Details</h2>
              <div className="space-y-2">
                <p>Date: {selectedDate?.toLocaleDateString()}</p>
                <p>Kayak: {selectedKayak?.name}</p>
                <p>Time: {selectedTime} ({duration} {duration === 1 ? "hour" : "hours"})</p>
                <p>Total: ${calculateTotalPrice()}</p>
              </div>
              <div className="mt-6 flex gap-4">
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
                >
                  Continue Shopping
                </button>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
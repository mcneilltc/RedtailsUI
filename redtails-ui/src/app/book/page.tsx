"use client";

import React, { useState } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface Kayak {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  pricePerHour: number;
  capacity: string;
}

const durationOptions = [1, 2, 3, 4];

const kayaks: Kayak[] = [
  {
    id: 1,
    name: "Explorer 12",
    description: "Stable recreational kayak perfect for beginners",
    imageUrl: "/images/kayaks/explorer-12.jpg",
    pricePerHour: 35,
    capacity: "1 Person",
  },
  {
    id: 2,
    name: "Tandem Adventure",
    description: "Two-person kayak ideal for shared experiences",
    imageUrl: "/images/kayaks/tandem-adventure.jpg",
    pricePerHour: 45,
    capacity: "2 Person",
  },
  {
    id: 3,
    name: "Fisher Pro",
    description: "Specialized fishing kayak with rod holders",
    imageUrl: "/images/kayaks/fisher-pro.jpg",
    pricePerHour: 40,
    capacity: "1 Person",
  },
  {
    id: 4,
    name: "River Runner",
    description: "Agile kayak perfect for river exploration",
    imageUrl: "/images/kayaks/river-runner.jpg",
    pricePerHour: 35,
    capacity: "1 Person",
  },
  {
    id: 5,
    name: "Family Cruiser",
    description: "Stable and spacious family kayak",
    imageUrl: "/images/kayaks/family-cruiser.jpg",
    pricePerHour: 50,
    capacity: "2-3 Person",
  },
  {
    id: 6,
    name: "Sport Elite",
    description: "Performance kayak for experienced paddlers",
    imageUrl: "/images/kayaks/sport-elite.jpg",
    pricePerHour: 45,
    capacity: "1 Person",
  },
];

// Mock available time slots
const timeSlots = [
  { start: "9:00 AM", end: "10:00 AM" },
  { start: "10:00 AM", end: "11:00 AM" },
  { start: "11:00 AM", end: "12:00 PM" },
  { start: "12:00 PM", end: "1:00 PM" },
  { start: "1:00 PM", end: "2:00 PM" },
  { start: "2:00 PM", end: "3:00 PM" },
  { start: "3:00 PM", end: "4:00 PM" },
  { start: "4:00 PM", end: "5:00 PM" },
];

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedKayak, setSelectedKayak] = useState<Kayak | null>(null);
  const [duration, setDuration] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showKayaks, setShowKayaks] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const handleKayakSelect = (kayak: Kayak) => {
    setSelectedKayak(kayak);
    setDuration(1); // Set default duration
    setShowTimeSlots(true); // Show time slots immediately
    setSelectedTime(null);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowKayaks(true);
    // Reset subsequent selections
    setSelectedKayak(null);
    setSelectedTime(null);
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Kayak</h1>

        {/* Step 1: Calendar Selection */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">1. Select a Date</h3>
          <Calendar
            onChange={(date) => handleDateSelect(date as Date)}
            value={selectedDate}
            minDate={new Date()}
            className="mx-auto"
          />
        </div>

        {/* Step 2: Kayak Selection */}
        {showKayaks && (
          <div className="max-w-4xl mx-auto mb-6">
            <h3 className="text-lg font-semibold mb-4">2. Select a Kayak</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kayaks.map((kayak) => (
                <div
                  key={kayak.id}
                  onClick={() => handleKayakSelect(kayak)}
                  className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 ${
                    selectedKayak?.id === kayak.id ? 'ring-2 ring-blue-600' : ''
                  }`}
                >
                  {/* Kayak card content remains the same */}
                </div>
              ))}
            </div>
          </div>
        )}
         {/* Step 3 & 4: Duration and Time Selection */}
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {hours} {hours === 1 ? 'hour' : 'hours'}
            </button>
          ))}
        </div>
      </div>

            {/* Time Slots - Now controlled by showTimeSlots */}
      {showTimeSlots && (
        <div>
          <h3 className="text-lg font-semibold mb-4">4. Select Start Time</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {timeSlots.slice(0, -duration + 1).map((slot) => (
              <button
                key={slot.start}
                onClick={() => handleTimeSelect(slot.start)}
                className={`p-2 rounded ${
                  selectedTime === slot.start
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {slot.start}
              </button>
            ))}
          </div>
        </div>
      )}

            {/* Booking Summary */}
            {selectedTime && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>
                <p>Date: {selectedDate?.toLocaleDateString()}</p>
                <p>Kayak: {selectedKayak.name}</p>
                <p>
                  Time: {selectedTime} ({duration} {duration === 1 ? 'hour' : 'hours'})
                </p>
                <p>Price: ${calculateTotalPrice()}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;

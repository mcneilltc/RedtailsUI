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

// Mock available time slots
// const timeSlots = [
//   { start: "9:00 AM", end: "10:00 AM" },
//   { start: "10:00 AM", end: "11:00 AM" },
//   { start: "11:00 AM", end: "12:00 PM" },
//   { start: "12:00 PM", end: "1:00 PM" },
//   { start: "1:00 PM", end: "2:00 PM" },
//   { start: "2:00 PM", end: "3:00 PM" },
//   { start: "3:00 PM", end: "4:00 PM" },
//   { start: "4:00 PM", end: "5:00 PM" },
// ];

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedKayak, setSelectedKayak] = useState<Kayak | null>(null);
  const [duration, setDuration] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showKayaks, setShowKayaks] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const handleKayakSelect = (kayak: Kayak) => {
    if (kayak.quantity === 0) return;
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
        {kayaks.map((kayak) => (
          <div
            key={kayak.id}
            onClick={() =>
              kayak.quantity > 0 ? handleKayakSelect(kayak) : null
            }
            className={`bg-white rounded-lg shadow-md overflow-hidden relative 
      ${
        kayak.quantity > 0
          ? "cursor-pointer transform transition-transform hover:scale-105"
          : "opacity-60 cursor-not-allowed"
      }
      ${selectedKayak?.id === kayak.id ? "ring-2 ring-blue-600" : ""}`}
          >
            <div className="relative h-48">
              <Image
                src={kayak.imageUrl}
                alt={kayak.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{kayak.name}</h3>
              <p className="text-sm text-gray-600">{kayak.description}</p>
              <p className="text-sm font-semibold mt-2">
                ${kayak.pricePerHour}/hour
              </p>
              <p className="text-sm text-gray-600">{kayak.capacity}</p>

              {/* Add availability indicator */}
              {kayak.quantity === 0 ? (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  Out of Stock
                </div>
              ) : kayak.quantity < 2 ? (
                <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                  Only 1 Available
                </div>
              ) : (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  {kayak.quantity} Available
                </div>
              )}
            </div>
          </div>
        ))}
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

            {/* Booking Summary */}
            {selectedTime && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>
                <p>Date: {selectedDate?.toLocaleDateString()}</p>
                <p>Kayak: {selectedKayak.name}</p>
                <p>
                  Time: {selectedTime} ({duration}{" "}
                  {duration === 1 ? "hour" : "hours"})
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

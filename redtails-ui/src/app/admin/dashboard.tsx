'use client';

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg } from '@fullcalendar/core';

interface Booking {
  id: string;
  title: string;
  start: string;
  end: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  kayakName: string;
  duration: number;
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch bookings from your API
  useEffect(() => {
    // Replace this with your actual API call
    const fetchBookings = async () => {
      try {
        // const response = await fetch('/api/admin/bookings');
        // const data = await response.json();
        // setBookings(data);

        // Mock data for demonstration
        setBookings([
          {
            id: '1',
            title: 'Explorer 12 - John Doe',
            start: '2024-03-20T09:00:00',
            end: '2024-03-20T11:00:00',
            customerName: 'John Doe',
            customerEmail: 'john@example.com',
            customerPhone: '(555) 123-4567',
            kayakName: 'Explorer 12',
            duration: 2
          },
          // Add more mock bookings as needed
        ]);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleEventClick = (arg: EventClickArg) => {
    const booking = bookings.find(b => b.id === arg.event.id);
    if (booking) {
      setSelectedBooking(booking);
      setShowModal(true);
    }
  };

  const BookingDetailsModal = () => {
    if (!selectedBooking) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Booking Details</h2>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Customer Information</h3>
              <p>Name: {selectedBooking.customerName}</p>
              <p>Email: {selectedBooking.customerEmail}</p>
              <p>Phone: {selectedBooking.customerPhone}</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Rental Details</h3>
              <p>Kayak: {selectedBooking.kayakName}</p>
              <p>Duration: {selectedBooking.duration} hours</p>
              <p>Start: {new Date(selectedBooking.start).toLocaleString()}</p>
              <p>End: {new Date(selectedBooking.end).toLocaleString()}</p>
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Add edit functionality
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">Rental Calendar</h1>
          
          <div className="mb-6">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              events={bookings.map(booking => ({
                id: booking.id,
                title: booking.title,
                start: booking.start,
                end: booking.end,
                backgroundColor: '#3B82F6', // Customize colors as needed
                borderColor: '#2563EB'
              }))}
              eventClick={handleEventClick}
              slotMinTime="09:00:00"
              slotMaxTime="17:00:00"
              allDaySlot={false}
              height="auto"
              expandRows={true}
              stickyHeaderDates={true}
              nowIndicator={true}
              businessHours={{
                daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
                startTime: '09:00',
                endTime: '17:00',
              }}
            />
          </div>
        </div>
      </div>

      {showModal && <BookingDetailsModal />}
    </div>
  );
};

export default AdminDashboard;

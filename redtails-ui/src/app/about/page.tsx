'use client';

import React from 'react';
import Image from 'next/image';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/about-hero.jpg" // You'll need to add this image
          alt="Red Tails Outdoors"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About Red Tails Outdoors
          </h1>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Red Tails Aviation is dedicated to providing exceptional flight training and aviation
            services while honoring the legacy of the Tuskegee Airmen. We strive to make aviation
            accessible to all, fostering a new generation of diverse pilots and aviation professionals.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-700">
                We maintain the highest standards in training, safety, and service delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusivity</h3>
              <p className="text-gray-700">
                We create an welcoming environment for aspiring aviators from all backgrounds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-700">
                We embrace modern technology and teaching methods to provide the best learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add team member cards here */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/team-member-1.jpg" // You'll need to add this image
                  alt="Team Member Name"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Aaron McNeill</h3>
              <p className="text-gray-600">Owner</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions about our services? We&apos;d  love to hear from you.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

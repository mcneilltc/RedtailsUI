'use client';

import React from 'react';
import Image from 'next/image';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[var(--background-secondary)]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/scenes/shoreshot.png" // Ensure this image exists
          alt="Red Tails Outdoors"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--primary)]">
            About Red Tails Outdoors
          </h1>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Our Mission</h2>
          <p className="text-lg text-[var(--foreground-secondary)] max-w-3xl">
            At Red Tails Outdoors, we’re passionate about helping people connect with nature, explore new adventures, and create unforgettable memories. 
            Nestled in the beautiful landscapes of western North Carolina, we offer kayak and paddleboard rentals, self-guided tours, and special events designed for families, tourists, and outdoor enthusiasts of all kinds.
          </p>
          <br />
          <p className="text-lg text-[var(--foreground-secondary)] max-w-3xl">
            We’re all about making the outdoors accessible, safe, and welcoming for everyone. Inclusivity is at the heart of what we do, and we’re committed to protecting the environment through sustainable practices and following "Leave No Trace" principles. 
            We take pride in creating experiences that let you enjoy the natural beauty around us while respecting it for future generations.
          </p>
          <br />
          <p className="text-lg text-[var(--foreground-secondary)] max-w-3xl">
            At Red Tails Outdoors, we’re not just a rental service: we’re your partners in adventure. 
            Whether you’re gliding across calm waters, joining a fun group event, or discovering the serenity of nature on your own, we’re here to make sure your time outdoors is safe, enjoyable, and memorable. 
            Come paddle with us and see why we love calling North Carolina home!
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/headshots/aaron1.png" // Ensure this image exists
                  alt="Aaron McNeill"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--forground)]">Aaron McNeill</h3>
              <p className="text-[var(--foreground-secondary)]">Owner</p>
              <p className="text-[var(--foreground-secondary)]">
            Owner and founder of Red Tails Outdoors, Aaron is passionate about connecting people with nature.
            An Eagle Scout with over 10 years of experience, I'm a true adventurer at heart! Whether it’s hiking, camping, or kayaking, the great outdoors is my playground.
          </p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/logos/logo2.png" // Ensure this image exists
                  alt="Devin McNeill"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">Devin McNeill</h3>
              <p className="text-[var(--foreground-secondary)]">Guide</p>
              <p className="text-[var(--foreground-secondary)]"> A skilled guide, Devin is a sports enthusiast who’s always ready to dive into action. Whether poolside or courtside, he brings energy and a splash of fun to the team.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/headshots/michelle.png" // Ensure this image exists
                  alt="Michelle McCurdy"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">Michelle McCurdy</h3>
              <p className="text-[var(--foreground-secondary)]">Guide</p>
              <p className="text-[var(--foreground-secondary)]">As a guide, Michelle is nature-loving mom who’s always up for an adventure! From hiking trails to outdoor games, she’s got a knack for making every activity a family affair.
            She is dedicated to providing memorable experiences and fostering a love for the outdoors.
</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[var(--background-secondary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">Get in Touch</h2>
          <p className="text-lg text-[var(--foreground-secondary)] mb-8">
            Have questions about our services? We&apos;d love to hear from you.
          </p>
          <button className="bg-[var(--primary)] text-[var(--background)] px-8 py-3 rounded-lg hover:bg-[var(--primary-hover)] transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

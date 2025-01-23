import React from 'react';
import { Calendar, Users, Heart, TreePine, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartoonIcon = ({ children, className = "" }) => (
  <div className={`transform hover:scale-110 transition-transform duration-300 ${className}`}>
    {children}
  </div>
);

const GetInvolved = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80')] opacity-20 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white">Get Involved</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              There are many ways to contribute to our mission. Whether you want to volunteer, 
              participate in events, or spread awareness, your involvement makes a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Ways to Get Involved */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 stroke-[1.5]" />,
                bgColor: "bg-rose-100",
                title: "Volunteer",
                description: "Join our volunteer program and contribute directly to conservation efforts.",
                link: "#volunteer-form"
              },
              {
                icon: <Calendar className="w-12 h-12 stroke-[1.5]" />,
                bgColor: "bg-emerald-100",
                title: "Events",
                description: "Participate in our community events, workshops, and educational programs.",
                link: "#upcoming-events"
              },
              {
                icon: <Heart className="w-12 h-12 stroke-[1.5]" />,
                bgColor: "bg-sky-100",
                title: "Support",
                description: "Support our cause through donations or by spreading awareness.",
                link: "/donate"
              }
            ].map((option, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CartoonIcon className={`${option.bgColor} p-4 rounded-2xl w-20 h-20 flex items-center justify-center mb-6`}>
                  {option.icon}
                </CartoonIcon>
                <h3 className="text-xl font-semibold mb-4 text-[#98677a]">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Link 
                  to={option.link}
                  className="inline-flex items-center text-emerald-500 hover:text-emerald-600 font-medium"
                >
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div id="upcoming-events" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#98677a]">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80",
                title: "Community Tree Planting Day",
                date: "March 15, 2024",
                location: "Central Park",
                description: "Join us for a day of tree planting and community building."
              },
              {
                image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80",
                title: "Environmental Workshop Series",
                date: "April 5-7, 2024",
                location: "Community Center",
                description: "Learn about sustainable practices and conservation techniques."
              },
              {
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80",
                title: "Earth Day Celebration",
                date: "April 22, 2024",
                location: "City Square",
                description: "A day of activities, music, and environmental awareness."
              },
              {
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80",
                title: "Conservation Fundraiser Gala",
                date: "May 10, 2024",
                location: "Grand Hotel",
                description: "An evening of celebration and support for our conservation efforts."
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#98677a]">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Form */}
      <div id="volunteer-form" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#98677a]">Volunteer With Us</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Interest
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300">
                  <option value="">Select an area</option>
                  <option value="conservation">Conservation</option>
                  <option value="education">Education</option>
                  <option value="events">Event Planning</option>
                  <option value="fundraising">Fundraising</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="Tell us about yourself and why you'd like to volunteer..."
                ></textarea>
              </div>
              <button className="w-full bg-rose-400 hover:bg-rose-500 text-white py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <CartoonIcon className="bg-rose-100 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-12 h-12 text-emerald-500 stroke-[1.5]" />
            </CartoonIcon>
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg mb-8 text-emerald-100">
              Subscribe to our newsletter to receive updates about our projects, 
              upcoming events, and ways to get involved.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-all duration-300"
              />
              <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
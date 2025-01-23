import React from 'react';
import { Heart, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartoonIcon = ({ children, className = "" }) => (
  <div className={`transform hover:scale-110 transition-transform duration-300 ${className}`}>
    {children}
  </div>
);

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80')] opacity-20 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white">About HopeBride</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              We're a passionate community dedicated to making a positive impact on our environment. 
              Through collaboration, innovation, and dedication, we're building a sustainable future 
              for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#98677a]">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To create a world where environmental conservation and community development go 
                hand in hand. We believe in empowering local communities to become stewards of 
                their environment while building sustainable practices that benefit both people 
                and planet.
              </p>
              <div className="bg-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-emerald-800">Key Objectives</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-emerald-500" />
                    <span>Foster environmental stewardship</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-emerald-500" />
                    <span>Build strong community connections</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-emerald-500" />
                    <span>Promote sustainable practices</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
                alt="Nature conservation"
                className="rounded-2xl shadow-xl mb-8"
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-rose-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-rose-500 mb-2">50K+</div>
                  <div className="text-sm text-rose-700">Community Members</div>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-emerald-500 mb-2">100+</div>
                  <div className="text-sm text-emerald-700">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#98677a]">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Executive Director",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Michael Chen",
                role: "Conservation Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Emily Rodriguez",
                role: "Community Outreach",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#98677a]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#98677a]">Recognition & Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 stroke-[1.5]" />,
                title: "Environmental Excellence Award 2023",
                description: "Recognized for outstanding contribution to conservation"
              },
              {
                icon: <Globe className="w-8 h-8 stroke-[1.5]" />,
                title: "Global Impact Recognition",
                description: "Top 100 Environmental Organizations"
              },
              {
                icon: <Users className="w-8 h-8 stroke-[1.5]" />,
                title: "Community Leadership Award",
                description: "Excellence in community engagement"
              },
              {
                icon: <Heart className="w-8 h-8 stroke-[1.5]" />,
                title: "Sustainability Champion",
                description: "Leading innovation in sustainable practices"
              }
            ].map((award, index) => (
              <div key={index} className="text-center">
                <CartoonIcon className="bg-rose-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  {award.icon}
                </CartoonIcon>
                <h3 className="text-lg font-semibold mb-2 text-[#98677a]">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg mb-8 text-emerald-100">
              Be part of our journey to create positive environmental change. 
              Whether through volunteering, donating, or spreading awareness, 
              your contribution matters.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/get-involved" className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Involved
              </Link>
              <Link to="/donate" className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Support Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
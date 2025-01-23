import React from 'react';
import { Trees, Cloud, Bird, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartoonIcon = ({ children, className = "" }) => (
  <div className={`transform hover:scale-110 transition-transform duration-300 ${className}`}>
    {children}
  </div>
);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-bold mb-8 text-white leading-tight">
              Caring Together,<br />Growing Better
            </h1>
            <p className="text-xl mb-12 leading-relaxed text-gray-200 max-w-2xl">
              Imagine a pleasant shared space where nature thrives through community care, 
              and people unite to protect our environment. Together, we're creating a 
              sustainable future for generations to come.
            </p>
            <Link to="/get-involved" className="bg-rose-400 hover:bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
              Join Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-[#98677a] leading-tight">
                A supportive experience that turns caring into impact
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At HopeBride Foundation, we believe in the power of community to make a positive 
                impact on our planet. Join our collaborative network of environmental advocates 
                dedicated to providing sustainable solutions and support.
              </p>
              <Link to="/about" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=2013&q=80"
                alt="Impact"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-emerald-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-sm">Trees Planted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#98677a]">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trees className="w-12 h-12 stroke-[1.5]" />,
                bgColor: "bg-emerald-100",
                title: "Forest Conservation",
                description: "Protecting and restoring vital forest ecosystems through sustainable management."
              },
              {
                icon: <Cloud className="w-12 h-12 stroke-[1.5]" />,
                bgColor: "bg-sky-100",
                title: "Climate Action",
                description: "Leading initiatives to reduce carbon emissions and promote renewable energy."
              },
              {
                icon: <Bird className="w-12 h-12 stroke-[1.5]" />,
                bgColor: "bg-amber-100",
                title: "Community Programs",
                description: "Engaging local communities in conservation efforts and sustainable practices."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CartoonIcon className={`${service.bgColor} p-4 rounded-2xl w-20 h-20 flex items-center justify-center mb-6`}>
                  {service.icon}
                </CartoonIcon>
                <h3 className="text-xl font-semibold mb-4 text-[#98677a]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=2013&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg mb-8 text-emerald-100">
              Join us in our mission to create a sustainable future. Every action counts, 
              and together we can make a lasting impact on our planet.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/donate" className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Donate Now
              </Link>
              <Link to="/get-involved" className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
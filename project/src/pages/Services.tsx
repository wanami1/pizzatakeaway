import React from 'react';
import { TreePine, Cloud, Bird, Users, ArrowRight, Shield, Leaf, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartoonIcon = ({ children, className = "" }) => (
  <div className={`transform hover:scale-110 transition-transform duration-300 ${className}`}>
    {children}
  </div>
);

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80')] opacity-20 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              We offer a comprehensive range of environmental conservation and community 
              development services. Our approach combines expertise with community engagement 
              to create lasting positive impact.
            </p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TreePine className="w-12 h-12 stroke-[1.5]" />,
                bgColor: "bg-emerald-100",
                title: "Forest Conservation",
                description: "Protecting and restoring vital forest ecosystems through sustainable management practices and community involvement.",
                features: [
                  "Tree planting initiatives",
                  "Forest monitoring",
                  "Biodiversity preservation",
                  "Sustainable forestry training"
                ]
              },
              {
                icon: <Cloud className="w-12 h-12 stroke-[1.5]" />,
                bgColor: "bg-sky-100",
                title: "Climate Action",
                description: "Leading initiatives to reduce carbon emissions and promote renewable energy solutions for a sustainable future.",
                features: [
                  "Carbon footprint assessment",
                  "Renewable energy projects",
                  "Climate education programs",
                  "Sustainability consulting"
                ]
              },
              {
                icon: <Bird className="w-12 h-12 stroke-[1.5]" />,
                bgColor: "bg-amber-100",
                title: "Wildlife Protection",
                description: "Safeguarding endangered species and their habitats through conservation efforts and anti-poaching initiatives.",
                features: [
                  "Habitat restoration",
                  "Species monitoring",
                  "Wildlife rehabilitation",
                  "Conservation research"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CartoonIcon className={`${service.bgColor} p-4 rounded-2xl w-20 h-20 flex items-center justify-center mb-6`}>
                  {service.icon}
                </CartoonIcon>
                <h3 className="text-xl font-semibold mb-4 text-[#98677a]">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-600">
                      <ArrowRight className="w-4 h-4 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/get-involved"
                  className="inline-flex items-center text-emerald-500 hover:text-emerald-600 font-medium"
                >
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#98677a]">Additional Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 stroke-[1.5]" />,
                title: "Community Programs",
                description: "Educational workshops and training for local communities"
              },
              {
                icon: <Shield className="w-8 h-8 stroke-[1.5]" />,
                title: "Environmental Protection",
                description: "Monitoring and protecting sensitive ecosystems"
              },
              {
                icon: <Leaf className="w-8 h-8 stroke-[1.5]" />,
                title: "Sustainable Agriculture",
                description: "Promoting eco-friendly farming practices"
              },
              {
                icon: <Globe className="w-8 h-8 stroke-[1.5]" />,
                title: "Global Partnerships",
                description: "Collaborating with international organizations"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CartoonIcon className="bg-rose-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </CartoonIcon>
                <h3 className="text-lg font-semibold mb-2 text-[#98677a]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Process */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#98677a]">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Assessment",
                  description: "We begin with a thorough assessment of environmental needs and community impact."
                },
                {
                  number: "02",
                  title: "Planning",
                  description: "Develop comprehensive strategies and action plans with stakeholder input."
                },
                {
                  number: "03",
                  title: "Implementation",
                  description: "Execute projects with careful monitoring and community engagement."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-emerald-500 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-4 text-[#98677a]">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-lg mb-8 text-emerald-100">
              Whether you're an individual, organization, or business, we're here to help 
              you contribute to environmental conservation and community development.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/get-involved" className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </Link>
              <Link to="/contact" className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
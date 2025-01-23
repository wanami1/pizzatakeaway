import React, { useState, useEffect } from 'react';
import { DollarSign, Heart, TreePine, Users } from 'lucide-react';
import { initDB, createProfile, createDonation } from '../lib/db';

const CartoonIcon = ({ children, className = "" }) => (
  <div className={`transform hover:scale-110 transition-transform duration-300 ${className}`}>
    {children}
  </div>
);

const Donate = () => {
  const [amount, setAmount] = useState<string>('');
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const predefinedAmounts = ['25', '50', '100', '250'];

  useEffect(() => {
    initDB().catch(console.error);
  }, []);

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const userId = crypto.randomUUID();
      
      // Create profile
      await createProfile({
        id: userId,
        full_name: fullName,
        email: email
      });

      // Create donation
      await createDonation({
        user_id: userId,
        amount: parseFloat(amount),
        is_monthly: isMonthly,
        status: 'pending'
      });

      setSuccess(true);
      // Reset form
      setAmount('');
      setFullName('');
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80')] opacity-20 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white">Support Our Cause</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Your donation helps us continue our vital work in environmental conservation 
              and community development. Every contribution makes a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Form Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#98677a]">Make a Donation</h2>
              {success ? (
                <div className="bg-emerald-50 p-6 rounded-xl text-emerald-800">
                  <h3 className="text-xl font-semibold mb-4">Thank You for Your Donation!</h3>
                  <p>We've sent a confirmation email with more details about your donation.</p>
                </div>
              ) : (
                <form onSubmit={handleDonation} className="space-y-6">
                  {error && (
                    <div className="bg-rose-50 text-rose-500 p-4 rounded-xl">
                      {error}
                    </div>
                  )}
                  
                  {/* Donation Type */}
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex gap-4">
                      <button
                        type="button"
                        className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                          !isMonthly 
                            ? 'bg-emerald-500 text-white shadow-lg' 
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                        onClick={() => setIsMonthly(false)}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                          isMonthly 
                            ? 'bg-emerald-500 text-white shadow-lg' 
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                        onClick={() => setIsMonthly(true)}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {predefinedAmounts.map((preset) => (
                        <button
                          type="button"
                          key={preset}
                          className={`py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                            amount === preset 
                              ? 'bg-emerald-500 text-white shadow-lg' 
                              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                          onClick={() => setAmount(preset)}
                        >
                          ${preset}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter custom amount"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-rose-400 hover:bg-rose-500 text-white py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Donation'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Your donation is secure and encrypted. You can cancel your monthly donation at any time.
                  </p>
                </form>
              )}
            </div>

            {/* Impact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#98677a]">Your Impact</h3>
              <div className="grid gap-6">
                {[
                  {
                    icon: <TreePine className="w-8 h-8 stroke-[1.5]" />,
                    title: "Plant Trees",
                    description: "$25 helps plant 10 new trees in areas affected by deforestation"
                  },
                  {
                    icon: <Users className="w-8 h-8 stroke-[1.5]" />,
                    title: "Support Communities",
                    description: "$50 provides resources for local community conservation projects"
                  },
                  {
                    icon: <Heart className="w-8 h-8 stroke-[1.5]" />,
                    title: "Protect Wildlife",
                    description: "$100 helps protect endangered species and their habitats"
                  }
                ].map((impact, index) => (
                  <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-xl">
                    <CartoonIcon className="bg-emerald-100 p-4 rounded-xl h-fit">
                      {impact.icon}
                    </CartoonIcon>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[#98677a]">{impact.title}</h4>
                      <p className="text-gray-600">{impact.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-emerald-800">Why Donate?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-emerald-500 mt-1" />
                    <span>100% of donations go directly to conservation projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-emerald-500 mt-1" />
                    <span>Tax-deductible contributions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-emerald-500 mt-1" />
                    <span>Regular updates on project progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-emerald-500 mt-1" />
                    <span>Join a community of environmental supporters</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
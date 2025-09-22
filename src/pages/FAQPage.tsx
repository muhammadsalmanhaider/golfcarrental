import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What documents do I need to rent a luxury car in Dubai?",
      answer: "You need a valid driving license (UAE, GCC, or International), passport copy, visa copy (for tourists), and a credit card for security deposit."
    },
    {
      question: "Is there a minimum age requirement for renting luxury cars?",
      answer: "Yes, the minimum age is 21 years for economy cars and 25 years for luxury and sports cars. Some premium vehicles may require drivers to be 30 years or older."
    },
    {
      question: "Do you offer free delivery and pickup?",
      answer: "Yes, we provide free delivery and pickup within Dubai city limits. For locations outside Dubai, additional charges may apply."
    },
    {
      question: "What is your zero deposit policy?",
      answer: "Our zero deposit policy means you don't need to pay a cash deposit. However, we do require a credit card authorization for security purposes."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparent pricing. All costs including insurance, registration, and basic maintenance are included in the rental price."
    },
    {
      question: "Can I extend my rental period?",
      answer: "Yes, you can extend your rental period subject to vehicle availability. Please contact us at least 24 hours before your rental expires."
    },
    {
      question: "What happens if the car breaks down?",
      answer: "All our vehicles come with 24/7 roadside assistance. In case of breakdown, we'll provide immediate support and a replacement vehicle if needed."
    },
    {
      question: "Do you provide chauffeur services?",
      answer: "Yes, we offer professional chauffeur services for all our vehicles. This service is available at an additional cost."
    },
    {
      question: "What is included in the insurance coverage?",
      answer: "Our comprehensive insurance covers collision damage, theft protection, and third-party liability. Personal accident insurance is also available."
    },
    {
      question: "Can I take the rental car outside Dubai?",
      answer: "Yes, you can drive within the UAE. For travel to other GCC countries, please inform us in advance as additional documentation may be required."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
     <section className="relative bg-white py-12">
      <img src="" alt="" />
      <div className="absolute inset-0 bg-gray-50/40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Do You Need To Know To Rent a Car in Dubai
          </h1>
        </div>
      </div>
    </section>
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-6"
      >
        <FaArrowLeft />
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our luxury car rental services in Dubai
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <FaChevronUp className="text-yellow-600 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-yellow-600 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="tel:+971501234567" 
              className="bg-white border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-6 py-3 rounded font-medium transition-colors"
            >
              Call: +971 50 123 4567
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQPage;
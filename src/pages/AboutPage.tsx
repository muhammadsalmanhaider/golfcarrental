import { FC } from "react";
import { Link } from "react-router-dom";

const AboutPage: FC = () => {
  return (
    <div className="font-sans text-gray-800 leading-relaxed">
      {/* Hero Section */}
        <section className="relative bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Rotana Star</h2>

          {/* Divider with Chevron */}
          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              Providing only the best cars at the most competitive price is the
              core value that <strong>Rotana Star</strong> is following. Our
              concept is built entirely around what the client wants.
            </p>
            <p>
              We pride ourselves as the leading UAE car rental company. Having
              our fleet with cars that are less than 3 years old and carefully
              taken care of, allows us to keep them in pristine condition,
              always inspected and sanitized. The fact that we own all our cars
              makes us unique and our prices the best in the market too. So any
              customer can choose the car based on their personal preferences,
              budget, and purposes.
            </p>
            <p>
              Every vehicle, like a person, is unique, with its soul and
              signature. We have a wide range of sports, luxury, exotic,
              convertible, and economic cars as well as SUVs for any occasion or
              expectation. Many of our clients know exactly what they want to
              rent, but if you are confused and need advice, we are happy to
              help.
            </p>
            <p>
              Our client satisfaction is our priority, so we have created an
              ideal formula that helps us to put smiles on the customers’ faces.
            </p>
            <p>
              Amazing value of money combined with top-notch service gives an
              unforgettable experience.
            </p>
            <p>
              To enjoy it more, we made sure that the car booking process with
              Rotana Star is easy and stress-free. Simply select the car you
              want, leave a request online or call us to book it.
            </p>
            <p>
              For the delivery, we offer 2 options. You can either come to pick
              up the car from our Dubai showroom, or the car can be handed over
              to you anywhere in the UAE.
            </p>
          </div>
        </div>

        {/* Right Column (for Image or Empty for now) */}
        <div className="flex items-center justify-center">
          {/* Add your image here */}
         
        </div>
      </div>
    </section>

      {/* FAQ / Why Choose Section */}
       <section className="relative bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left Content */}
        <div>
          {/* Section Title */}
          <h2 className="text-3xl font-bold mb-4">Where are you located?</h2>

          {/* Divider with Chevron */}
          <div className="w-12 h-6 mb-6 border-t border-gray-800 relative">
            <svg
              className="absolute -top-3 left-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="square"
              strokeMiterlimit="10"
              height="20"
              width="20"
            >
              <polyline points="0,18 12,6 24,18" />
            </svg>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              We are conveniently located in the heart of Al Barsha, right next
              to the Mall of the Emirates in Dubai.
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                Do you deliver all over the UAE?
              </h2>
              <p>
                Yes. No matter in which Emirate, we provide free delivery for
                any car to the house, office, or airport.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                Do you have a chauffeur service?
              </h2>
              <p>
                Yes, for those who want to enjoy their time to the fullest,
                exploring and appreciating the views and having fun, we provide
                a chauffeur as well as limousine service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                Why is it better to rent a car with Rotana Star?
              </h2>
              <p>
                Many of you want to enjoy your time to the fullest without
                waiting for public transport or being on the lookout for a taxi.
                At Rotana Star we have a fleet of cars ranging from exotic
                Lamborghini and Ferrari, luxury Mercedes and Range Rover, sports
                Bentley and McLaren, SUVs Porsche and Cadillac to economy Kia
                and Mazda.
              </p>
              <p>
                With a great variety of choices available for any pocket and
                preferences, we make sure that everyone finds the ideal car for
                rent. Our ‘can-do’ policy and exceptional customer service help
                to make your renting and driving experience bespoke. We know how
                important it is to communicate smoothly and understand what our
                customers are looking for, so the whole team works closely to
                ensure that all your requests and expectations are fulfilled.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Our Values:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Transparency:</strong> No hidden cost. You pay only
                  for what is in the contract.
                </li>
                <li>
                  <strong>Respect:</strong> For both our clients and teammates
                  as communication is the foundation of long-lasting
                  relationships.
                </li>
                <li>
                  <strong>Best cost-quality ratio:</strong> We want our
                  customers to be able to rent a car they have been dreaming of,
                  so having our own fleet allows us to rent even exotic cars
                  with the best prices on the market.
                </li>
                <li>
                  <strong>Honesty:</strong> We don’t advertise or promise
                  something we don’t deliver. All our cars listed on the website
                  are available for booking.
                </li>
                <li>
                  <strong>Client focus:</strong> We treat every client like a
                  family member. Of course, no one is perfect and sometimes
                  complaints happen, so we make sure to improve ourselves and
                  ensure they do not happen again.
                </li>
                <li>
                  <strong>Safety:</strong> With the current situation, we take
                  sanitization seriously to provide ultimate car cleanliness and
                  safety to every client.
                </li>
                <li>
                  <strong>Diversity:</strong> We always make sure to have new
                  editions not only in models but also in colors for our premium
                  car fleet, purchased directly from certified dealers.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column (for Image or Empty) */}
        <div className="flex items-center justify-center">
          {/* You can add an image here */}
        </div>
      </div>
    </section>

      {/* About Dubai Section */}
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
          alt="Dubai Skyline"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl mx-6 p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">About Dubai</h2>
            <p className="mb-4">
              Who doesn’t know <span className="font-semibold">Dubai?</span> The hub of beauty, luxury, and glamour...
              Dubai is one of the most recognized travel destinations in the world.
            </p>
            <p>
              Over the years, Dubai grew from a desert fishing village to a cultural melting pot with unlimited leisure,
              business, and work opportunities. Today, Dubai attracts more than 3 million new comers across the UAE
              every year.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 text-center py-6 mt-10">
        <p>© 2025 - All Rights Reserved - Rotana Star Luxury Car Rental in Dubai</p>
        <div className="flex justify-center space-x-4 mt-3">
          <Link to="/about" className="hover:text-black">About Us</Link>
          <Link to="/blogs" className="hover:text-black">Blogs</Link>
          <Link to="/faqs" className="hover:text-black">FAQs</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

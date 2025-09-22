import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaUser } from 'react-icons/fa';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Luxury Cars to Rent in Dubai 2024",
      excerpt: "Discover the most sought-after luxury vehicles available for rent in Dubai this year.",
      image: "https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 15, 2024",
      author: "Dubai Car Expert"
    },
    {
      id: 2,
      title: "Dubai Driving Guide: Rules and Regulations",
      excerpt: "Everything you need to know about driving in Dubai as a tourist or visitor.",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 10, 2024",
      author: "Travel Guide"
    },
    {
      id: 3,
      title: "Best Routes for Luxury Car Tours in Dubai",
      excerpt: "Explore Dubai's most scenic routes perfect for luxury car experiences.",
      image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 5, 2024",
      author: "Dubai Explorer"
    },
    {
      id: 4,
      title: "Sports Car Rental: Performance vs Comfort",
      excerpt: "Understanding the balance between high performance and daily usability.",
      image: "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 28, 2024",
      author: "Auto Specialist"
    },
    {
      id: 5,
      title: "Luxury Car Maintenance: What Renters Should Know",
      excerpt: "Important tips for taking care of your rental luxury vehicle.",
      image: "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 20, 2024",
      author: "Maintenance Expert"
    },
    {
      id: 6,
      title: "Dubai's Car Culture: A Luxury Paradise",
      excerpt: "Exploring Dubai's unique automotive culture and luxury car scene.",
      image: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 15, 2024",
      author: "Culture Writer"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-6"
      >
        <FaArrowLeft />
        Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">LUXURY CAR RENTAL BLOG</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest news, tips, and insights about luxury car rentals in Dubai
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-yellow-600 transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-yellow-600" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-yellow-600" />
                  <span>{post.author}</span>
                </div>
              </div>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors">
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
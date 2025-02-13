import React from 'react';
import { Sprout, Sun, Cloud, Droplets, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000"
            alt="Wheat field at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <nav className="relative z-10 flex justify-between items-center px-8 py-6">
          <div className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold text-white">Tirumala FarmFresh</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="#services" className="hover:text-green-400 transition">Services</a>
            <a href="#products" className="hover:text-green-400 transition">Products</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          </div>
        </nav>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Sustainable Farming for Tomorrow</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">Cultivating quality produce while preserving our environment for future generations</p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition">
            Learn More
            <ChevronDown className="inline ml-2 h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
            <p className="text-gray-600">Using solar power and natural resources to minimize environmental impact</p>
          </div>
          <div className="text-center">
            <Cloud className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Weather Monitoring</h3>
            <p className="text-gray-600">Advanced systems to track and respond to weather conditions</p>
          </div>
          <div className="text-center">
            <Droplets className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Irrigation</h3>
            <p className="text-gray-600">Efficient water management systems for optimal crop growth</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800",
                title: "Fresh Vegetables",
                description: "Locally grown, organic vegetables"
              },
              {
                image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?auto=format&fit=crop&w=800",
                title: "Organic Fruits",
                description: "Seasonal fruits from our orchards"
              },
              {
                image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800",
                title: "Grain Products",
                description: "Premium quality grains and cereals"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Phone className="h-6 w-6 text-green-500 mr-4" />
                <span>(+91)-8247425263 </span>
              </div>
              <div className="flex items-center mb-6">
                <Mail className="h-6 w-6 text-green-500 mr-4" />
                <span>contact@tirumalafarmfresh.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-500 mr-4" />
                <span> Sarangapalli Agraharam Village, India, Andhra pardesh State 522414</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                placeholder="tirumalaformfresh@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              ></textarea>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold">Tirumala FarmFresh</span>
            </div>
            <p className="text-gray-400">Sustainable farming for a better tomorrow</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-green-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-green-400 transition">Services</a></li>
              <li><a href="#products" className="hover:text-green-400 transition">Products</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Vegetables</li>
              <li>Fruits</li>
              <li>Grains</li>
              <li>Organic Products</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

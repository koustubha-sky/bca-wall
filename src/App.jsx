import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Menu } from "lucide-react";

import './App.css'; // Import the App.css file

const images = [
  "https://img.freepik.com/free-photo/spicy-minced-chicken-white-plate-complete-with-cucumber-lettuce-side-dishes_1150-23194.jpg?ga=GA1.1.1087557052.1740331164&semt=ais_hybrid",
  "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://media.istockphoto.com/id/1399174023/photo/potato-chips-on-black.jpg?s=612x612&w=0&k=20&c=vOwGrQXXVleiFULJ6Ur7db-esbAor-GJ1i-youx9Les="
];
const games = [
  { name: "Cyber Adventure", description: "Explore a futuristic world full of mysteries." },
  { name: "Mystic Quest", description: "Embark on an epic journey to uncover ancient secrets." },
  { name: "Shadow Runner", description: "Race through neon-lit cityscapes in this thrilling game." },
  { name: "Galactic Wars", description: "Battle across the galaxy in intense space combat." }
];
const App = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [showGames, setShowGames] = useState(false);

  

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const scrollToMenu = () => {
    document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHomeClick = () => {
    window.location.href = "/"; // Navigates to root
  };
  const toggleFeedback = () => {
    setFeedbackOpen(prev => !prev);
  };
  
  


 
  return (
    <div className="horror-theme">
      <header className="flex justify-between items-center p-6">
        <div className="text-3xl font-bold">
          <img id="ghost" src="src/download.png" alt="" />
        </div>
        <nav className="space-x-8 text-lg flex items-center ">
          <a href="#" className="hover:text-gray-400 mr-10">
           <b> <i> P</i>rethada Loka</b>
          </a>
          <div className="top-right-menu-icon" onClick={toggleMenu}>
            <div className="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
      </header>
      

      {/* Animated Menu Popup */}
      <div id='pop' className={`menu-popup ${menuOpen ? "menu-open" : "menu-close"}`}>
        <button onClick={toggleMenu} className="close-btn">
          ✕
        </button>
        <button onClick={toggleMenu}>Home</button>
        
      

        <button onClick={toggleFeedback}>Feedback</button>
        {feedbackOpen && (
          <motion.div 
            className="mt-4 p-5 bg-black border border-red-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-red-600">Horror Feedback</h2>
            <form className="flex flex-col space-y-4 mt-4" target="_blank" action="https://formsubmit.co/indianthunder56@gmail.com" method="POST">
              <input type="text" placeholder="Your Name" className="p-2 border border-gray-400 rounded bg-gray-800 text-white" />
              <input type="email" placeholder="Your E-Mail" className="p-2 border border-gray-400 rounded bg-gray-800 text-white" />
              <textarea placeholder="Your Feedback" className="p-2 border border-gray-400 rounded bg-gray-800 text-white"></textarea>
              <button type="submit" className="bg-red-900 text-white p-2 rounded">Submit</button>
              <button onClick={toggleFeedback} className="text-red-600 h-12">Close</button>
            </form>
          </motion.div>
        )}
        
      </div>

      


      <main className="text-center py-16"> 
        <div className="inline-block bg-red-900 text-red-200 px-4 py-2 rounded-full mb-4">
          Horror Themed: MENU <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i> ()
        </div>
        <h1 className="text-5xl font-bold mb-4">Brewed to Perfection</h1>
        <p className="text-lg mb-8">Your perfect spot for Sandwich coffin, Fries, and more.</p>
        <button onClick={scrollToMenu} className="bg-red-900 text-red-200 px-6 py-3 rounded-full text-lg">
          Explore menu
        </button>
      </main>
      
      <section className="flex flex-col items-center space-y-4 px-6">
          <div className="relative  overflow-hidden flex items-center justify-center">
            
            <div className="w-full flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((image, index) => (
                <img
                 style={{ minWidth: '100%' }}
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-90 h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>

            <button 
              onClick={handleNextClick} 
              className="w-10 absolute right-2 bg-red-900 text-red-200 rounded-full p-2 shadow-md z-10"
            >
              <i className="fas fa-chevron-right"> <b>  </b> </i>
            </button>
          </div>

          {/* Indicators (Optional) */}
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <span 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-red-900' : 'bg-gray-500'}`}
              />
            ))}
          </div>
      </section>


      <section id="menu-section" className="py-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8">Our Menu</h2>
        <div className="flex m-5 justify-center space-x-8">
          <div className="text-center">
            <img

              src="src\fry.jpeg"
              alt="Espresso"
              className="rounded-lg   shadow-lg mb-4 mask"
            />
            <h3 className="text-2xl font-bold">Terri-Fries</h3>
            <p className="text-lg">₹25.00</p>
          </div>
          <div className="text-center">
            <img
              src="src\momojpeg.jpeg"
              alt="Cappuccino"
              className="rounded-lg  shadow-lg mb-4 mask"
            />
            <h3 className="text-2xl font-bold">Steamed <br /> Scream</h3>
            <p className="text-lg">₹40.00</p>
          </div>
          
        </div>
      </section>
      

      <section id="menu-section" className=" bg-gray-800">
        
        <div className="flex m-5 justify-center space-x-8">
      <div className="text-center">
            <img
              src="src\lays.jpeg"
              alt="Bag of Bones"
              className="rounded-lg   shadow-lg mb-4 mask"
            />
            <h3 className="text-2xl font-bold">Bag of Bones</h3>
            <p className="text-lg">₹45.00</p>
          </div>
          <div className="text-center">
            <img
              src="src\gobi.jpeg"
              alt="Bloody Eye Balls"
              className="rounded-lg shadow-lg mb-4 mask"
            />
            <h3 className="text-2xl font-bold">Bloody Eye Balls</h3>
            <p className="text-lg">₹50.00</p>
          </div>
          </div>
        </section>

      <section id="menu-section" className="py-16 bg-gray-700 m-1">
        <h2 className="text-4xl font-bold text-center mb-8">Juices</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <img
              src="https://myfoodstory.com/wp-content/uploads/2024/05/Mango-Juice-4-500x500.jpg"
              alt="Special 1"
              className="rounded-lg shadow-lg mb-4 mask"
            />
            <h3 className="text-2xl font-bold">The Mango Curse</h3>
            <p className="text-lg">₹20.00</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.throughthefibrofog.com/wp-content/uploads/2022/04/blueberry-mocktail-5-500x500.jpg"
              alt="Special 2"
              className="rounded-lg shadow-lg mb-4 mask"
            />
            <h3 className="text-2xl font-bold">Witch's Brew (Blueberry Juice )</h3>
            <p className="text-lg">₹20.00</p>
          </div>
          
        </div>
      </section>

      <section id="menu-section" className="py-1 bg-gray-700">
        
        <div className="flex justify-center space-x-8 m-2">
        <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/2153260150/photo/fresh-coconut-juice-with-tropical-beach-view.jpg?s=612x612&w=0&k=20&c=_e2n3Oce9w0nrIoJ91AxuvSuo_QjRoeKtoDsGdF0wzM="
              alt="Special 3"
              className="rounded-lg shadow-lg mb-4 mask"
            />
            <h3 className="text-2xl font-bold">Tender Coconut</h3>
            <p className="text-lg">₹20.00</p>
          </div>
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/485524950/photo/glass-of-fresh-watermelon-juice-on-wood.jpg?s=612x612&w=0&k=20&c=RQ7txpdaDYNL_vt-k7lUheTbG8qan5-pb-OHznSx_zg="
              alt="Special 4"
              className="rounded-lg shadow-lg mb-4 mask"
            />
            <h3 className="text-2xl font-bold">Watermelon Juice</h3>
            <p className="text-lg">₹20.00</p>
          </div>
        </div>
      </section>
      <section id="menu-section" className="py-1 bg-gray-700">
        
        <div className="flex justify-center space-x-8 m-5">
        <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1372978130/photo/red-guava-juice-is-served-on-a-wooden-background-with-guava-fruit-slices-and-leaf-decorations.jpg?s=612x612&w=0&k=20&c=81EVTPwKRLpmR0zgknAEgn2_gvOOcjitfAcjJMjnz48="
              alt="Special 3"
              className="rounded-lg shadow-lg mb-4 mask"
            />
            <h3 className="text-2xl font-bold">Guava Ghost</h3>
            <p className="text-lg">₹20.00</p>
          
          </div>
        </div>
      </section>
            
    </div>
  );
};

export default App;


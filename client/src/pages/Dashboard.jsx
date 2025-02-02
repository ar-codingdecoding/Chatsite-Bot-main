import { useState } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { state } = useLocation();
  const [selectedChunk, setSelectedChunk] = useState(0);

  const dummyChunks = [
    {
      id: 0,
      title: "Homepage Introduction",
      content:
        "Welcome to our website! We offer innovative solutions for modern businesses. Our platform helps companies streamline their operations and boost productivity.",
    },
    {
      id: 1,
      title: "About Section",
      content:
        "Our team of experts is dedicated to providing top-notch services. With years of experience in the industry, we understand what businesses need to succeed.",
    },
    {
      id: 2,
      title: "Services Overview",
      content:
        "We offer a comprehensive suite of services including consulting, development, and support. Our solutions are tailored to meet your specific needs.",
    },
    {
      id: 3,
      title: "Contact Information",
      content:
        "Contact us today to learn more about our services. We're available 24/7 to answer your questions and provide support.",
    },
    {
      id: 4,
      title: "Mission Statement",
      content:
        "Our mission is to deliver exceptional value to our clients. We believe in building long-term relationships based on trust and mutual success.",
    },
  ];

  return (
    <div className='min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
      <Navbar />

      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Company Logo Section */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              <motion.img
                src={assets.header_img}
                alt="Company Bot"
                className="w-32 h-32 rounded-full mb-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <img
                src={assets.logo || "/placeholder.svg"}
                alt="Company Logo"
                className="w-full max-w-[200px]"
              />
            </div>
          </div>

          {/* Company Details Section */}
          <div className="md:col-span-2 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Basic Company Details
            </h2>
            <div className="space-y-3">
              <p className="text-lg">
                <span className="font-bold">Company Name:</span>{" "}
                {state?.websiteName}
              </p>
              <p className="text-blue-600 hover:underline">
                <a
                  href={state?.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {state?.websiteUrl}
                </a>
              </p>
              <p className="text-gray-600">{state?.description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Test Chatbot
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Integrate on your website
              </button>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                Test Integration
              </button>
            </div>
          </div>
        </div>

        {/* Chunks Section with Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Chunks Sidebar */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Content Chunks</h3>
            <div className="space-y-2">
              {dummyChunks.map((chunk) => (
                <button
                  key={chunk.id}
                  onClick={() => setSelectedChunk(chunk.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    selectedChunk === chunk.id
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {chunk.title}
                </button>
              ))}
            </div>
          </div>

          {/* Chunk Content */}
          <div className="md:col-span-3 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedChunk}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  {dummyChunks[selectedChunk].title}
                </h3>
                <div className="prose max-w-none">
                  <p className="text-gray-700">
                    {dummyChunks[selectedChunk].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

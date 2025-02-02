import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import WebsiteForm from "./WebsiteForm";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { userData, isLoggedin } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showForm ? -40 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <motion.img
          src={assets.header_img}
          alt=""
          className="w-36 h-36 rounded-full mb-6"
          animate={{
            scale: [1, 1.1, 1],
            rotate: showForm ? 0 : [0, -10, 10, -10, 0],
          }}
          transition={{
            duration: showForm ? 0 : 2,
            repeat: showForm ? 0 : Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -right-4 top-0 bg-white px-4 py-2 rounded-full shadow-lg"
        >
          {showForm ? "🤔" : "👋"}
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h1 className="flex items-center justify-center gap-2 text-xl sm:text-3xl font-medium">
              Hey {userData ? userData.name : "Developer"}!
              <img
                className="w-8 aspect-square"
                src={assets.hand_wave || "/placeholder.svg"}
                alt=""
              />
            </h1>
            <h2 className="text-3xl sm:text-5xl font-semibold">
              Welcome to our app
            </h2>
            <p className="max-w-md">
              Let's start with a quick product tour and we will have you up and
              running in no time!
            </p>
            <button
              onClick={() =>
                isLoggedin ? setShowForm(true) : navigate("/login")
              }
              className="border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all"
            >
              Get Started
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Tell us about your website
            </h2>
            <p className="text-gray-600 mb-6">
              We'll help you get everything set up
            </p>
            <WebsiteForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";

// const Header = () => {
//   const { userData } = useContext(AppContext);
//   return (
//     <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
//       <img
//         src={assets.header_img}
//         alt=""
//         className="w-36 h-36 rounded-full mb-6"
//       />
//       <h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2">
//         Hey {userData ? userData.name : "Developer"}!
//         <img className="w-8 aspect-square" src={assets.hand_wave} alt="" />
//       </h1>
//       <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
//         Welcome to our app
//       </h2>
//       <p className="mb-8 max-w-md">
//         Let's start with a quick product tour and we will have you up and
//         running in no time!
//       </p>
//       <button className="border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all">
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default Header;

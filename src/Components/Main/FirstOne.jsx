import { useState } from "react";
import { GiRainbowStar } from "react-icons/gi";
import WhyKid from "./whykid";
export default function FirstOne() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-10 px-6 md:px-16">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
            <GiRainbowStar className="text-pink-600 mr-2" />
            Calm Minds, Happy Hearts
          </div>

          {/* Heading */}
          <h1 className="text-black text-3xl md:text-6xl font-bold leading-tight">
            Mindfulness & Meditation for Kids (4–14)
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-base md:text-lg max-w-lg">
            Fun, story-based meditations that build focus, kindness, and
            confidence. Safe, ad-free, and crafted with child-development
            experts.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-md"
            >
              Start Free Trial
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md">
              Explore Programs
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="bg-white shadow-md px-4 py-2 rounded-xl text-center">
              <p className="text-gray-500 text-sm">Improves</p>
              <p className="text-red-500 font-semibold">Focus</p>
            </div>
            <div className="bg-white shadow-md px-4 py-2 rounded-xl text-center">
              <p className="text-gray-500 text-sm">Reduces</p>
              <p className="text-yellow-500 font-semibold">Stress</p>
            </div>
            <div className="bg-white shadow-md px-4 py-2 rounded-xl text-center">
              <p className="text-gray-500 text-sm">Better</p>
              <p className="text-blue-500 font-semibold">Sleep</p>
            </div>
            <div className="bg-white shadow-md px-4 py-2 rounded-xl text-center">
              <p className="text-gray-500 text-sm">Builds</p>
              <p className="text-pink-500 font-semibold">Empathy</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center relative">
          <div className="bg-gray-200 w-full h-100   rounded-2xl flex items-center justify-center">
            <span className="text-gray-500"></span>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-6 left-9 bg-white shadow-xl rounded-xl p-4 w-60">
            <h3 className="font-semibold mb-2">Today's Journey</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>🐉 Dragon Breath (3 min)</li>
              <li>🦋 Butterfly Body Scan (5 min)</li>
              <li>🌙 Sleep Story: Star Boat (7 min)</li>
            </ul>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
          <div className="bg-gray-200 rounded-xl p-6 w-full  max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">New Message</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 text-xl"
              >
                &times;
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="recipient-name" className="block text-gray-700">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="recipient-name"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label htmlFor="email-name" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="mail"
                  id="email-name"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label htmlFor="phone-name" className="block text-gray-700">
                  Phone Number:
                </label>
                <input
                  type="number"
                  id="phone-name"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label htmlFor="class-name" className="block text-gray-700">
                  Class:
                </label>
                <input
                  type="text"
                  id="class-name"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label htmlFor="message-text" className="block text-gray-700">
                  Message:
                </label>
                <textarea
                  id="message-text"
                  className="w-full border rounded px-3 py-2 mt-1"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <WhyKid />
    </>
  );
}

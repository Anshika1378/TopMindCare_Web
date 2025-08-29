import { FaSchool } from "react-icons/fa"; 
import { SlCalender } from "react-icons/sl"; 
import { FaDownload } from "react-icons/fa"; 
import { FaRupeeSign } from "react-icons/fa";
import { AiFillCheckSquare } from "react-icons/ai";
import FamilySay from "./Familysay";
export default function ChooseCard() {
  return (
    <>
      <div className="container px-4 py-12 mx-auto text-center">
        <h1 className="text-center text-4xl font-semibold">Choose your Plan</h1>
        <p className="mt-5">Start free, cancel anytime </p>
      </div>
      <div className="flex flex-wrap gap-5 px-5 py-3 items-center justify-center w-auto  ">
        <div className="card w-100 border-2 border-gray-400 shadow-2xl shadow-gray-600 rounded-xl">
          <h1 className="text-center text-black text-3xl font-semibold">
            Starter
          </h1>
          <p className="text-center text-sm text-gray-600 ">
            Perfect for new explorer
          </p>
          <h1 className="text-center text-purple-600 font-bold text-5xl">
            Free
          </h1>
          <div className="card-body mt-2">
            <h1>
              <AiFillCheckSquare className="text-green-500 inline-flex" />5
              guided meditation
            </h1>
            <h1>
              <AiFillCheckSquare className="text-green-500 inline-flex" />2
              sleep stories
            </h1>
            <h1>
              <AiFillCheckSquare className="text-green-500 inline-flex" />
              Parent starter kit
            </h1>
          </div>
          <div className="flex items-center justify-center mb-3 mt-3">
            <button className="bg-purple-500 text-white font-medium hover:bg-purple-700 px-4 py-2 rounded ">
              Get Started
            </button>
          </div>
        </div>
        <div className="card w-100 border-2 border-gray-400 shadow-2xl shadow-gray-600 rounded-xl ">
          <h1 className="text-center text-black text-3xl font-semibold">
            Premium
          </h1>
          <p className="text-center text-sm text-gray-600 ">
            Unlock full Potential
          </p>
          <h1 className="inline-flex items-center ml-10 px-2.5  text-purple-600 font-bold text-5xl">
            <FaRupeeSign className="inline-flex items-center" />
            299/mo
          </h1>
          <div className="card-body">
            <h1>
              <AiFillCheckSquare className="text-green-500 inline-flex" />5
              unlimited meditation
            </h1>
            <h1>
              <AiFillCheckSquare className="text-green-500 inline-flex" />2
              sleep stories & calming music
            </h1>
            <h1>
              <AiFillCheckSquare className="text-green-500 inline-flex" />
              Printable guides for parents
            </h1>
          </div>
          <div className="flex items-center justify-center mb-3 mt-3">
            <button className="bg-purple-500 text-white font-medium hover:bg-purple-700 px-4 py-2 rounded ">
              Upgrade Now
            </button>
          </div>
        </div>
        <div className="card w-100 border-2 border-gray-400 shadow-2xl shadow-gray-600 rounded-xl">
          <h1 className="text-center text-black text-3xl font-semibold">
            Family
          </h1>
          <p className="text-center text-sm text-gray-600 ">
            For multiple kids
          </p>
          <h1 className="inline-flex items-center ml-10 px-2.5 text-center text-purple-600 font-bold text-5xl">
            <FaRupeeSign className="text-center inline-flex" />
            499/mo
          </h1>
          <div className="card-body">
            <h1>
              <AiFillCheckSquare className="text-green-500 inline-flex" />5 4
              child profiles
            </h1>
            <h1>
              <AiFillCheckSquare className="text-green-500 inline-flex" />2
              Reward and straks
            </h1>
            <h1>
              <AiFillCheckSquare className="text-green-500 inline-flex" />
              Classroom meditation pack
            </h1>
          </div>
          <div className="flex items-center justify-center mb-3 mt-3">
            <button className="bg-purple-500 text-white font-medium hover:bg-purple-700 px-4 py-2 rounded ">
              Get Family plan
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-15 px-4 py-10 mx-auto bg-blue-100 border-2 border-blue-200 shadow-2xs shadow-blue-400 rounded-xl">
        <h1 className="text-black font-semibold text-3xl top-0">
          Parent & Teacher Hub
        </h1>
        <p className="mt-2 text-gray-600 text-medium ">
          Practical guides, printable routines , and progress insights so you
          can support <br />
          mindfulness at home and school.
        </p>
        <div className="flex flex-wrap mt-5 gap-5">
          <button className="bg-white border-2 border-gray-500 px-4 py-2 text-purple-500 rounded-full ">
            <FaDownload className="text-blue-500 inline-flex"/>Download Starter Kit(Pdf)
          </button>
          <button className="bg-white border-2 border-gray-500 px-4 py-2 text-purple-500 rounded-full ">
           <SlCalender className="text-yellow-950 inline-flex"/> 7-Day Calm Plan
          </button>
          <button className="bg-white border-2 border-gray-500 px-4 py-2 text-purple-500 rounded-full ">
            <FaSchool className="text-yellow-600 inline-flex"/>Classroom Pack
          </button>
        </div>
      </div>
      <FamilySay />
    </>
  );
}

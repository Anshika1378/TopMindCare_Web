import { AiOutlineCopyrightCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <div className="px-2 container mx-auto bg-blue-50 rounded  mt-10 border-2 border-blue-200 shadow-2xl shadow-blue-300">
        <h1 className="text-black text-4xl ">
          Start Your Child's Mindfulness Journey
        </h1>
        <p className="mt-5 text-gray-500">
          Try it free. Build calm, focus and kidness-one small practice a day.
        </p>
        <div className="flex flex-wrap mt-5 gap-5 ">
          <button className="bg-purple-500 text-white font-bold px-4 py-3 rounded-2xl hover:bg-purple-600 ">
            Create Account
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-2xl font-bold">
            Download App
          </button>
        </div>
      </div>
      {/* last footer */}
      <div className="container mx-auto px-4 py-12 mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <img
              className="w-8 h-8 rounded"
              src="https://i.pinimg.com/736x/a6/ff/f9/a6fff963d32fac5eb0385be92089a654.jpg"
              alt="Logo"
            />
            <h1 className="ml-3 text-purple-600 font-semibold text-2xl">
              Topmind Care
            </h1>
          </div>
          <p className="text-gray-500 flex items-center justify-center md:justify-start mt-2">
            Mindfulness for growing minds,{" "}
            <AiOutlineCopyrightCircle className="mx-1" /> Mindery kids.
          </p>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <h1 className="font-semibold text-lg">Contact</h1>
          <div className="flex gap-4 mt-2 justify-center">
            <button className="text-purple-400 hover:underline">
              Instagram
            </button>
            <button className="text-purple-400 hover:underline">Youtube</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h1 className="font-semibold text-lg">Legal</h1>
          <div className="flex gap-4 mt-2 justify-center md:justify-end">
            <button className="text-gray-500 hover:underline">Privacy</button>
            <button className="text-gray-500 hover:underline">Terms</button>
          </div>
        </div>
      </div>
    </>
  );
}

import { AiFillStar } from "react-icons/ai";
import Footer from "./footer";

export default function FamilySay() {
  return (
    <>
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-black font-bold text-4xl ">What Family Say</h1>
      </div>
      <div className="flex flex-wrap items-center justify-between px-0 py-2">
        <div className="card border-2 border-gray-400 shadow-2xs shadow-gray-400 p-4 mx-auto">
          <div className="flex space-x-1 text-gray-500 text-xl">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <AiFillStar key={i} />
              ))} 
          </div>
          <p>"Beadtime is finally peaceful. My 6 year old <br />asks for the Star Boat story every night."</p>
              <span>--Priya , Mom of 6-year-old</span>
        </div>
        <div className="card border-2 border-gray-400 shadow-2xs shadow-gray-400 p-4 mx-auto">
          <div className="flex space-x-1 text-gray-500 text-xl">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <AiFillStar key={i} />
              ))} 
          </div>
          <p>"The 5-minute reset before homework has <br />been a game changer for focus."</p>
              <span>--Ravi , Dad of 10-year-old</span>
        </div>
        <div className="card border-2 border-gray-400 shadow-2xs shadow-gray-400 p-4 mx-auto">
          <div className="flex space-x-1 text-gray-500 text-xl">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <AiFillStar key={i} />
              ))} 
          </div>
          <p>"Our class uses the breathing games after <br /> lunch.Kids come back calm ready."</p>
            <span>--Anika, Grade 4-Teacher</span>
        </div>
      </div>
      {/* Frequently ask question */}
      <div className="container mx-auto mt-8 px-4 py-12">
        <h1 className="text-black font-bold text-4xl">Frequently Ask Questions</h1>
        <div className="box border-gray-400 border-2 px-4 rounded-2xl mt-5">
              <h1 className="text-black font-bold ">What ages is this for?</h1><hr className="text-gray-400" />
              <h2 className="text-black font-bold ">How long are the session?</h2><hr className="text-gray-400"/>
              <h1 className="text-black font-bold ">Is it safe, ad-free?</h1><br />
              <p className="text-gray-500">Yes . We designed for the children.No external ads, clear privacy options and parent controls.</p><hr className="text-gray-400"/>
              <h1 className="text-black font-bold ">Can school use it?</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

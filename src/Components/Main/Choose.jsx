import { AiFillCheckSquare } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import ChooseCard from "./Card";
export default function WhyChoose() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 ">
        <h1 className="text-black font-semibold text-4xl ">
          Why Choose Mindery Kids Over Others?
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mt-8 shadow-gray-600 shadow-2xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b border-gray-300 text-center text-purple-700">
                  Features
                </th>
                <th className="px-4 py-2 border-b border-gray-300 text-center text-purple-700">
                  Mindary kids
                </th>
                <th className="px-4 py-2 border-b border-gray-300 text-center text-purple-700">
                  Others App
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 text-center">
                <td className="px-4 py-2 border-b border-gray-300">
                  Child Friendly Guided Meditations
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <AiFillCheckSquare className="text-green-700 inline-flex" />
                  Story based fun & short
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <RxCross1 className="text-red-700 inline-flex" />
                  Generic adult content
                </td>
              </tr>
              <tr className="hover:bg-gray-50 text-center">
                <td className="px-4 py-2 border-b border-gray-200">
                  Safe & Ad-free Enviroment
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <AiFillCheckSquare className="text-green-700 inline-flex" />
                  100% secure for kids
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <RxCross1 className="text-red-700 inline-flex" />
                  Ads & distractions
                </td>
              </tr>
              <tr className="hover:bg-gray-50 text-center">
                <td className="px-4 py-2 border-b border-gray-200">
                  Age specific program
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <AiFillCheckSquare className="text-green-700 inline-flex" />
                  Tailored for 4-14
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <RxCross1 className="text-red-700 inline-flex" />
                  One-sze-fit-all
                </td>
              </tr>
              <tr className="hover:bg-gray-50 text-center">
                <td className="px-4 py-2 border-b border-gray-200">
                  Parent & Teacher Support
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <AiFillCheckSquare className="text-green-700 inline-flex" />
                  Guides,printable, progress insight
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <RxCross1 className="text-red-700 inline-flex" />
                  Limited for none
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ChooseCard />
    </>
  );
}

import Programs from "./Programs";

export default function WhyKid() {
  return (
    <>
      <div className="container py-8 mt-12  px-15">
        <h1 className="text-5xl text-black font-bold ">Why Binary Kids?</h1>
        <p className="mt-2.5">
          Children learn best through play and stories. Our session blend gentle{" "}
          <br />
          breathing, guided imaginary, and music to make Mindfulness enjoyable
          and <br /> effective.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-12 py-5 px-6 md:px-16 text-center ">
        <div className="col-span-1  ml-2 border-2 border-gray-100 box-border rounded ">
          <div className="inline-flex items-center px-4 py-1 rounded-2xl bg-green-300 text-green-900 text-sm font-medium">
            Story Meditations
          </div>
          {/* heading */}
          <h1 className="text-black text-xl md:text-xl font-bold leading-tight mt-2">
            Guided Adventure
          </h1>
          {/* para */}
          <p className="text-gray-700 mt-5">Short, age-wise journey  that helps kids  <br />calm their bodies and name their feelings.</p>
        </div>
        <div className="col-span-1  ml-2 border-2 border-gray-100 box-border rounded">
             <div className="inline-flex items-center px-4 py-1 rounded-2xl bg-green-300 text-green-900 text-sm font-medium">
            Anytime Calm
          </div>
          {/* heading */}
          <h1 className="text-black text-xl md:text-xl font-bold leading-tight mt-0">
           Tools for big Feelings
          </h1>
          {/* para */}
          <p className="text-gray-700 mt-5">Quick "reset" audio for anger worry<br />pre exam jitter, and badtimes battles.</p>
        </div>
        <div className="col-span-1  ml-2 border-2 border-gray-100 box-border rounded">
             <div className="inline-flex items-center px-4 py-1 rounded-2xl bg-green-300 text-green-900 text-sm font-medium">
            Parent Hub
          </div>
          {/* heading */}
          <h1 className="text-black text-xl md:text-xl font-bold leading-tight">
            Guides & Routines
          </h1>
          {/* para */}
          <p className="text-gray-700 mt-5">Weekly tips, printable charts and simple <br />routine you can use at home and school</p>
        </div>
      </div>
      <Programs />
    </>
  );
}

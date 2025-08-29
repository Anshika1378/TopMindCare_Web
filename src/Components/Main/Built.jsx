import WhyChoose from "./Choose";

export default function Built() {
  return (
    <>
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-black font-semibold text-4xl">
          Builts for Kids, Loved by parents
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="col-space-1 border-2 border-gray-300 rounded-full p-4 w-full max-w-sm mx-auto mt-2.5">
            <h1 className="text-black font-semibold text-medium">Ad-Free & Safe</h1>
            <p className="text-sm text-gray-600 mt-2">
              Child-first design with privacy and <br />
              no external ads.
            </p>
          </div>
          <div className="col-space-1 border-2 border-gray-300 rounded-full p-4 w-full max-w-sm mx-auto mt-2.5">
            <h1 className="text-black font-semibold text-medium">Revard that motivate</h1>
            <p className="text-sm text-gray-600 mt-2">
              Stars, badges, and gentle straks<br />
             encourage healthy habits- no pressure.
            </p>
          </div>
          <div className="col-space-1 border-2 border-gray-300 rounded-full p-4 w-full max-w-sm mx-auto mt-2.5">
            <h1 className="text-black font-semibold text-medium">Offline Access</h1>
            <p className="text-sm text-gray-600 mt-2">
              Download favorite session  for calm on the <br />
              go.
            </p>
          </div>
          <div className="col-space-1 border-2 border-gray-300 rounded-full p-4 w-full max-w-sm mx-auto mt-2.5">
            <h1 className="text-black font-semibold text-medium">Sleep Mode</h1>
            <p className="text-sm text-gray-600 mt-2">
              Fade-out music and dim visuals helps kids  <br />
              drift off peacefully.
            </p>
          </div>
          <div className="col-space-1 border-2 border-gray-300 rounded-full p-4 w-full max-w-sm mx-auto mt-2.5">
            <h1 className="text-black font-semibold text-medium">Classroom  Friendly</h1>
            <p className="text-sm text-gray-600 mt-2">
               Teacher packs with 5-minute  star of class<br />
              reset  and poster.
            </p>
          </div>
          <div className="col-space-1 border-2 border-gray-300 rounded-full p-4 w-full max-w-sm mx-auto mt-2.5">
            <h1 className="text-black font-semibold text-medium">Multi-Child Profile</h1>
            <p className="text-sm text-gray-600 mt-2">
              Personalized tracks for each child in the <br />
              family.
            </p>
          </div>
        </div>
      </div>
    <WhyChoose />
    </>
  );
}

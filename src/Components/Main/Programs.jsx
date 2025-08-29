import { GiStarsStack, GiBearFace } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { BiStopwatch } from "react-icons/bi";
import { RiMedalFill } from "react-icons/ri";
import { BsMusicNoteBeamed } from "react-icons/bs";
import girl from "../../assets/media/curlgirl.png";
import babygirl from "../../assets/media/baby.png";
import children from "../../assets/media/childrens.png";
import Built from "./Built";

export default function Programs() {
  const programs = [
    {
      title: "Little Explorers (4-6)",
      description:
        "Three to five minutes stories with animal friends that teach belly breathing, noticing sounds and gentle stretching.",
      image: girl,
      features: [
        { icon: <GiBearFace className="text-yellow-900 mt-1" />, label: "Cozy Corner" },
        { icon: <BsMusicNoteBeamed className="text-black" />, label: "Calm Music" },
        { icon: <RiMedalFill className="text-yellow-300" />, label: "Sticker Badges" },
      ],
    },
    {
      title: "Brave Thinkers (7-8)",
      description:
        "Mindset stories, focus timers and kindness practices that build confidence and classroom readiness.",
      image: babygirl,
      features: [
        { icon: <BiStopwatch className="text-gray-500" />, label: "Focus Timer" },
        { icon: <CgNotes className="text-gray-700" />, label: "Gratitude Notes" },
        { icon: <GiStarsStack className="text-yellow-300" />, label: "Streak Awards" },
      ],
    },
    {
      title: "Calm & Curious (11-14)",
      description:
        "Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.",
      image: children,
      features: [
        { icon: <GiBearFace className="text-yellow-900 mt-1" />, label: "Mindset Minis" },
        { icon: <BsMusicNoteBeamed className="text-black" />, label: "Sleep Stories" },
        { icon: <RiMedalFill className="text-yellow-300" />, label: "Goal Cards" },
      ],
    },
  ];

  return (
    <>
      <div className="container mx-auto py-12 px-4">
      <h1 className="text-black font-bold text-4xl mb-2">Programs for Every Age</h1>
      <p className="mb-10 text-gray-600">
        Pick a track or mix and match. Each program grows with your child.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {programs.map((program, index) => (
          <>
            {index % 2 === 0 ? (
              <>
                <img
                  src={program.image}
                  alt={program.title}
                  className="rounded-lg shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-black">{program.title}</h2>
                  <p className="text-gray-500 mt-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {program.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 bg-gray-200 text-gray-800 rounded-full text-sm px-4 py-2"
                      >
                        {feature.icon} {feature.label}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-2xl font-semibold text-black">{program.title}</h2>
                  <p className="text-gray-500 mt-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {program.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 bg-gray-200 text-gray-800 rounded-full text-sm px-4 py-2"
                      >
                        {feature.icon} {feature.label}
                      </span>
                    ))}
                  </div>
                </div>
                <img
                  src={program.image}
                  alt={program.title}
                  className="rounded-lg shadow-lg"
                />
              </>
            )}
          </>
        ))}
      </div>
    </div>
    <Built />
    </>
  );
}

"use client";
import { CardHeader, CardDescription } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import ProjectCard from "./projectcard";

const ProjectData = [
  {
    name: "Quick Start Express",
    projectUrl: "https://github.com/CSE-25/quick_start_express",
    blurb:
      "A simple CLI tool to generate Express servers from multiple available templates. ",
    techstack: ["NodeJS", "javascript", "typescript"],
    maintainer: ["Ashrockzzz2003", "Abhinav-ark"],
  },
  {
    name: "Amrita PYQ",
    projectUrl: "https://github.com/CSE-25/amrita_pyq",
    blurb:
      "A CLI tool for viewing and downloading Amrita Previous Year Questions.",
    techstack: ["Go", "Cobra"],
    maintainer: ["Ashrockzzz2003", "Abhinav-ark"],
  },
  {
    name: "Amrita Map",
    projectUrl: "https://github.com/Abhinav-ark/Amrita_map",
    blurb:
      "A offline navigator/explorer web application with Directions and place description.",
    techstack: ["HTML", "CSS", "JavaScript"],
    maintainer: ["Abhinav-ark"],
  },
  {
    name: "Match da pairs",
    projectUrl: "https://github.com/FirefoxSRV/Match-da-pairs",
    blurb:
      "Made with flutter and firebase for realtime database for leaderboard integration. This game can enhance your memory skills as you match the correct pairs. Don't fret - there are no penalties for incorrect matches. Let's all exercise our brains together.",
    techstack: ["Flutter", "Dart", "Firebase", "C++", "Ruby", "Swift"],
    maintainer: ["FirefoxSRV"],
  },
  {
    name: "Google Maps SDK for Android",
    projectUrl: "https://github.com/Ashrockzzz2003/google_maps_kotlin_android/",
    blurb:
      "Exploring Google Maps SDK, trying out new ideas with Gemini integrated to Google Maps.",
    techstack: ["Kotlin", "JetpackCompose", "Android", "GoogleMapsAPI"],
    maintainer: ["Ashrockzzz2003"],
  },
  {
    name: "Amrita Placement Tracker - Web",
    projectUrl: "https://github.com/Ashrockzzz2003/placement_tracker_web/",
    blurb:
      "Web app for tracking the placement activities of the students of Amrita School of Computing, Coimbatore.",
    techstack: ["nextjs", "Tailwind", "javascript"],
    maintainer: ["Ashrockzzz2003"],
  },
  {
    name: "Server for Amrita Placement Tracker",
    projectUrl: "https://github.com/Ashrockzzz2003/placement_tracker_server/",
    blurb:
      "Web app for tracking the placement activities of the students of Amrita School of Computing, Coimbatore.",
    techstack: ["MySQL", "Expressjs", "javascript"],
    maintainer: ["Ashrockzzz2003"],
  },
  {
    name: "Data Structures And Algorithms",
    projectUrl:
      "https://github.com/Ashrockzzz2003/Data_Structures_and_Algorithms/",
    blurb:
      "Implementations of Data Structures and Algorithms. Inspired from the Design and Analysis of Algorithms course from 3rd year, B Tech, CSE, Amrita Vishwa Vidyapeetham, Coimbatore taught by Dr. Vidya Balasubramanian ma'am.",
    techstack: [
      "C++",
      "Python",
      "Java",
      "Go",
      "JavaScript",
      "Kotlin",
      "Rust",
      "Haskell",
    ],
    maintainer: ["Ashrockzzz2003"],
  },
  {
    name: "Bluedis",
    projectUrl: "https://github.com/IAmRiteshKoushik/bluedis",
    blurb:
      "Bluedis attempts to study the architecture of Redis and implement some of its features by adhering to the Redis Serialisation Protocol, thereby building a database with low-latency reads and writes.",
    techstack: ["Go", "Redis"],
    maintainer: ["IAmRiteshKoushik"],
  },
  {
    name: "Timetable B.Tech CSE A Progressive Web App",
    projectUrl: "https://github.com/Abhinav-ark/timetable_csea",
    blurb:
      "A no database solution for maintaining class timetable, tasks and examination schedules.",
    techstack: ["HTML", "CSS", "JavaScript"],
    maintainer: ["Abhinav-ark"],
  },
  {
    name: "BurntBrotta",
    projectUrl: "https://github.com/amri-tah/burntbrotta.github.io",
    blurb:
      "Discover the joy of cooking with our collection of recipes, food stories, and culinary tips. Whether you're an experienced chef or just starting out, this website is your gateway to flavorful adventures in the kitchen.",
    techstack: ["HTML", "CSS", "Javascript"],
    maintainer: ["amri-tah"],
  },
  {
    name: "LeetPath",
    projectUrl: "https://github.com/amri-tah/LeetPath",
    blurb:
      "LeetPath is a personalized question recommendation system designed for LeetCode users. Using graph-based structures, topic modeling, and Markov Random Field, the system analyzes user interaction, question similarity, and topic relevance to suggest the most appropriate questions for continued skill improvement.",
    techstack: ["NextJS", "Tailwind", "Firebase", "Flask", "Go", "MongoDB"],
    maintainer: ["amri-tah"],
  },
  {
    name: "BurntBrotta Flutter",
    projectUrl: "https://github.com/amri-tah/BurntBrotta-Flutter",
    blurb:
      "Cook smarter, not harder with BurntBrotta App. This mobile version of the original website allows you to access a world of culinary inspiration, tips, and recipes wherever you are.",
    techstack: ["Flutter", "Dart"],
    maintainer: ["amri-tah"],
  },
  {
    name: "AmritaGPT",
    projectUrl: "https://github.com/SaranDharshanSP/AmritaGPT",
    blurb:
      "AmritaGPT is a chatbot designed to answer all Amrita Viswa Vidyapeetham related questions, covering topics such as clubs, placements, entrance exams, and more. The system facilitates text-to-text conversation as well as speech-to-text and text-to-speech functionalities.",
    techstack: [
      "React",
      "Tailwind",
      "FastAPI",
      "LangChain",
      "HuggingFace",
      "GoogleTTS",
    ],
    maintainer: ["SaranDharshanSP"],
  },
  {
    name: "NeuroScribe",
    projectUrl: "https://github.com/SaranDharshanSP/NeuroScribe",
    blurb:
      "This project develops a BCI-driven handwriting assistance system leveraging EEG signals, deep learning, and IoT to aid individuals with limited motor function. It features real-time robotic writing and vocal feedback for enhanced interaction and accessibility.",
    techstack: ["Python", "Scikit", "TensorFlow", "OpenBCI", "GCode"],
    maintainer: ["SaranDharshanSP"],
  },
  {
    name: "TN Tourism",
    projectUrl: "https://github.com/SaranDharshanSP/TN-Tourism.github.io",
    blurb:
      "An underrated tourism website showcasing the best places to visit, must-try foods, and unique experiences in Tamil Nadu. Explore the hidden gems and cultural richness of this vibrant state.",
    techstack: ["HTML", "CSS", "JavaScript"],
    maintainer: ["SaranDharshanSP"],
  },
  {
    name: "Amrita Sports Management System",
    projectUrl:
      "https://github.com/SaranDharshanSP/Amrita-Sports-Management-System",
    blurb:
      "This project is a House Points Management System for Amrita University. It provides a platform for both administrators and students to manage and view the points table of all the houses in the university. Administrators have the privilege to add, delete, and modify house points, while students can only view the points table.",
    techstack: ["Java"],
    maintainer: ["SaranDharshanSP"],
  },
];

const projects = () => {
  return (
    <div>
      <CardHeader className="font-bold text-6xl pt-4 pb-2 px-4 text-[#3abef9]">
        Projects
      </CardHeader>
      <CardDescription className="px-4 pb-2 text-[#c8c7cc]">
        Projects with bounties to work on.
      </CardDescription>
      <ScrollArea className="max-h-[80vh] overflow-auto relative">
        <div className="grid grid-cols-1 gap-4 p-4">
          {ProjectData.length === 0 ? (
            <div className="flex justify-center items-center h-full text-[#c8c7cc] text-2xl">
              No projects available at the moment.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 p-4">
              {ProjectData.map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  projectUrl={project.projectUrl}
                  blurb={project.blurb}
                  techstack={project.techstack}
                  maintainer={project.maintainer}
                />
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default projects;

// src/components/Projects.js
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section style={{ backgroundColor: "honeydew" }} id="projects"
      className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
      <h2 className="text-5xl text-emerald-500 font-bold text-center">
        My Projects
      </h2>

      <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center
      gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
      <div className="w-80 rounded">
        <a  href="http://127.0.0.1:5500/Portfolio2/portfolio/src/Components/weather.html" className="w-full h-full">
        <img src="data:image/jpeg;base64,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"
        alt="Project 1"
        className="w-full h-full bg-cover rounded" />
        </a>
      </div>
      <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
        <h2 className="font-bold text-3xl text-center">
         <a className="hover:underline" href='http://127.0.0.1:5500/Portfolio2/portfolio/src/Components/weather.html'>Weather App</a>
        </h2>
        <p>
         I Created a dynamic Weather App utilizing APIs to provide real-time weather updates. The app features an intuitive user interface, displays current weather conditions, forecasts, and supports multiple locations. Implemented using HTML, CSS, JavaScript, and a weather API for accurate data retrieval. Enhanced with responsive design for mobile compatibility.
        </p>
      </div>
    </div>



      <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
    lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
    <div className="w-80 rounded">
      <a href='http://127.0.0.1:5500/Portfolio2/portfolio/src/Components/temperature.html' className="w-full h-full">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlHocaDR-3ou3EPli4XU84zWTiolwExOJAQ&s"
      alt="Project 2"
      className="w-full h-full bg-cover rounded" />
      </a>
    </div>
    <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
      <h2 className="font-bold text-3xl text-center">
      
        <a className="hover:underline" href='http://127.0.0.1:5500/Portfolio2/portfolio/src/Components/temperature.html'>Temperature Converter</a>
      </h2>
      <p>
      I developed a Temperature Converter app to seamlessly switch between Celsius, Fahrenheit, and Kelvin. The app features a user-friendly interface and real-time conversion capabilities. Built using HTML, CSS, and JavaScript, it ensures accurate and instant temperature conversions, enhancing user experience with responsive design for accessibility across various devices.
      </p>
    </div>
  </div>
      <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center
        gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
        <div className="w-80 rounded">
          <Link to="/dsa-tracker" className="w-full h-full">
            <img src="https://www.notion.so/en-us/front-api/og-image/templates/dsa-progress-tracker"
              alt="Project 1"
              className="w-full h-full bg-cover rounded" />
          </Link>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <Link className="hover:underline" to="/dsa-tracker">
              DSA Progress Tracker
            </Link>
          </h2>
          <p>
           I Developed a DSA (Data Structures and Algorithms) Progress Tracker using React to monitor learning and practice. The app enables users to log completed topics, set goals, and visualize progress with interactive charts. It features a clean interface, responsive design, and efficient state management for seamless user experience across devices.
          </p>
        </div>
      </div>


      <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
        lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
        <div className="w-80 rounded">
          <Link to="/puzzle-game" className="w-full h-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/15-puzzle_magical.svg/800px-15-puzzle_magical.svg.png"
              alt="Project 2"
              className="w-full h-full bg-cover rounded" />
          </Link>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <Link className="hover:underline" to="/puzzle-game">
              15 Puzzle Game
            </Link>
          </h2>
          <p>
          Developed a 15 Puzzle Game using React for an engaging and interactive user experience. The game challenges players to arrange numbered tiles in order and features smooth animations and efficient state management. With a clean, responsive design, it ensures compatibility and playability across various devices.
          </p>
        </div>
      </div>
  

     

    
      
    </section>
  );
}

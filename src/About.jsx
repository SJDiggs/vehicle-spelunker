
import { useState, useEffect } from "react"
import "./About.css"

function About() {
    // 1. create state to hold about data
    const [about, setAbout] = useState(null);
  
    // 2. create function to make api call
    const getAboutData = async () => {
  
      // 3a. make api call and get response
      const response = await fetch("./about.json")

      // 3b. turn response into javascript object
      const data = await response.json();

    // 3c. set the about state to the data
      setAbout(data);
};

// 3. make an initial call for the data inside a useEffect, so it only happens once on component load
useEffect(() => { getAboutData() } , []);

// define a function that will return the JSX needed once we get the data
const loaded = () => (
  
    <div className="about-section bg-gray-500 py-10 mt-4 rounded-md">
        <div className="container mx-auto flex flex-col items-center">
            <div className="about-content text-center mb-8">
                <p className="text-lg text-gray-900">{about.aboutContent}</p>
            </div>

        <div className="about-results bg-gray-400 p-6 rounded-md shadow-md mb-8">
            <p className="text-md text-gray-900">{about.aboutResults}</p>
        </div>

        <div className="about-email">
          <a
            href={`mailto:${about.email}`}
            target="_blank"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Email the dev team!
          </a>
        </div>
      </div>
    </div>
);

    // if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
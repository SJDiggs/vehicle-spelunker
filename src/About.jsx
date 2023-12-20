
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
  
  <div className="about-section">
   
    <div className="about-content">
    <p>{about.aboutContent}</p>
    </div>

    <div className="about-results">
    <p>{about.aboutResults}</p>
    </div>

    <div className="about-email">
      {/* <a href="mailto:stevediggs70@gmail.com" target="_blank"> Click Here To Email Me!</a> */}
      <a href={about.email} target="_blank"> Email the dev team!</a>
    </div>
  </div>
);

// if data arrives return the result of loaded, if not, an h1 that says loading
return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
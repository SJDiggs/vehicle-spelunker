import { useState, useRef } from "react";
import {slides} from "./data/carouselData.json"


const VehicleSearchForm = () => {
    const [formData, setFormData] = useState({
      make: '',
      model: '',
      year: '',
    });

    const [error,setError] = useState('')
    // useRef hook to set the cursor on the year field on the form in the event the user needs to re-enter a corrected year
    const yearRef = useRef(null)
  
    async function handleSubmit(e) {
        //Do not refesh the page by using preventDefault()
        e.preventDefault()
        //  ********* TESTING BELOW *********
        // const url =  'https://api.api-ninjas.com/v1/cars?limit=2' //use VITE_BASE_API in .env file for deploy
        // const apiKey = 'OSF00JWpkvOhNNQqNH5TsQ==MULLJ6Up8L2M25bx' // use API_KEY in .env file for deploy
        //  *********************************
        const url = import.meta.env.VITE_BASE_URL
        const apiKey = import.meta.env.VITE_API_KEY
        
        //Due to API limitations we can only view vehicle years between 2015 and 2020, so we will set the year to '2015' if the user enters < 2015 or '2020' if they enter a value > 2020.  We will also check to see if that the user passed a number.

        const yearValue = parseInt(formData.year, 10)
        console.log('Parsed Year Value = ', yearValue)

        if (isNaN(yearValue) || yearValue < 2015 || yearValue > 2020) {
            setError('Please enter a year between 2015 and 2020.');
            yearRef.current.focus(); // Set focus on the year input
            return;
          }
        try {
            const response = await fetch(`${url}&make=${formData.make}&model=${formData.model}&year=${yearValue}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey
                },
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error. Status: ${response.status}`);
            }

            const apiData = await response.json();
            // console.log('API Response:', apiData);

            // Check if there are no results (!apiData is falsy or the length of the data returned is zero)
            if (!apiData || apiData.length === 0) {
                setError('Sorry, we could not find that vehicle...');
            } else {
                setError(''); // Clear the error if there are results
            }
      
        } catch(err){
            console.log(err)
        }
    }
    
    function handleChange(e) {
        // handle will update local state
        // console.log('event is firing', e.target.name, e.target.value)
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
        setError(''); // Clear any previous error when the user starts typing again
    }

    //  name attribute in form -> ties  to the properties in state (will connect to the Schema)
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Vehicle Make:
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Vehicle Model:
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Vehicle Year:
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            ref={yearRef}
          />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
    
    export default VehicleSearchForm;
    
    
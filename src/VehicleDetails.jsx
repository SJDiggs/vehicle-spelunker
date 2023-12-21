import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './VehicleDetails.css'

const VehicleDetails = ({ apiData }) => {
    console.log('API data passed to details:', apiData);
    const navigate = useNavigate()
    const [listingsData, setListingsData] = useState (null)

    const handleFindMeClick = async (make, model, year) => {

        // The listings api will provide accurate results only if the first letter in make and model is capitalized
        const capMake = make.charAt(0).toUpperCase() + make.slice(1);
        const capModel = model.charAt(0).toUpperCase() + model.slice(1);

        const url = import.meta.env.VITE_LISTINGS_URL
        const apiKey = import.meta.env.VITE_LISTINGS_API_KEY
        console.log('Listings URL: ', url)

        try {
            const response = await fetch(`${url}apiKey=${apiKey}&make=${capMake}&model=${capModel}&year_min=${year}&year_max=${year}`)
            console.log('response fetch link', response)
      
            if (!response.ok) {
              throw new Error(`HTTP error. Status: ${response.status}`);
            } 
            const vehicleListingsData = await response.json();
            console.log('Listings API Response:', vehicleListingsData);
            //Grab only the records array from the API as it contains the vehicle info
            const vehicleRecordsArray = vehicleListingsData.records
            console.log('Listing Records Array:', vehicleRecordsArray);

            if (!vehicleListingsData|| vehicleListingsData.length === 0) {
                // setError('Sorry, we could not find any vehicles for sale.');
                alert('No vehicles found for sale')
            } else {
                // setListingsData(vehicleListingsData) 
                setListingsData(vehicleRecordsArray)
                // setError(''); // Clear the error if there are results
                navigate('/listings', { state: { vehicleRecordsArray} }) //navigate to the listings page to see the API results
            }
        }catch (err) {
            console.log(err)
        }
    }

    const handleSearchAgainClick = () => {
        // alert("Search Again Clicked")
        navigate('/')
    }

    const TableRow = ({ label, value }) => (
        <tr>
            <td className="border border-gray-300 p-2 font-semibold text-left text-sm text-slate-950">{label}</td>
             <td className="border border-gray-300 p-2 font-semibold text-sm text-slate-950 uppercase">{value}</td>
        </tr>
    )

    return (
    <div className="flex flex-wrap justify-center gap-7">
        {apiData ? (
        <>
          {apiData.map((vehicle, index) => (
            <div 
                key={index} 
                className="mb-8 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <h3 className="text-2xl font-bold mb-4 uppercase">
                    {vehicle.model} details
                </h3>

              <div className="max-w-md mx-auto mt-8 p-6 bg-zinc-600 rounded-md shadow-md">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    <TableRow label="Make" value={vehicle.make} />
                    <TableRow label="Model" value={vehicle.model} />
                    <TableRow label="Year" value={vehicle.year} />
                    <TableRow label="Vehicle Segment" value={vehicle.class} />
                    <TableRow label="Fuel Type" value={vehicle.fuel_type} />
                    <TableRow label="City MPG" value={vehicle.city_mpg} />
                    <TableRow label="Highway MPG" value={vehicle.highway_mpg} />
                    <TableRow label="Combined MPG" value={vehicle.combination_mpg} />
                    <TableRow label="Transmission" value={vehicle.transmission} />
                    <TableRow label="Drivetrain" value={vehicle.drive} />
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-red-500">No data available</p>
      )}

      <div className="action-buttons">
        
        <button
          onClick={handleSearchAgainClick}
        >
            <img
            src={'/searchAgain_button.png'}
            alt="Search Again"
            className="h-28 w-32 mr-2"
            />
        </button>
        <button
          onClick={() => handleFindMeClick(apiData[0].make, apiData[0].model, apiData[0].year)}
        >
        <img
            src={'/findMe_button.png'}
            alt="Search Again"
            className="h-28 w-32 mr-2"
            />
        </button>
      </div>
    </div>
  )
};

  export default VehicleDetails;
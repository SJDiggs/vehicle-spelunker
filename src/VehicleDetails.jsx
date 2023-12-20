import { useNavigate } from 'react-router-dom'
import './VehicleDetails.css'

const VehicleDetails = ({ apiData }) => {
    console.log('API data passed to details:', apiData);
    const navigate = useNavigate()

    const handleFindMeClick = () => {
        alert("Find Me Clicked")
    }
    const handleSearchAgainClick = () => {
        // alert("Search Again Clicked")
        navigate('/')
    }

// The TableRow component controls the visual aesthetics of the generated results table(label and api returned value)
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

      {/* Buttons need to be centered below the tables - css? */}

      {/* <div className="flex justify-center mt-80"> */}
      <div className="action-buttons">
        
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-2 rounded"
          onClick={handleSearchAgainClick}
        >
          Search Again
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-6 rounded"
          onClick={handleFindMeClick}
        >
          Find Me
        </button>
      </div>
    </div>
    // </div>
  )
};

  export default VehicleDetails;
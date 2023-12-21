import { useLocation } from 'react-router-dom'

const VehicleListings = () => {
    
    const { state: { vehicleRecordsArray = [] } = {} } = useLocation()
  
    console.log ('Data Passed to VehicleListings.jsx: ', vehicleRecordsArray)

    const displayedListings = Array.isArray(vehicleRecordsArray) ? vehicleRecordsArray[0] : [];
    // If the records array is empty then we don't have any cars to show - give the user a message
    if (displayedListings.length === 0) {
        return <p>Sorry, We could not find any vehicles for sale at this time...</p>;
    }

    const TableRow = ({ label, value }) => (
        <tr>
            <td className="border border-gray-300 p-2 font-semibold text-left text-sm text-slate-950">{label}</td>
            <td className="border border-gray-300 p-2 font-semibold text-sm text-slate-950 uppercase">{value}</td>
        </tr>
        )

    // const handleClick = (listing) => {
    //     console.log('Extrenal Link: ', listing.clickoffUrl)
    //     window.location.replace(listing.clickoffUrl)
    // }

        return (
            <div>
              <h1 className="text-2xl font-bold mb-4">We found these vehicles for sale...</h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {vehicleRecordsArray.map((listing, index) => (
                  <div key={index} className="max-w-md mx-auto mt-8 p-6 bg-zinc-600 rounded-md shadow-md">
                    <table className="min-w-full border border-gray-300">
                      <tbody>
                        <TableRow label="Photo" value={<img src={listing.primaryPhotoUrl} alt="Vehicle Pic" />} />
                        <TableRow label="Make" value={listing.make} />
                        <TableRow label="Model" value={listing.model} />
                        <TableRow label="Trim Level" value={listing.trim} />
                        <TableRow label="Year" value={listing.year} />
                        <TableRow label="Color" value={listing.displayColor} />
                        <TableRow label="Mileage" value={listing.mileage} />
                        <TableRow label="Price" value={listing.price} />
                        <TableRow label="City" value={listing.city} />
                        <TableRow label="State" value={listing.state} />
                      </tbody>
                    </table>
                    <div className="select-button mt-4">
                        <a
                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                            href={listing.clickoffUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <img src="/car-keys.png" alt="Yes, Please!" className="h-6 w-8 mr-2" />
                        Take A Closer Look!
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        };
        
        export default VehicleListings;
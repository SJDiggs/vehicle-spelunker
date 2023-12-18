import React from "react";

const VehicleDetails = ({ apiData }) => {
    console.log('API data passed to details:', apiData);
  
    return (
        <div>
          <h2>Vehicle Details</h2>
          {apiData ? (
            <div>
              {apiData.map((vehicle, index) => (
                <div key={index}>
                  <h3>Vehicle {index + 1}</h3>
                
                <table border="1">
                  <tbody>
                    <tr>
                      <td><strong>Make:</strong></td>
                      <td>{vehicle.make}</td>
                    </tr>
                    <tr>
                      <td><strong>Model:</strong></td>
                      <td>{vehicle.model}</td>
                    </tr>
                    <tr>
                      <td><strong>Year:</strong></td>
                      <td>{vehicle.year}</td>
                    </tr>
                    <tr>
                      <td><strong>Vehicle Segment:</strong></td>
                      <td>{vehicle.class}</td>
                    </tr>
                    <tr>
                      <td><strong>City MPG:</strong></td>
                      <td>{vehicle.city_mpg}</td>
                    </tr>
                    <tr>
                      <td><strong>Highway MPG:</strong></td>
                      <td>{vehicle.highway_mpg}</td>
                    </tr>
                    <tr>
                      <td><strong>Combined MPG:</strong></td>
                      <td>{vehicle.combination_mpg}</td>
                    </tr>
                    <tr>
                      <td><strong>Transmission:</strong></td>
                      <td>{vehicle.transmission}</td>
                    </tr>
                    <tr>
                      <td><strong>Drivetrain:</strong></td>
                      <td>{vehicle.drive}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  };
  
  export default VehicleDetails;
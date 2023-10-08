import React, { useEffect, useState } from 'react'


const Task2 = () => {
    const [alldata, setalldata] = useState([]);
    


    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setalldata(data)

            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            {alldata.map((user) => {
                return <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {user.id % 2 === 0 ? (
                        <>
                            <p>Even ID</p>
                        </>
                    ) : (
                        <>
                            <p>I'm Odd</p>
                        </>
                    )}

                    {/* <Set2
           adres={user.address} /> */}
                    <Set3 email={user.email} name={user.name} />
                    <Set4 city={user.address.city} zipcode={user.address.zipcode} geo={user.address.geo} />

                </div>
            })}

        </div>
    )
}

// function Set2({ adres }) {
//     return (
//       <div>
//         <h3>Address Details</h3>
//         <ul>
//           {Object.keys(adres).map((key, index) => (
//             <li key={index}>
//               {key}: {adres[key]}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
function Set3({ email, name }) {
    if (email.endsWith('.biz')) {
        return (
            <div>
                <h3>Email ending with .biz</h3>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
    return null;
}



function Set4({ city, zipcode, geo }) {
    const targetCities = ["Aliyaview", "Howemouth", "Gwenborough"];
    if (targetCities.includes(city)) {
        return (
            <div>
                <h3>City Details</h3>
                <p>
                    The Zipcode and Geo of cityname {city} is: {zipcode}  and ({geo.lat}, {geo.lng})
                </p>
            </div>
        );
    }
    return null;
}


export default Task2
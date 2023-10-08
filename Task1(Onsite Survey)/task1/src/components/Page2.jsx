import React from 'react'

const Page2 = () => {

    let data = JSON.parse(localStorage.getItem("userdetails"))
    // console.log(data)

    return (
        <>
            <h2>Thanks a ton for taking out your precious time and for completing the survey</h2>
            <h3>Email Address : {data.email}</h3>
            <h3>Contact Number : {data.countryCode}-{data.mobile}</h3>
        </>
    )
}

export default Page2
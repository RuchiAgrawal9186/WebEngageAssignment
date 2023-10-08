import React from 'react'
import { Route, Routes } from 'react-router'
import Task2 from './Task2'
import Page1 from './Page1'
import Page2 from './Page2'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Page1></Page1>} />
                <Route path="/page2" element={<Page2></Page2>} />
                <Route path="/task2" element={<Task2></Task2>} />
            </Routes>
        </div>
    )
}

export default AllRoutes
import React from 'react'
import { Course, Navbar, Rating, Statistic, Story } from '../../components'

function index() {
    return (
        <>
            <div className="dashboard">
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <Story />
                            <Statistic />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Rating />
                        </div>
                    </div>
                    <Course />
                </div>
            </div>
        </>
    )
}

export default index

import React from 'react'
import CoursePict from '../../assets/img/course.png'
import CourseHero from '../../assets/img/course-hero.png'
import '../../assets/css/course.css'

function Course() {
    return (
        <div className="course">
            <h1>Course Preview</h1>
            <div className="d-flex course-overflow">
                {/* looping */}
                {Array.from(Array(7)).map((data, index) => {
                    return (
                        <div className="card-course">
                            <div className="d-flex justify-content-between">
                                <img className="image-course" src={CoursePict} alt="course" />
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <h2>TOEFL</h2>
                                        <i className="material-icons" style={{ color: "#008FFF" }}>
                                            arrow_forward_ios
                                        </i>
                                    </div>
                                    <div className="d-flex">
                                        {Array.from(Array(5)).map((data, index) => {
                                            return (
                                                <span className="material-icons" key={index}>
                                                    star
                                                </span>
                                            )
                                        })}
                                        <p>(20)</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src={CourseHero} alt="course hero" />
                                        <p>By Course Hero</p>
                                    </div>
                                    <div className="d-flex">
                                        <i className="material-icons">
                                            person
                                        </i>
                                        <h5>203 Pelajar, 4 Guru</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mt-3 justify-content-between">
                                <div className="date-course">Mulai: <span style={{ fontSize: "10px", fontWeight: "bold", color: "#DB0038" }}> 17 Agustus 2020</span></div>
                                <div>
                                    <p style={{ textDecoration: "line-through" }}>Rp 2.000.000</p>
                                    <h4>Rp 1.500.000</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div>
                    <div className="card-course d-flex align-items-center justify-content-center" style={{ color: "#008FFF", height: "178px" }}>
                        <h3 >See More(999+)</h3>
                        <span className="material-icons " style={{ color: "#008FFF", marginTop: "-10px", marginLeft: "20px" }} >
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course
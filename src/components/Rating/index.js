import React from 'react'
import Trophy from '../../assets/img/trophy.png'
import First from '../../assets/img/pict-first-place.png'
import Second from '../../assets/img/pict-second-place.png'
import Third from '../../assets/img/third.png'
import Four from '../../assets/img/four.png'
import '../../assets/css/rating.css'

function Rating() {
    return (
        <div className="rating">
            <h1>Peringkat</h1>
            <p>Hasil akhir perolehan nilai try out</p>
            <img className="trophy" src={Trophy} alt="trophy" />
            <div className="d-flex">
                <span className="material-icons">file_download</span>
                <h4>Unduh .CSV</h4>
            </div>
            <div className="list-rating mt-4">
                <div className="first-place mb-2 d-flex justify-content-between">
                    <div className="circle-rating">1</div>
                    <img src={First} width="24" height="24" alt="first-place" />
                    <h5 className="d-inline-block text-truncate" style={{ maxWidth: 90 }}>Alfredo Vetro</h5>
                    <div className="circle-true">40</div>
                    <div className="circle-false">0</div>
                    <div className="circle-no-answer">0</div>
                    <h5>100</h5>
                </div>
                <div className="second-place mb-2 d-flex justify-content-between">
                    <div className="circle-rating">2</div>
                    <img src={Second} width="24" height="24" alt="first-place" />
                    <h5 className="d-inline-block text-truncate" style={{ maxWidth: 90 }}>Tatiana Franci</h5>
                    <div className="circle-true">39</div>
                    <div className="circle-false">1</div>
                    <div className="circle-no-answer">0</div>
                    <h5>98</h5>
                </div>
                <div className="third-place mb-2 d-flex justify-content-between">
                    <div className="circle-rating">3</div>
                    <img src={Third} width="24" height="24" alt="first-place" />
                    <h5 className="d-inline-block text-truncate" style={{ maxWidth: 90 }}>Haylie Press</h5>
                    <div className="circle-true">35</div>
                    <div className="circle-false">3</div>
                    <div className="circle-no-answer">2</div>
                    <h5>90</h5>
                </div>
                <div className="other-place mb-2 d-flex justify-content-between">
                    <div className="circle-rating">4</div>
                    <img src={Four} width="24" height="24" alt="first-place" />
                    <h5 className="d-inline-block text-truncate" style={{ maxWidth: 90 }}>Jordyn Siphare</h5>
                    <div className="circle-true">30</div>
                    <div className="circle-false">5</div>
                    <div className="circle-no-answer">5</div>
                    <h5>80</h5>
                </div>
                <div className="other-place mb-2 d-flex justify-content-between">
                    <div className="circle-rating">5</div>
                    <img src={Four} width="24" height="24" alt="first-place" />
                    <h5 className="d-inline-block text-truncate" style={{ maxWidth: 90 }}>Ruben Varanes</h5>
                    <div className="circle-true">29</div>
                    <div className="circle-false">11</div>
                    <div className="circle-no-answer">0</div>
                    <h5>78</h5>
                </div>
                <div className="other-place mb-2 d-flex justify-content-between">
                    <div className="circle-rating">6</div>
                    <img src={Four} width="24" height="24" alt="first-place" />
                    <h5 className="d-inline-block text-truncate" style={{ maxWidth: 90 }}>Varanes Stevi</h5>
                    <div className="circle-true">28</div>
                    <div className="circle-false">11</div>
                    <div className="circle-no-answer">1</div>
                    <h5>60</h5>
                </div>
            </div>
        </div>
    )
}

export default Rating

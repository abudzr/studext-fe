import React from 'react'
import story from '../../assets/img/story.png'
import '../../assets/css/story.css'

function Story() {
    return (
        <div className="story">
            <h1>Story</h1>
            <div className="d-flex story-overflow">
                {Array.from(Array(13).keys()).map((data, index) => {
                    return (
                        <>
                            <div key={`story-${index}`}>
                                <div className="circle">
                                    <img src={story} alt="story" />
                                </div>
                                <p className="d-inline-block text-truncate" style={{ maxWidth: 70 }}>Marilyn Ghifari</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div >
    )
}

export default Story

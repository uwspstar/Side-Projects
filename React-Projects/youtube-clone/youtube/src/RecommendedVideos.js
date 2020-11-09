import React from 'react'
import "./RecommendedVideos.css";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h1>RecommendedVideos</h1>
            <img src="../src/1.png" alt="" width="320" height="240" />
            <br />
            <video width="320" height="240" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
            </video>
        </div>
    )
}

export default RecommendedVideos

import React from 'react'
import './VideoRow.css'

function VideoRow({ views,
    subs,
    description,
    timestamp,
    channel,
    title,
    image }) {
    return (
        <div className="videoRow">
            <div className="videoRow_imgBox">
                <img src={image} alt="" />
            </div>
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline">
                    {channel} .
                    <span className="videoRow_sub">
                        <span className="videoRow_subNum">{subs} Subscribers</span>
                    </span>
                    {views} view . {timestamp}</p>
                <p className="videoRow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow

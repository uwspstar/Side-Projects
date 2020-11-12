import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlineIcon from '@material-ui/icons/TuneOutlined'
import './SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlineIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://i.ytimg.com/vi/EQKjgUUZTLM/hqdefault.jpg"
                channel="科学声音"
                verified
                subs="660K"
                noOfVideos={382}
                description="科学声音 全世界不知道有多少科学家，都梦想着能够实拍到一次球状闪电的真实影像。2012 年，这份颇有传奇色彩的幸运降临到西北师范大学的袁萍教授身上。..." />
            <hr />
            <VideoRow
                views="1.4M"
                subs="200K"
                description="这份颇有传奇色彩的幸运降临到西北师范大学的袁萍教授身上"
                timestamp="5 minutes ago"
                channel="科学声音"
                title="球状闪电的真实影像"
                image="https://i.ytimg.com/vi/EQKjgUUZTLM/hqdefault.jpg" />
            <VideoRow
                views="2.8M"
                subs="100K"
                description="袁萍教授身上这份颇有传奇色彩的球状闪电的真实影像幸运降临到西北师范大学的"
                timestamp="5 minutes ago"
                channel="西北师范大学"
                title="西北师范大学球状闪电的真实影像"
                image="https://i.ytimg.com/vi/dTBqWk5QIuI/hqdefault.jpg" />
        </div>
    )
}

export default SearchPage

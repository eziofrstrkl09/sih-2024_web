// src/components/Videos/Videos.jsx
import React from "react";
import { Link } from "react-router-dom";
import videosData from "../Contexts/VideosData";
import "./VideoCards.css";

function Videos() {
  return (
    <div className="videos-container">
      {videosData.map((video) => (
        <div key={video.id} className="video-card">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <Link to={`/videos/${video.id}`}>
            <button className="watch-button">Watch Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Videos;

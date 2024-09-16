// // import React from 'react'


// // function Videos() {
// //   return (
// //   <div>Videos Coming Soon...</div>
    
// //   )
// // }

// // export default Videos

// import React from 'react';
// import './Videos.css'; // Assume this is your external CSS file for Videos

// function Videos() {
//   return (
//     <>
//       <div className="intro-text">
//         <p>Let's Save Water!</p>
//       </div>
      
//       <div className="content-container">
//         <div className="side left-side">
//           <div className="content">
//             <h2>Browse by categories</h2>

//             <p>Water Conservation Techniques</p>
//             <ul>
//               <li>
//                 <a href="video_rainwater.html" title="Learn through animations!">Rainwater Harvesting</a>
//               </li>
//               <li>
//                 <a href="video_greywater.html" title="Learn through animations!">Greywater Recycling</a>
//               </li>
//               <li>
//                 <a href="video_dripirrigation.html" title="Learn through animations!">Drip Irrigation</a>
//               </li>
//               <li>Water-Efficient Fixtures</li>
//             </ul>
            
//             <p>Agricultural Water Management</p>
//             <ul>
//               <li>Soil Moisture Conservation</li>
//               <li>Crop Selection for Water Efficiency</li>
//               <li>Irrigation Scheduling</li>
//             </ul>
//           </div>
//         </div>
    
//         <div className="side right-side">
//           <div className="content">
//             <h1>Watch This Video</h1>
//             <iframe
//               src="https://www.youtube.com/embed/ev3iIj0Q254?si=p7UfsTPAKV5sPq5g"
//               width="640"
//               height="360"
//               allow="fullscreen; picture-in-picture"
//               allowFullScreen
//               style={{ border: 'none' }}>
//              </iframe>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Videos;



import React from "react";
import { useParams } from "react-router-dom";
import videosData from "../Contexts/VideosData";
import "./Videos.css"; // Reusing the same CSS as Videos.jsx

function VideoPage() {
  const { id } = useParams(); // Get the id of the clicked video
  const video = videosData.find((video) => video.id === id); // Find the video by id

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <>
      <div className="intro-text">
        <p>Let's Save Water!</p>
      </div>

      <div className="content-container">
        {/* Left side: Categories */}
        <div className="side left-side">
          <div className="content">
            <h2>Browse by categories</h2>
            <p>Water Conservation Techniques</p>
            <ul>
              <li><a href="/videos/rainwater-harvesting" title="Learn through animations!">Rainwater Harvesting</a></li>
              <li><a href="/videos/greywater-recycling" title="Learn through animations!">Greywater Recycling</a></li>
              <li><a href="/videos/drip-irrigation" title="Learn through animations!">Drip Irrigation</a></li>
              <li>Water-Efficient Fixtures</li>
            </ul>

            <p>Agricultural Water Management</p>
            <ul>
              <li>Soil Moisture Conservation</li>
              <li>Crop Selection for Water Efficiency</li>
              <li>Irrigation Scheduling</li>
            </ul>
          </div>
        </div>

        {/* Right side: Video */}
        <div className="side right-side">
          <div className="content">
            <h1>{video.title}</h1>
            <iframe
              src={video.videoUrl}
              width="640"
              height="360"
              frameBorder="0"
              allow="fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;

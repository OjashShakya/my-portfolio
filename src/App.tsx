import './App.css'
import pictureImage from './images/picture.png'
import connectImage from './images/connect.png'
import followImage from './images/follow.png'
import nameTag from './images/nametag.png'

function App() {
  return (
    <div className="portfolio-container">
      {/* Container 1: Name Tag (Top Left) */}
      <div className="container name-tag-section">
        <img src={nameTag} alt="Ojash Shakya" className="container-image" />
      </div>

      {/* Container 2: Watch (Top Middle) */}
      <div className="container watch-section">
        <div className="fill-div">Watch</div>
      </div>

      {/* Container 3: Man by River Image (Top Right) */}
      <div className="container image-section">
        <img src={pictureImage} alt="Ojash Shakya" className="container-image" />
      </div>

      {/* Container 4: Connect (Middle Left) */}
      <div className="container connect-section">
        <div className="fill-div">Connect</div>
        <img src={connectImage} alt="Ojash Shakya" className="container-image" />
      </div>

      {/* Container 5: Social Media Icons (Bottom Left) */}
      <div className="container social-section">
        <div className="fill-div">Social Media Icons</div>
      </div>

      {/* Container 6: Projects (Bottom Middle) */}
      <div className="container projects-section">
        <div className="fill-div">Projects</div>
      </div>

      {/* Container 7: Follow (Bottom Right) */}
      <div className="container follow-section">
        <img src={followImage} alt="Ojash Shakya" className="container-image" />
        <div className="fill-div">Follow</div>
      </div>
    </div>
  )
}

export default App

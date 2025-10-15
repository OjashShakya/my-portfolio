import './App.css'
import pictureImage from './images/picture.png'
import connectImage from './images/connect.png'
import followImage from './images/follow.png'
import nameTag from './images/nametag.png'
import weather from './images/weather.png'
import financefusion from './images/financefusion.png'
import ojashsdelight from './images/ojashsdelights.png'
import gmail from './images/gmail.png'
import github from './images/github.png'
import discord from './images/discord.png'
import twitter from './images/twitter.png'


function App() {
  const openInNewTab = (url: string) => {
    if (!url) return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const projectLinks: Record<string, string> = {
    weather: 'https://example.com/weather',
    financefusion: 'https://example.com/financefusion',
    ojashsdelight: 'https://example.com/ojashs-delights'
  }

  const socialLinks: Record<string, string> = {
    gmail: 'mailto:someone@example.com',
    github: 'https://github.com/your-username',
    discord: 'https://discord.com/users/your-id',
    twitter: 'https://twitter.com/your-handle'
  }

  const connectLink = 'https://www.linkedin.com/in/your-profile'
  const followLink = 'https://twitter.com/your-handle'
  return (
    <div className="portfolio-container">
      {/* Container 1: Name Tag (Top Left) */}
      <div className="container name-tag-section">
        <img src={nameTag} alt="Ojash Shakya" className="container-image" />
      </div>

      {/* Container 2: Watch (Top Middle) */}
      <div className="container watch-section">
        <div className="fill-div">Watch</div>
        <div className="watch-videos"></div>
      </div>

      {/* Container 3: Man by River Image (Top Right) */}
      <div className="container image-section">
        <img src={pictureImage} alt="Ojash Shakya" className="container-image" />
      </div>

      {/* Container 4: Connect (Middle Left) */}
      <div className="container connect-section">
        <div className="fill-div">Connect</div>
        <img
          src={connectImage}
          alt="Connect"
          className="container-image clickable"
          onClick={() => openInNewTab(connectLink)}
        />
      </div>

      {/* Container 5: Social Media Icons (Bottom Left) */}
      <div className="container social-section">
        <img
          src={gmail}
          alt="Gmail"
          className="container-image clickable"
          onClick={() => openInNewTab(socialLinks.gmail)}
        />
        <img
          src={github}
          alt="GitHub"
          className="container-image clickable"
          onClick={() => openInNewTab(socialLinks.github)}
        />
        <img
          src={discord}
          alt="Discord"
          className="container-image clickable"
          onClick={() => openInNewTab(socialLinks.discord)}
        />
        <img
          src={twitter}
          alt="Twitter/X"
          className="container-image clickable"
          onClick={() => openInNewTab(socialLinks.twitter)}
        />
      </div>

      {/* Container 6: Projects (Bottom Middle) */}
      <div className="container projects-section">
        <div className="fill-div">Projects</div>
        <div className="projects-container">
            <img
              src={weather}
              alt="Weather App"
              className="project-image clickable"
              onClick={() => openInNewTab(projectLinks.weather)}
            />
            <img
              src={financefusion}
              alt="Finance Fusion"
              className="project-image clickable"
              onClick={() => openInNewTab(projectLinks.financefusion)}
            />
            <img
              src={ojashsdelight}
              alt="Ojash's Delights"
              className="project-image clickable"
              onClick={() => openInNewTab(projectLinks.ojashsdelight)}
            />
        </div>
      </div>

      {/* Container 7: Follow (Bottom Right) */}
      <div className="container follow-section">
        <img
          src={followImage}
          alt="Follow"
          className="container-image clickable"
          onClick={() => openInNewTab(followLink)}
        />
        <div className="fill-div">Follow</div>
      </div>
    </div>
  )
}

export default App

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
    weather: 'https://ojash-weather.vercel.app',
    financefusion: 'https://financefusion-six.vercel.app/login',
    // ojashsdelight: 'https://example.com/ojashs-delights'
  }

  const socialLinks: Record<string, string> = {
    gmail: 'mailto:ojashshakya56@gmail.com',
    github: 'https://github.com/OjashShakya',
    discord: 'https://discord.com/users/750925675245994006',
    twitter: 'https://x.com/shakyaojash'
  }

  const connectLink = 'https://www.linkedin.com/in/ojashshakya/'
  const followLink = 'https://www.instagram.com/memoirdeojash'
  return (
    <div className="portfolio-container">
      {/* Container 1: Name Tag (Top Left) */}
      <div className="container name-tag-section">
        <img src={nameTag} alt="Ojash Shakya" className="container-image" />
      </div>

      {/* Container 2: Watch (Top Middle) */}
      <div className="container watch-section">
        <div className="section-title">Watch</div>
        <div className="watch-videos">
          <iframe
            className="watch-iframe"
            src="https://www.youtube.com/embed/fhRHnLwyKHE?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0&start=303&loop=1&playlist=fhRHnLwyKHE"
            title="YouTube Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Container 3: Picture (Top Right) */}
      <div className="container image-section">
        <img src={pictureImage} alt="Ojash Shakya" className="container-image" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(28, 28, 28, 0.15)"
          }}
  ></div>
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
        <div className="section-title">Projects</div>
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
              // onClick={() => openInNewTab(projectLinks.ojashsdelight)}
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

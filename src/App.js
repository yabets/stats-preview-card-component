import './App.css';
import desktopImage from "./image-header-desktop.jpg";

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="left">
          <h1 className="title">

          Get <span className="stat-header">insights</span> that help your business grow.
          </h1>
          <p className="stat"> 
          Discover the benefits of data analytics and make better decisions regarding revenue, customer 
          experience, and overall efficiency.
          </p>

          <div className="stat-row">
            <div> 10k+ companies</div>
            <div>314 templates</div>
            <div>12m+ queries</div>
          </div>

          <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/yabets">Yabets</a>.
          </div>
        </div>
      </div>
      
      <div className="right">
        <img className="image" src={desktopImage}/>
      </div>
    </div>
  );
}

export default App;

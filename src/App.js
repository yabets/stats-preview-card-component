import './App.css';
// import desktopImage from "./image-header-desktop.jpg";

function App() {
  return (
    <div className="container">
        <div className="left">
          <div className="columns">
              <h1 className="title">
                Get <span className="stat-header">insights</span> that help your business grow.
              </h1>
              <p className="stat"> 
                Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                experience, and overall efficiency.
              </p>

              <div className="stat-row">
                <div><h2>10k+</h2> <h3>companies</h3></div>
                <div><h2 className="">314</h2> <h3>templates</h3></div>
                <div><h2>12M+</h2> <h3>queries</h3></div>
              </div>

              <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/yabets">Yabets</a>.
              </div>
            </div>
        </div>
        <div className="right">
          {/* <img className="image" src={desktopImage} alt="team working in group" /> */}
        </div>
      
      
    </div>
  );
}

export default App;

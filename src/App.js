import logo from './logo.svg';
import './App.css';
import ProfileImg from './img/Picture.jpg';
import ResumePDF from './pdf/BandileThulaniKevinNdlelaCV.pdf';

function App() {
  return (
    <div classNameName="App">
        <div className="border">
      <nav className="navbar">
          <div className="navdiv">
            <div className="logo"><a href="#">Portfolio </a></div>
            <ul className="navbarlist">
              <li className="navbarlist"><a className="navbarlistitem" href="#">About</a></li>
              <li className="navbarlist"><a className="navbarlistitem" href="#">Education</a></li>
              <li className="navbarlist"><a className="navbarlistitem" href="#">Contact</a></li>
              <li className="navbarlist"><a className="navbarlistitem" href="#">Interests</a></li>
            </ul>
          </div>
      </nav>
      <hr/>
      <div className="container">
        <div className="profile">
          <div className="profile_container">
            <div className="profile_profileImg">
              <img className="profileImage" src={ProfileImg} alt=""/>
            </div>
            <div>
              <h1 className="profile_name">
                <span className="profile_name">Bandile</span>
                <span className="profile_name">Ndlela</span>
              </h1>
              <p className="profile_title">Software Developer</p>
              <p className="description">
                Computer Science and Informatics graduate from the University of 
                Johannesburg. Eager to follow computer programming as a career. 
                Being successful in this career is essential. With my experience in 
                both back-end and front-end programming, my competitiveness to 
                be the best, my hard-working lifestyle, dependable team player, 
                adaptive learning, and innovative thinking, a career in 
                programming is sure to bring success for myself and any future 
                employer. 
              </p>
              <a className="downloadBtn" href={ResumePDF} download="ResumeCV.pdf">View PDF</a>
            </div>
          </div>
        </div>
        <div className="group-1">
          <div className="skills">
            <h3 className="title">Expertise</h3>
            <ul className="skill_list description">
              <li>Javascript (including jquery and knockout js)</li>
              <li>Html CSS</li>
              <li>Java</li>
              <li>PHP</li>
              <li>C# (ASP.Net)</li>
              <li>SQL (including Firebird databases)</li>
            </ul>
          </div>
          <div className="extras">
            <h3 className="title">Extra Skills and Experience</h3>
            <ul className="skill_list description">
              <li>Git</li>
              <li>Azure DevOps</li>
              <li>Experienced Agile Developer</li>
            </ul>
          </div>
        </div>
        <div className="group-2">
          <div className="experience">
            <h3 className="title">Experience</h3>
            <div className="exp_item">
              <h4 className="item_title">Consnet</h4>
              <p className="item_subtitle">Intern Full Stack Developer</p>
              <p className="description">
                My job involved developing customer-specific functionality for their website and on 
                rare occasions, I would test and fix existing code. 
              </p>
            </div>
            <div className="exp_item">
              <h4 className="item_title">Altron Fintech Delter IT</h4>
              <p className="item_subtitle">Intern Full Stack Developer</p>
              <p className="description">
                I worked on their system that used the ASP.Net as a framework. My internship involved enhancing already 
                existing features on their system, fixing bugs, and helping with 
                customer issues relating to the system. Towards the end of my 
                internship, I would also work on implementing new features for 
                their system. 
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footboundary">
        <div className="footerbottom">
          <span className="designer"><p>Powered by React &copy; 2022</p></span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

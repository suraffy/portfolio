import profilePic from "../img/surafel.jpg";

const Footer = () => {
  const imgUrlProfile = profilePic;
  return (
    <footer>
      <div className="container">
        <div className="footer-profile flex-column">
          <div className="footer-about-me flex-row">
            <img
              src={imgUrlProfile}
              alt="Surafel Araya"
              className="footer-about-me-img"
            />
            <div className="footer-about-me-text">
              <h4>Surafel Araya</h4>
              <p>
                Software developer and web designer. Passionate about making
                living easier through programming.
              </p>
            </div>
          </div>

          <div className="footer-courses-codes flex-row">
            <div className="footer-courses">
              <h4>Courses</h4>
              <ul className="footer-courses-list">
                <li>
                  <a href="" target="_blank">
                    <i className="fa fa-youtube"></i>YouTube
                  </a>
                </li>

                <li>
                  <a href="" target="_blank">
                    <i className="fa fa-medium"></i>Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-codes">
              <h4>Codes</h4>
              <ul className="footer-codes-list">
                <li>
                  <a href="" target="_blank">
                    <i className="fa fa-github"></i>GitHub
                  </a>
                </li>

                <li>
                  <a href="" target="_blank">
                    <i className="fa fa-codepen"></i>CodePen
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-active-on">
            <h4>Active on</h4>
            <ul className="footer-active-on-list">
              <li>
                <a href="" target="_blank">
                  <i className="fa fa-linkedin"></i>LinkedIn
                </a>
              </li>

              <li>
                <a href="" target="_blank">
                  <i className="fa fa-twitter"></i>Twitter
                </a>
              </li>

              <li>
                <a href="" target="_blank">
                  <i className="fa fa-reddit"></i>Stackoverflow
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="web-developer-name flex-column">
          Designed and Developed by&nbsp;<a href="#about-me">Surafel Araya</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const profileImgUrl = `${process.env.PUBLIC_URL}/img/surafel.jpg`;

  const twitterAccountUrl = "https://twitter.com/surafelaraya";
  const linkedinAccountUrl = "https://www.linkedin.com/in/surafel-araya/";
  const githubAccountUrl = "https://github.com/suraffy";
  const codepenAccountUrl = "https://codepen.io/suraffy";

  return (
    <section id="about-me">
      <div className="container">
        <div className="flex-column">
          <div className="about-me-overview">
            <img src={profileImgUrl} alt="Surafel Araya" />
            <h2 className="h2-underline">Surafel Araya</h2>
          </div>

          <div className="about-me-detail">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
              excepturi consequatur. Doloribus illum.
            </p>
            <p>
              adipisci reiciendis nisi. Fugiat cum praesentium quidem officiis
              mollitia similique, aliquid maiores a! Rerum quod possimus,
              explicabo ex autem sunt veritatis, consequatur et fugiat a
              asperiores consequuntur! Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio facilis odit, labore adipisci accusantium Voluptates
              alias quos eaque quis inventore qui, possimus maiores quidem
              necessitatibus delectus facere accusamus, unde hic voluptatem eos
              id animi. Quis, ab!
            </p>
          </div>

          <ul className="about-me-accounts flex-row">
            <li>
              <a
                href={githubAccountUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-column"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <span>GitHub</span>
              </a>
            </li>

            <li>
              <a
                href={linkedinAccountUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-column"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href={twitterAccountUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-column"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
                <span>Twitter</span>
              </a>
            </li>

            <li>
              <a
                href={codepenAccountUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-column"
              >
                <FontAwesomeIcon icon={faCodepen} size="lg" />
                <span>CodePen</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

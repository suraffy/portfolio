import profilePic from "../img/surafel.jpg";

const About = () => {
  const imgUrlProfile = profilePic;

  return (
    <section id="about-me">
      <div class="container">
        <div class="flex-column">
          <div class="about-me-overview">
            <img src={imgUrlProfile} alt="Surafel Araya" />
            <h2 class="h2-underline">Surafel Araya</h2>
          </div>

          <div class="about-me-detail">
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

          <ul class="about-me-accounts flex-row">
            <li>
              <a href="" target="_blank" class="flex-column">
                <i class="fa fa-github"></i>
                <span>GitHub</span>
              </a>
            </li>

            <li>
              <a href="" target="_blank" class="flex-column">
                <i class="fa fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a href="" target="_blank" class="flex-column">
                <i class="fa fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </li>

            <li>
              <a href="" target="_blank" class="flex-column">
                <i class="fa fa-codepen"></i>
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
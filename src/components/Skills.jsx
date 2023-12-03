import skillsList from "../services/skillsList";

const Skills = () => {
  const imgUrl = `${process.env.PUBLIC_URL}/img/tech logos/`;

  return (
    <section id="my-skills">
      <div className="container flex-row">
        <div className="my-skills-content flex-column">
          <h2 className="h2-underline">My Skills</h2>
          <div className="skills-grid-container">
            {skillsList.map((skill) => (
              <div
                key={skill.name}
                className={`skills-box flex-row ${
                  skill.details ? "span-col-2" : ""
                }`}
              >
                <img src={imgUrl + skill.img} alt={skill.name} />
                {console.log(imgUrl + skill.img)}
                {skill.details && (
                  <ul className="skills-details">
                    {skill.details.map((li, index) => (
                      <li key={index}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

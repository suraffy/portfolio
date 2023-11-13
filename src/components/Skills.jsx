import skillsList from "../services/skillsList";

const Skills = () => {
  const imgUrl = "/img/tech logos/";

  return (
    <section id="my-skills">
      <div className="container">
        <div className="flex-column">
          <h2 className="h2-underline">My Skills</h2>
          <div className="skills-grid-container">
            {skillsList.map((skill) => (
              <div key={skill.name} className="skills-box flex-row">
                <img src={imgUrl + skill.img} alt={skill.name} />
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

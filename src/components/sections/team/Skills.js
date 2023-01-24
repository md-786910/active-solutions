import React from "react";

const Skills = ({ desc }) => {
  return (
    <section className="skills-section bg-transparent pt-90 pb-0">
      <div className="container">
        {desc &&
          desc.map((item, index) => {
            return (
              <p key={index} className="mb-30">
                {item.desc}
              </p>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;

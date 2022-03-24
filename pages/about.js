import React from "react";

const About = () => {
  return (
    <div className="page_about">
      <div className="page_about__content">
        <h1 className="page_about__content-title">About us</h1>
      </div>

      <div className="page_about__main">
        <div className="page_about__main-content">
          <h2>Who we are</h2>
          <p>
            The American School of Guatemala (CAG) is an independent,
            non-profit, non-denominational, college preparatory school that
            offers a rigorous academic program for preschoolers to 12th graders,
            modeled after the best educational practices and methodologies of
            the United States of America.The American School of Guatemala (CAG)
            is an independent, non-profit, non-denominational, college
            preparatory school that offers a rigorous academic program for
            preschoolers to 12th graders, modeled after the best educational
            practices and methodologies of the United States of America.
            practices and methodologies.
          </p>
        </div>

        <div className="page_about__main-image">
          <img src="images/Directory-Central-America-CAG.jpg" alt="" />
        </div>
      </div>

      <div className="page_about__main page_about__main--second">
        <div className="page_about__main-image">
          <img src="images/school-2.jpg" alt="" />
        </div>

        <div className="page_about__main-content">
          <h2>We Believe</h2>
          <ul>
            <li>
              Our students, as individuals, have unique intellectual, social,
              emotional and physical characteristics and needs
            </li>
            <li>
              AII students can learn, and they learn most effectively when they
              are actively engaged in the learning process when they are faced
              with challenging expectations and when they are held to clearly
              defined standards of excellence
            </li>
            <li>
              Learning should take place within a physically and psychologically
              safe environment
            </li>
            <li>
              AII members of the school community, which includes faculty,
              staff, parents, and students share the responsibility far
              accomplishing our mission
            </li>
            <li>
              Continuous improvement is essential to providing quality
              educational opportunities far our students.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

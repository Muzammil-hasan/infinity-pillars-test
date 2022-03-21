import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">Build your ideas into websites.</h1>
      <p className="hero__subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div className="hero__ctas">
        <button className="portfolio_button--primary">See projects</button>
        <button className="portfolio_button--secondary">Contact me</button>
      </div>
    </section>
  );
};

export default Hero;

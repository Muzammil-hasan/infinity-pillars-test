import React from "react";
import Image from "next/image";

import { process } from "../context/process";

const Process = () => {
  return (
    <section className="process">
      <h1 className="process_title">We choose the best way for our clients!</h1>

      <ul className="process_list">
        {process &&
          process.map(({ title, description, icon }) => {
            return (
              <li className="process_list__item" key={title}>
                <img
                  src={`/icons/${icon}.svg`}
                  alt={title}
                  className="process_list__item-icon"
                />
                <h2 className="process_list__item-title">{title}</h2>
                <p className="process_list__item-description">{description}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Process;

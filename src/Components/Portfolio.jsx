/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pf.png";

const imageAltText = "Abstract image of a woman";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " SoundBar (Music App): ",
    description:
      "Developed SoundBar, a minimalist MusicApp featuring intuitive controls for seamless playback.",
    url: "https://github.com/tanieshaa/music-app",
  },
  {
    title: " To-Do List:",
    description:
      "A simple To-Do List application built using React. Allows users to add, delete, edit tasks, and mark tasks as completed.",
    url: "https://github.com/tanieshaa/Todo-List",
  },
  {
    title: "Landing Page:",
    description:
      "React Landing Page: A simple landing page template built using React with dynamic visuals.",
    url: "https://github.com/tanieshaa/Landing-page",
  },
  {
    title: "Twitter Clone:",
    description:
      "A simple frontend for the Twitter Clone built using tailwind CSS for a highly responsive and visually appealing user interface..",
    url: "https://github.com/tanieshaa/twitter-clone",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style= {{ backgroundColor: "black", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ color: "white" }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

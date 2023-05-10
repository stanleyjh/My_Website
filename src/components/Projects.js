import React, { useState } from "react";
import Maymar from "../assets/images/projects/maymar.jpg";
import Tours from "../assets/images/projects/tours.jpg";
import Calculator from "../assets/images/projects/calculator.jpg";
import Clock from "../assets/images/projects/clock.jpg";
import DrumKit from "../assets/images/projects/drum-kit.jpg";
import Trivia from "../assets/images/projects/trivia.jpg";
import Menu from "../assets/images/projects/menu.jpg";

const Projects = () => {
  const [show, setShow] = useState(true);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div>
        <a
          href="https://stanleyjh.gitlab.io/learn-react/questions-app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Trivia} alt="project" />
        </a>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          <h3>Trivia</h3>
        </button>
        {show && (
          <p>
            This application shows a list of questions and answers to general
            trivia questions. The data is referenced locally in the data.js
            file. Each object in the data array is iterated over using the map
            method. Each object is returned with the SingleQuestion component.
            The props passed to the SingleQuestion component is then
            destructured to access the object's properties. Clicking the +/-
            button will hide or show the information. This is done with the
            State Hook. The isExpanded variable is assigned a false value by
            default and is flipped to true when the +/- button is clicked.
          </p>
        )}
      </div>
      <div>
        <a
          href="https://stanleyjh.gitlab.io/learn-react/menu-app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Menu} alt="project" />
        </a>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          <h3>Menu</h3>
        </button>
        {show && (
          <p>
            This application displays a food menu. There are category buttons to
            filter the type of food to order. The data is referenced locally in
            a file called data.js. When a category is selected, selectedCategory
            is invoked and the filter function is used to select items within
            the selected category. The items matching the category are then
            assigned to the updatedItems variable and passed as an argument to
            the setCategory function to re-render the page with the specific
            items. If "All" is selected, setCategory is invoked with the
            original items array to show all items.
          </p>
        )}
      </div>
      <div>
        <a
          href="https://stanleyjh.gitlab.io/learn-react/tours-app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Tours} alt="project" />
        </a>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          <h3>Tours</h3>
        </button>
        {show && (
          <p>
            This application shows a list of tours you can take. You can hide
            tours you are not interested in or read more about the tour. If you
            are not interested in any tours, there will be a button prompting
            you to refresh the page. The data is referenced from an external
            source. Before the data loads, there is a loading screen that
            displays while the data is being fetched. Once the data is fetched,
            the loading screen will disappear. The data is pulled using an
            Asynchronous function and JavaScript's Fetch API. The API is also
            encapsulated in a try...catch block to handle exceptions. The data
            is passed to each child component called Tour using prop drilling.
            The data is then accessed using destructuring and is displayed on
            the page using JSX.
          </p>
        )}
      </div>
      <div>
        <a href="https://maymarpoke.com/" target="_blank" rel="noreferrer">
          <img src={Maymar} alt="project" />
        </a>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          <h3>Maymar Poke & Grill</h3>
        </button>
        {show && (
          <p>
            A website I developed for a client using HTML, CSS, and JavaScript.
            I focused on a mobile-first design and used flexbox to snap elements
            into place. Using google business insights, I saw a 40% increase in
            phone call volume and requests for directions to the restaurant
            since the website was created.
          </p>
        )}
      </div>
      <div>
        <a
          href="https://stanleyjh.github.io/Calculator/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Calculator} alt="project" />
        </a>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          <h3>Calculator</h3>
        </button>
        {show && (
          <p>
            This was my first JavaScript Project. It was a challenge at first
            because this was the first time I was interweaving HTML, CSS and JS.
            There were many nights of head scratching trying to figure out why
            things weren't working the way I expected. Overtime, I was able to
            learn how to use Chrome DevTools and add console.logs to debug my
            code to see where things were or were not executing.
          </p>
        )}
      </div>
      <div>
        <a
          href="https://stanleyjh.github.io/Drum-Kit/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={DrumKit} alt="project" />
        </a>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          <h3>Drum Kit</h3>
        </button>
        {show && (
          <p>
            A drum-kit that allows you to play the drums by clicking specific
            keys on your keyboard or by tapping on the buttons within the page.
            I learned about the keypress event and keycode values which were
            unique to each pressed key.
          </p>
        )}
      </div>
      <div>
        <a
          href="https://stanleyjh.github.io/Clock/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Clock} alt="project" />
        </a>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          <h3>Clock</h3>
        </button>
        {show && (
          <p>
            A web-based clock that returns the local time and date. I created an
            SVG to display a clock face with rotating hands. I used the CSS
            transform property to rotate the hands a certain number of degrees
            based on the local time.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;

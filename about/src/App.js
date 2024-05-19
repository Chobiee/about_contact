import React from 'react';
import './App.css';
import sucasa from './images/sucasa.png.png'; // Correct the path to your image

function App() {
  return (
    <section className="hero">
      <div className="content-wrapper">
        <img src={sucasa} alt="Su Casa Garden Resort" className="resort-image" />
        <div className="content">
          <h1 className="title">ABOUT</h1>
          <p className="description">
            Whether it's every generation of your family or every department in your company, Su Casa Garden Resort makes it easy to get people together. Su Casa offers you immediate access to amenities such as an outdoor adult/kiddie pool, air conditioned videoke room furnished with superior home theater system, pavilion perfect for family and company gatherings such as reunions, birthdays, weddings, team buildings, and so on, two air conditioned bedrooms (with double beds), shower rooms, kitchen with stove and refrigerator, outdoor grill, gazebo and a Koi pond in a serenely landscaped garden.
          </p>
          <a href="#" className="overview-link">Overview</a>
        </div>
      </div>
    </section>
  );
}

export default App;

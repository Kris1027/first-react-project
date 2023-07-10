import React from "react";

function Main() {
  return (
    <main className="main">
      <section className="heading-section">
        <div className="heading-section__image" />
        <div className="heading-section__bg-left"></div>
        <h2 className="heading-section__title">Humanizing your insurance.</h2>
        <p className="heading-section__text">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="heading-section__btn">view plans</button>
        <div className="heading-section__bg-right"></div>
      </section>
      <section className="main-section">
        <h2 className="main-section__title">We're Different</h2>
        <article className="main-section__article">
          <div className="main-section__article--icon"></div>
          <h3 className="main-section__article--title">Snappy Process</h3>
          <p className="main-section__article--text">
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms
          </p>
        </article>
        <article className="main-section__article">
          <div className="main-section__article--icon"></div>
          <h3 className="main-section__article--title">Snappy Process</h3>
          <p className="main-section__article--text">
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms
          </p>
        </article>
        <article className="main-section__article">
          <div className="main-section__article--icon"></div>
          <h3 className="main-section__article--title">Snappy Process</h3>
          <p className="main-section__article--text">
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms
          </p>
        </article>
      </section>
    </main>
  );
}

export default Main;

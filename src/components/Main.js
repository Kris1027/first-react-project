import React from 'react';

const articlesData = [
  {
    title: 'Snappy Process',
    icon: './images/icon-snappy-process.svg',
    description:
      "Our application process can be completed in minutes, not hours. don't get stuck filling in tedious forms",
  },
  {
    title: 'Affordable Prices',
    icon: './images/icon-affordable-prices.svg',
    description:
      "We don't you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible",
  },
  {
    title: 'People first',
    icon: './images/icon-people-first.svg',
    description:
      "Our plan aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
  },
];

function Main() {
  return (
    <main className='main'>
      <section className='heading-section'>
        <img
          className='heading-section__image'
          src='./images/image-intro-mobile.jpg'
          alt='family'
        />
        <img
          className='heading-section__bg-left'
          src='./images/bg-pattern-intro-left-mobile.svg'
          alt='background'
        />
        <h2 className='heading-section__title'>Humanizing your insurance.</h2>
        <p className='heading-section__text'>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className='heading-section__btn'>view plans</button>
        <img
          className='heading-section__bg-right'
          src='./images/bg-pattern-intro-right-mobile.svg'
          alt='background'
        />
      </section>
      <section className='main-section'>
        <hr className='heading-section__hr' />
        <h2 className='main-section__title'>We're Different</h2>
        {articlesData.map((article) => (
          <Article articleObj={article} key={article.title} />
        ))}
      </section>
    </main>
  );
}

function Article({ articleObj }) {
  return (
    <article className='main-section__article'>
      <img
        className='main-section__article--icon'
        src={articleObj.icon}
        alt='icon'
      />
      <h3 className='main-section__article--title'>{articleObj.title}</h3>
      <p className='main-section__article--text'>{articleObj.description}</p>
    </article>
  );
}

export default Main;

import React from 'react';
import Page from '../components/Page';
import Main from '../components/Main';
import AboutMe from '../components/AboutMe';

export default () => (
  <Page className="Home">
    <AboutMe />
    <Main className="Articles">
      <section className="Container">
        <h1 className="AboutMe__header">About Me</h1>
        <article>
          <p className="AboutMe__p">Hi, I'm Abbey Hart!</p>
          <p className="AboutMe__p">
            I graduated from the University of Florida in 2015 with a degree in
            French and Francophone studies and I moved to Austin, TX shortly
            after. I had never thought about programming or web development
            before but every one I met in Austin seemed to know how to code and
            I wanted to see what the big fuss was. I've always been an art and
            history kind of person, so learning to code felt like teaching a
            fish how to climb a tree. With time, I started to love the
            challenging discomfort that came with every new problem. Recently, I
            realized that web development was what I wanted to do for my career
            and I decided to go back to school to learn the fundamentals of
            computer programming and become a better web developer.
          </p>
          <p className="AboutMe__p">
            I have been programming as a hobby for about two years now and I am
            in school at Austin Community College pursuing my AS in Computer
            Science. Throughout this process, I've met a community that is
            deeply in love with what they do and one that inspires me everyday
            to learn more about the ever expanding field of web development.
            I've dabbled in many languages, frameworks, and libraries, finding
            my great loves in Node.js, Go, Javascript, Graphql, and React.
          </p>
        </article>
      </section>
    </Main>
  </Page>
);

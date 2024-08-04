import React from 'react';

interface Intro {
  title: string;
  content: string;
}

interface IntroSectionProps {
  intro: Intro[];
}

const IntroSection: React.FC<IntroSectionProps> = ({ intro }) => {
  return (
    <section>
      <h2>Intro</h2>
      {intro.map((intro, index) => (
        <div key={index}>
          <h3>{intro.title}</h3>
          <p>{intro.content}</p>
        </div>
      ))}
    </section>
  );
};

export default IntroSection;

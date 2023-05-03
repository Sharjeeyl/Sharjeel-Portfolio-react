import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full
      max:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Welcome to my portfolio! My name is Sharjeel Javed, and I am an Artificial Intelligence student at The Islamia University of Bahawalpur. My passion for technology and programming has led me to pursue a career in the field of AI and software development.

As a skilled front-end web developer, I have experience in creating responsive and aesthetically pleasing web applications using technologies such as React, Tailwind, and Bootstrap. I take pride in creating user-friendly designs that enhance the user experience and bring value to my clients.
        </p>

        <br />

        <p className="text-xl">
        My academic background in AI has provided me with a deep understanding of machine learning, data analysis, and natural language processing. This knowledge has helped me develop efficient and effective solutions to complex problems. I am always eager to learn and explore new technologies to keep up with the rapidly evolving field of AI.

In addition to my technical skills, I am a team player and a good communicator. I believe that effective collaboration and communication are essential for the success of any project. I am passionate about delivering high-quality work and meeting project deadlines.

Thank you for taking the time to review my portfolio. I look forward to discussing potential collaborations with you.
        </p>
      </div>
    </div>
  );
};

export default About;


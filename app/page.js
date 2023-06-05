import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Slide
        <br className="max-md:hidden" />
        <span className="orange_gradient"> AI-Powered prompts</span>
      </h1>
      <p className="desc text-center">
        Promptly is an open-source AI prompting tool for modern world to
        discover, create and share (slide) creative prompts.
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;

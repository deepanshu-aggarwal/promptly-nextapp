"use client";

import React, { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleTagClick = () => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          className="search_input peer"
          value={search}
          onChange={handleSearchChange}
          required
        />
      </form>

      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;

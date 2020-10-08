import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios(
      `http://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`
    ).then(({ data }) => {
      const posts = data.map(({ title, id, body }) => ({
        title: id,
        contentTitle: title,
        contentText: body,
        contentDetailedText: body,
      }));
      setPosts(posts);
      setPageNumber((pre) => pre + 1);
    });
  }, []);

  const fetchPosts = async () => {
    setPageNumber((pre) => pre + 1);
    axios(
      `http://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`
    ).then(({ data }) => {
      const posts = data.map(({ title, id, body }) => ({
        title: id,
        contentTitle: title,
        contentText: body,
        contentDetailedText: body,
      }));
      setPosts((prevState) => [...prevState, ...posts]);
    });
  };

  return (
    <div className="App">
      <div style={{ width: "100%", height: "500px" }}>
        <InfiniteScroll
          dataLength={posts}
          next={fetchPosts}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Chrono mode="VERTICAL" items={posts} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default App;

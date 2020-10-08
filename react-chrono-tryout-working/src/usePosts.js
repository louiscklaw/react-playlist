import { useEffect, useState } from "react";

export default function usePosts(pageNumber) {
  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
    return () => {};
  }, [pageNumber]);
  return { loading, posts };
}

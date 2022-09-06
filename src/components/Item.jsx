import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function Item() {
  const { id } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL}/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <h1> {item.slug} </h1>
      {item.content && <div> {parse(item.content)} </div>}
    </div>
  );
}

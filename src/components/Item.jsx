import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function Item() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [item, setItem] = useState([]);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL}/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div>
      <div className="main">
        <h1> {item.slug} </h1>
        {item.content && <div> {parse(item.content)} </div>}
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

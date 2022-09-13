import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { useNavigate } from 'react-router-dom'

export default function AboutPage() {

  const { id } = useParams();
  let navigate = useNavigate();
  const [item, setItem] = useState([]);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div>
      <div className="main">
        <h1> {item.name} </h1>
        {item.description && <div> {parse(item.description)} </div>}
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

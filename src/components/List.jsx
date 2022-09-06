import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function List() {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/posts`)
        .then(res => res.json())
        .then(data => setList(data.posts))
    }, [])

  return (
    <div>
        <h1>List of movies</h1>
        { 
          list && 
                list.map((item) => {
                    return <li><Link to={`/${item.ID}`}> {item.slug}</Link> </li> 
                })
            }
    </div>
  )
}

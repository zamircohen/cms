import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function List() {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch("https://public-api.wordpress.com/rest/v1.1/sites/zamircohen.wordpress.com")
        .then(res => res.json())
        .then(data => setList(data))
    }, [])

  return (
    <div>
        <h1>List of movies</h1>
        {
                list.map((item) => {
                    return <li><Link to={`/${item.id}`}> {item.slug}</Link> </li> 
                })
            }
    </div>
  )
}

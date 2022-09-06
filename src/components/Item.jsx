import React from 'react'
import { useState, useEffect } from 'react'

export default function Item(props) {

    const [item, setItem] = useState([])

    useEffect(() => {   
        let url = `data.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])
    
  return (
    <div>
            {
                item.map((item) => {
                    return (
                    <div>
                    
                    <h1> {item.slug} </h1> 
                    <p> {item.content.rendered} </p>
                    
                    </div>
                    )
                })
                
            }
   
    </div>
  )
}

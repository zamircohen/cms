import React from 'react'
import { useParams } from 'react-router-dom'
import Item from '../components/Item'

export default function ItemPage() {

    const params = useParams()

  return (
    <div>
        <Item id={params.id} />
    </div>
  )
}

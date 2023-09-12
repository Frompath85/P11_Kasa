import "./tag.css"
import React from 'react'

export default function Tag(props) {
  return (
    <button className="tag">{props.tag}</button>
  )
}

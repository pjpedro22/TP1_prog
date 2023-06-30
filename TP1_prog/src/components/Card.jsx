import React from 'react'
import './Card.css'

const Card = (props) => {
  const classnames = ['card'];

  if (props.value === props.active) {
    classnames.push('active');
  }

  const expandCard = () => {
    props.onMouseEnter(props.value);
  }

  const collapseCard = () => {
    props.onMouseLeave(props.value);
  }

  return (
    <div className={classnames.join(" ")} onMouseEnter={expandCard} onMouseLeave={collapseCard}>
      <h1 className='card-title'>{props.name}</h1>
      <img className='card_img' src={props.img} alt={props.name} />
      <div className="abilities">{props.children}</div>
    </div>
  )
}

export default Card
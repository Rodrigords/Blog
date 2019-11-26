import './CardPost.css'
import React from 'react'

export default props =>
  <div className="card">
      <div className="card-header">
        <img src={require(`../../assets/imgs/${props.imgSrc}`)} alt={`logo - ${props.title}`} className='imgPost'></img>
      </div>
      <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>

          <span className="card-text pull-right">Por {props.author}, {props.createDate }.</span>
      </div>
  </div>

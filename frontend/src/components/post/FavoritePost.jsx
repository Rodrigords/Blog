import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import imgReact from '../../assets/imgs/react.jpg'
import imgAngular from '../../assets/imgs/angular.png'
import imgReactNative from '../../assets/imgs/react-native-2.png'
import './FavoritePost.css'

export default class FavoritePost extends Component{

  render(){
    return (
      <Carousel>

        <Carousel.Item>
          <img className='d-block w-100' src={imgReact}
            alt='React'/>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={imgAngular}
            alt='Angular'/>

        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={imgReactNative}
            alt='React-Native'/>
        </Carousel.Item>
                
      </Carousel>
    )
  }
}
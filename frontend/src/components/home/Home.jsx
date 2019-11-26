import React, { Component } from 'react'
import CardPost from '../post/CardPost';
import api from '../../Services/api'
import FavoritePost from '../post/FavoritePost'
import './Home.css'

export default class Home extends Component{
  state = {
    posts: []
   }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () =>{
    const response = await api.get('/posts')

    const posts = response.data
    
    this.setState({ posts })
  }

  renderCardList = () => {
    return(
      <div className='row'>
        {this.renderCards()}
      </div>
    )
  }

  renderCards = () => {
    return(
      this.state.posts.map(card =>
        <div key={card.id} className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <CardPost id={card.id} title={card.title} author={card.author} imgSrc={card.imgSrc} createDate={card.createDate}/>        
        </div>
      )
    )
  }

  render(){
    return(
      <main className='content'>
        <header>
         <FavoritePost className='carousel'/>
        </header>

        <section className='container-fluid'>
          {this.renderCardList()}
        </section>
      </main>
    )
  }
}
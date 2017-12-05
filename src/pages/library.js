import React, { Component } from 'react'
import '../App.css';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export class Library extends Component {
  render() {

    const { loading, allMedias } = this.props.data

    return (
      <div className='container-fluid'>
        <div>
            <h2 className='display-3'>Library</h2>
        </div>
        <div className='row justify-content-center'>
          {!loading && allMedias.map(media => (
            <div className='jumbotron'>
              <div key={media.id} className='card z-depth-1'>
                <div className='crop'>
                  <a href={'/library/' + media.id}><img className='card-img-top' src={media.image} alt={media.name} /></a>
                  <p className='card-title'>{media.name} ({media.yearReleased})</p>
                  <p className='card-text'>{media.format}</p>
                </div>
              </div>  
            </div>   
        ))}
      </div>
    </div>  
    )
  }
}

const QUERY = gql`
query {
  allMedias {
    id
    image
    name
    yearReleased
    movieDb
    format
  }
}
`

export default graphql(QUERY)(Library)
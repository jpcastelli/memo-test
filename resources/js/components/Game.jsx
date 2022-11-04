import React, { Component } from 'react';
import { useQuery, gql } from '@apollo/client';
import ReactCardFlip from 'react-card-flip';



function GetMemoImages() {
  const GET_IMAGES_QUERY = gql`
    query {
      GetMemoTestById(id: 1) {
       id
       name
       images
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_IMAGES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error displaying the Memo Tests :(</p>;
 return <div></div>
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.styles = {
      card: {
        border: '1px solid #eeeeee',
        borderRadius: '3px',
        padding: '15px',
        width: '250px'
      },
      image: {
        height: '200px',
        width: '250px'
      }
    }
  }
  
  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    
    return (
      <React.Fragment>
      <GetMemoImages />
      
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div style={this.styles.card}>
          <img
            style={this.styles.image}
            src="//static.pexels.com/photos/59523/pexels-photo-59523.jpeg" />

          <button onClick={this.handleClick}>Flip Card</button>
        </div>

        <div style={this.styles.card}>
          <img
            style={this.styles.image}
            src="//img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg?no-auto" />

          <button onClick={this.handleClick}>Flip Card</button>
        </div>
      </ReactCardFlip></React.Fragment>
    );
  }
}

export default Game;
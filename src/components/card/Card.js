import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card-component">
        {this.props.children}
      </div>
    );
  }
}

export default Card;

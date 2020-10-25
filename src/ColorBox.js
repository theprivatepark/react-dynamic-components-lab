import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    // ///////////////AREA ONE - set const new opacity to old opacity - 0.1
    // const newOpacity = this.props.opacity - 0.1
    /* AREA TWO- if opacity > 0.2 ?  */
    return this.props.opacity <= 0.2 ? null : (
     
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* AREA THREE */} <ColorBox opacity={this.props.opacity - 0.1} />
      </div>
    )
  }

}


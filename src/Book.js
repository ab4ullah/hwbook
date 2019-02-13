import React, { Component } from 'react';
import './App.css';

class Book extends Component {
    state = {
        hide: 'hidden'
      }
      hideMeme = () => {
        if (this.state.hide === 'false'){
          this.setState({hide: 'hidden'})
        } else {
          this.setState({hide: 'false'})
        }
      }
  render() {

return (
    <div>
    <p className={this.state.hide}>isbn : {this.props.boodata.isbn}</p>
    <p onClick={this.hideMeme}>title :{this.props.boodata.title}</p>
    <p className={this.state.hide} >subtitle :{this.props.boodata.subtitle}</p>
    <p className={this.state.hide}>author :{this.props.boodata.author}</p>
    <p className={this.state.hide}>published :{this.props.boodata.published}</p>
    <p className={this.state.hide}>publisher :{this.props.boodata.publisher}</p>
    <p className={this.state.hide}>pages :{this.props.boodata.pages}</p>
    <p className={this.state.hide}>description :{this.props.boodata.description}</p>
    <a className={this.state.hide} href={this.props.boodata.website}>website</a>
    <hr/>
    </div>
   );
 }
}

export default Book;
import React, { Component, PropTypes } from 'react';

export default class Search extends Component {

  static propTypes = {
    items : React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      searchString : ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchString : event.target.value
    });
  }

  render() {

    let libraries = this.props.items;
    let searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length) {
      libraries = libraries.filter(function(data){
        return data.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input type="text" onChange={this.handleChange} placeholder="Escribe algo ..." />
        <ul>

          {
            libraries.map(function(data){
              return <li key={data.id}>{data.name} <a href={data.url}>{data.url}</a></li>
            })
          }

        </ul>
      </div>
    )
  }
}

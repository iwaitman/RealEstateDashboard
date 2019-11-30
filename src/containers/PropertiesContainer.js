import React, { Component } from 'react';

class PropertiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      properties: []
    };
  }

  componentDidMount() {
    fetch(
      'https://v2-api.sheety.co/a392e23ee1f0838b8aaac4c68590415d/realEstateApi/properties'
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            properties: result.properties
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, properties } = this.state;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='container mt-3'>
          <ul className='list-group'>
            {properties.map(property => (
              <button
                type='button list-group-item-action'
                className='list-group-item list-group-item-action'
                key={property.id}
              >
                {property.property}
              </button>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default PropertiesContainer;

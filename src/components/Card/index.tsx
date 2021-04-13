// styles and icons
import { Container, UserDeath } from './styles'
import React, { useEffect, Component } from 'react'
export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const urlApi = 'https://covid-api.mmediagroup.fr/v1/cases?country=Brazil'
    fetch(urlApi)
      .then(response => response.json())
      .then(data => this.setState({ data: data.All, isLoading: false}))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }
 
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    
    return (
      <Container>
        <a href="#">
          <h2>Deaths</h2>
          <span></span>
          <div className="card">
            <UserDeath />
            <span className="value">{data['deaths']}</span>
          </div>
        </a>

        <a href="#">
          <h2>Infected</h2>
          <span></span>
          <div className="card">
            <UserDeath />
            <span className="value">{data['confirmed']}</span>
          </div>
        </a>

        <a href="#">
          <h2>Recovered</h2>
          <span></span>
          <div className="card">
            <UserDeath />
            <span className="value">{data['recovered']}</span>
          </div>
        </a>
      </Container>
    )
  }
}

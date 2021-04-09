// styles and icons
import { Container, UserDeath } from './styles'

export default function Card () {
  return (
    <Container>
      <a href="#">
        <h2>Deaths</h2>
        <span></span>
        <div className="card">
          <UserDeath />
          <span className="value">13124241532</span>
        </div>
      </a>

      <a href="#">
        <h2>Infected</h2>
        <span></span>
        <div className="card">
          <UserDeath />
          <span className="value">13124241532</span>
        </div>
      </a>

      <a href="#">
        <h2>Recovered</h2>
        <span></span>
        <div className="card">
          <UserDeath />
          <span className="value">13124241532</span>
        </div>
      </a>

      <a href="#">
        <h2>Vaccinated</h2>
        <span></span>
        <div className="card">
          <UserDeath />
          <span className="value">13124241532</span>
        </div>
      </a>
    </Container>
  )
}

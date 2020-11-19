// Local imports
import logo from '../assets/kronos-logo.png';
import '../styles/HomePage.css';

const HomePage = props => {
  return (
    <section className="home__container">
      <header className="home__header">
        <img className="home__header-logo" src={logo} width="375px" />
      </header>
      <main className="home__main">FORM</main>
      <footer className="home__footer">STEPPER</footer>
    </section>
  );
};

export default HomePage;

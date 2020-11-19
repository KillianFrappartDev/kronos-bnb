// Local imports
import logo from '../assets/kronos-logo.png';
import CustomStepper from '../components/CustomStepper';
import '../styles/HomePage.css';

const HomePage = props => {
  return (
    <section className="home__container">
      <header className="home__header">
        <img className="home__header-logo" src={logo} width="375px" />
      </header>
      <main className="home__main">FORM</main>
      <CustomStepper />
    </section>
  );
};

export default HomePage;

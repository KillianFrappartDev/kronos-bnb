// Local imports
import logo from '../assets/kronos-logo.png';
import DateInput from '../components/DateInput';
import CustomStepper from '../components/CustomStepper';
import '../styles/HomePage.css';

const HomePage = props => {
  return (
    <section className="home__container">
      <header className="home__header">
        <img className="home__header-logo" src={logo} width="375px" />
      </header>
      <DateInput />
      <CustomStepper />
    </section>
  );
};

export default HomePage;

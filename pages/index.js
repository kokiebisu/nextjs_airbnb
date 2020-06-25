// Components
import { Banner } from '../components/Banner';
import Booking from '../components/Booking';
import Benefits from '../components/Benefits';
import Reviews from '../components/Reviews';
import Booked from '../components/Booked';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Banner />
      <Booking />
      <Reviews />
      <Benefits />
      <Booked />
      <Footer />
    </>
  );
};

export default Home;

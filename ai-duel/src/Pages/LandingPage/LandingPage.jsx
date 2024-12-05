
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero';
import Agenda from '../../Components/Agenda/Agenda';
import AboutEvent from '../../Components/AboutEvent/AboutEvent';
import Sponsors from '../../Components/Sponsors/Sponsors';
import Footer from '../../Components/Footer/Footer'
import './LandingPage.css';

const LandingPage = () => {
 
   return (
     <div className="app-container">
      <Navbar />
      <div className="container">
        <main>
          <Hero />
          <Agenda />
          <AboutEvent />
          <Sponsors />
        </main>
       {/* Your main content here */}
      </div>
      <Footer />
   </div>
   );
 };
 
 
export default LandingPage;
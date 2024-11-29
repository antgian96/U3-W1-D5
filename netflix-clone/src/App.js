import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import Footer from './Components/Footer';
import FirstSectionEditProfile from './Components/EditProfile/FirstSectionEditProfile';
import SecondSectionEditProfile from "../src/Components/EditProfile/SecondSectionEditProfile"
import ThridSectionEditProfile from './Components/EditProfile/ThirdSectionEditProfile';
import FirstSectionAccount from './Components/Account/FirstSectionAccount';
import SecondSectionAccount from './Components/Account/SecondSectionAccount';
import ThirdSectionAccount from './Components/Account/ThirdSectionAccount';
import FourthSectionAccount from './Components/Account/FourthSectionAccount';
import FifthSectionAccount from './Components/Account/FifthSectionAccount';
import 'bootstrap-icons/font/bootstrap-icons.css';


import './App.css';

function App() {
  return (
    <div className="App bg-black text-light">
      <header>
       <NavBar/>
      </header>
      <main>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
      </main>
      <footer>
<Footer/>
      </footer>
    </div>
  );
}

export default App;

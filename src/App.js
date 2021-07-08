import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { GlobalStyle } from './globalStyles';
import { AppDiv } from './AppElement';

function App() {
  return (
    <AppDiv>
      <GlobalStyle />  
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </AppDiv>
  );
}

export default App;

import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ItemList from './components/item-list';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Hero />
      <About />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;

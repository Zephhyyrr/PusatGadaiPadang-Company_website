import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Item from './components/Item'
import ItemList from './components/item-list';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Hero />
      <Item />
      <ItemList />
    </div>
  );
}

export default App;

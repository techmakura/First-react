import './App.css';
import MovieCard from './components/card';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      {/* Component can take data, manupulate data & return html */}
      <Navbar />

      <MovieCard 
      name="3 Idiot" 
      description="Movie about study"
      language="hindi"
      />

      <MovieCard 
      name="purna bahadur ko Sarangi " 
      description="Movie about father"
      language="nepali"
      />

    </div>
  );
}

export default App;

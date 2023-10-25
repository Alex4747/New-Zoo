import './styles/app.styles.css';
import { Routes, Route, Link } from 'react-router-dom'
import Animal from './pages/Animal'
import NotFound from './pages/NotFound'
import Animals from './components/Animals';
import { useSelector } from 'react-redux';
import { getAnimals } from './redux/selectors';

function App() {
  // const animalsList = useSelector(getAnimals)
  return (
    <div>
        <Routes>
          <Route path="/" element={<Animals/>} />
          <Route path="/animal/:id" element={<Animal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;

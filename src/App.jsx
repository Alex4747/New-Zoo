import './styles/app.styles.css';
import { Routes, Route } from 'react-router-dom'
import Animal from './pages/Animal'
import NotFound from './pages/NotFound'
import Animals from './components/Animals';

function App() {
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

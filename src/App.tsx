import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
    </Routes>
  );
};

export default App;

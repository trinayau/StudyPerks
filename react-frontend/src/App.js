import {Routes, Route} from 'react-router-dom';
import {default as Layout} from './layouts';
import { LoginPage, SignUpPage, Homepage, StudyRoom } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/studyroom/:roomId" element={<StudyRoom />} />

          </Route>
      </Routes>


    </div>
  );
}

export default App;

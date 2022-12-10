import {Routes, Route, Navigate} from 'react-router-dom';
import {default as Layout} from './layouts';
import { LoginPage, SignUpPage, Homepage, StudyRoom } from './pages';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

function App() {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/studyroom/:roomId" element={<ProtectedRoute><StudyRoom /></ProtectedRoute>} />

          </Route>
      </Routes>


    </div>
  );
}

export default App;

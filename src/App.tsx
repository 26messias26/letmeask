
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";


import { AuthContectProvider } from './contexts/AuthContext'



function App() {



  return (
    <BrowserRouter>
      <AuthContectProvider>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/new' component={NewRoom} />
      </AuthContectProvider>
    </BrowserRouter>

  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import BookingProcess from './pages/BookingProcess/BookingProcess';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/books/process/:id">
              <BookingProcess></BookingProcess>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
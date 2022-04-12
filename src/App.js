import './App.css';
import Search from "./Search";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid box">
        <Search defaultCity="Los Angeles"/>
        <small className="footer">
          <a href="https://github.com/isoftic1/react-weather-resp.git" target="_blank" rel="noreferrer">
            Open-source code  {" "}
            </a>
          by  {" "}
          <a href="https://www.linkedin.com/in/isoftic1/" target="_blank" rel="noreferrer">
           Izeta Softic
          </a>
        </small>
      </div>
      
    </div>
  );
}

export default App;



import './App.css';
import Dictoinary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="headerName">Dictionary📙</h2>
        <main>
          <Dictoinary defaultKeyword="sunset" />
        </main>
        <footer className="app-footer">
          Coded by {""}
          <a
            href="https://www.linkedin.com/in/anna-balitska-234367242/"
            target="_blank"
            rel="noreferrer"
          >
            Anna Balitska
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

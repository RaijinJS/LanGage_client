import './App.css';
import './components/Nav.css';
import './components/MessagePanel.css';
import './components/FeedbackPanel.css';
import Nav from './components/Nav.jsx'
import FeedbackPanel from './components/FeedbackPanel.jsx'
import MessagePanel from './components/MessagePanel.jsx'

function App() {
  return (
    <div className="App">
      <nav>
      <Nav/>
      </nav>
      <main>
      <FeedbackPanel/>
      <MessagePanel/>
      </main>
    </div>
  );
}

export default App;

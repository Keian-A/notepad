import './App.css';
import NewNote from './components/NewNote';
import { Provider } from 'react-redux';
import store from './store/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewNote />
      </div>
    </Provider>
  );
}

export default App;

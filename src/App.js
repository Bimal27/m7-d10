import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Home />
    </div>
  )
}

export default App

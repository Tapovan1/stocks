import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import StockList from './pages/StockList'
import AddItem from './pages/AddItem'
import EditItem from './pages/EditItem'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stock" element={<StockList />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/edit/:id" element={<EditItem />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
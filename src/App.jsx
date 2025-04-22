import { useSelector } from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import CongTru from './components/CongTru';
import HomPage from './components/HomePage';
import ToDoList from './components/ToDoList';
import ToggleTheme from './components/ToggleTheme';
import ShoppingCart from './components/ShoppingCart';
import './App.css'

function App() {
  const count = useSelector(state => state.counter.value);
  console.log("gia tri hien tai: ", count);
  return (
    <div className='wrapper'>
      <div className='header'>
        <Sidebar/>
      </div>
      <div className='content'>
        <Routes>
          <Route path='/' element= {<HomPage/>}/>
          <Route path='/congtru' element= {<CongTru/>}/>
          <Route path='/todolist' element= {<ToDoList/>}/>
          <Route path='/toggleTheme' element= {<ToggleTheme/>}/>
          <Route path='/shoppingCart' element= {<ShoppingCart/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

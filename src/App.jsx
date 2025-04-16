import { useSelector } from 'react-redux'

import CongTru from './components/CongTru'
import './App.css'

function App() {
  const count = useSelector(state => state.counter.value);
  console.log("gia tri hien tai: ", count);
  return (
    <>
    <div>
      <CongTru/>
    </div>    
    
    </>
  )
}

export default App

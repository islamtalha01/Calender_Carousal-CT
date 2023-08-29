import './App.css'
import CalenderContainer from './containers/CalenderContainer'
import useCalendar from './hooks/useCalendar'

function App() {
  
    const{dates,setTime}=useCalendar()

  return (
    <>
    
    <CalenderContainer dates={dates}  setTime={setTime}/>
   
    
    
      
    </>
  )
}

export default App

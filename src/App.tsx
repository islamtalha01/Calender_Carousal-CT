import './App.css'
import CalenderCarousalContainer from './containers/CalenderCarousalContainer'
import useCalendar from './hooks/useCalendar'

function App() {
  
    const{dates,setTime}=useCalendar()

  return (
    <>
    
    <CalenderCarousalContainer dates={dates}  setTime={setTime}/>
   
    
    
      
    </>
  )
}

export default App

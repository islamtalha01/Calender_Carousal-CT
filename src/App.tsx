import './App.css'
import CalenderCarousalContainer from './containers/CalenderCarousalContainer'
import useCalendar from './hooks/useCalendar'

function App() {
  
    const{dates,setTime}=useCalendar()
    console.log(dates)

  return (
    <>
    
    <CalenderCarousalContainer   setTime={setTime}/>
   
    
    
      
    </>
  )
}

export default App

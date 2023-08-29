import './App.css'
import CalenderContainer from './containers/CalenderContainer'
import CalendarProvider from './hooks/useCalendar'
import { getDatesList } from "../src/utils/Date.utils";
import closedDatesArray from "../src/data/data";

function App() {
 
  const dateData= getDatesList(10,closedDatesArray)
  

  return (
    <>
    <CalendarProvider dates={dateData}>
    <CalenderContainer/>
    </CalendarProvider>
    
    
      
    </>
  )
}

export default App

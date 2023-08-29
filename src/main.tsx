import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {CalendarProvider} from './hooks/useCalendar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <CalendarProvider>
 <App />
  </CalendarProvider>
   
  // </React.StrictMode>,
)

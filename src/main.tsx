import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {CalendarProvider} from './hooks/useCalendar'
import { getDatesList } from './utils/Date.utils.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <CalendarProvider datesList={getDatesList(7,['Monday','Sunday'])}>
 <App />
  </CalendarProvider>
   
  // </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {CalendarProvider} from './hooks/useCalendar'
import { getDatesList } from './utils/Date.utils.ts'
const calendarConfig = {
  theme: {
    isDark: true,
    general: { colorPrimary: "orange" },
    custom: { colorPrimary: "blue",buttonBorderRadius: 10 },
  },

  datesList: getDatesList(7, ["Sunday"]),
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <CalendarProvider {...calendarConfig} >
 <App />
  </CalendarProvider>
   
  // </React.StrictMode>,
)

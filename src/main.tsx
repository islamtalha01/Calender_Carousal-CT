import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CalendarProvider } from "./hooks/useCalendar";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

ReactDOM.createRoot(document.getElementById("root")!).render(
 
  <CalendarProvider theme={{
    isDark: true,
    custom: { colorCardHeader: "#f96458", buttonBorderRadius: 10 },
  }}  unavailableDates={[ "Saturday","Friday"]} unavailableHours= {{ start: 11, end: 12 }} datesRange={{start:dayjs('10-09-2023', "DD-MM-YYYY"),end:dayjs('10-11-2023', "DD-MM-YYYY")}} > 
    <App />
  </CalendarProvider>

);

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CalendarProvider } from "./hooks/useCalendar";
import dayjs from "dayjs";


ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <CalendarProvider theme={{
    isDark: false,
    custom: { colorCardHeader: "#f96458", buttonBorderRadius: 10 },
  }}  unavailableDates={["Sunday", "Saturday", dayjs('2023-09-11'),"Friday"]} unavailableHours= {{ start: 11, end: 12 }} >
    <App />
  </CalendarProvider>

  // </React.StrictMode>,
);

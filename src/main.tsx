import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CalendarProvider } from "./hooks/useCalendar";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const props = {
  theme: {
    isDark: false,
    custom: {
      colorCardHeader: "#f96458",
      colorButton: "#f96458",
      colorTimePicker: "#f96458",
    },
  },
  datesRange: {
    start: dayjs("10-09-2023", "DD-MM-YYYY"),
    end: dayjs("10-11-2023", "DD-MM-YYYY"),
  },
  minDuration: {
    span: 15,
    unit: "Hrs",
  },
  maxDuration: {
    span: 25,
    unit: "Hrs",
  },
  unavailableDates: (day: Dayjs) => {
    if (day.format("dddd") === "Sunday" || day.format("dddd") === "Monday") {
      return true;
    } else {
      return false;
    }
  },
};
ReactDOM.createRoot(document.getElementById("root")!).render(
  <CalendarProvider {...props}>
    <App />
  </CalendarProvider>
);

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CalendarProvider } from "./hooks/useCalendar";
import { getDatesList } from "./utils/Date.utils.ts";

const config = {
  theme: {
    isDark: false,

    custom: { colorCardHeader: "#f96458", buttonBorderRadius: 10 },
  },

  datesList: getDatesList(9, ["Sunday", "Saturday"]),
};
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <CalendarProvider {...config}>
    <App />
  </CalendarProvider>

  // </React.StrictMode>,
);

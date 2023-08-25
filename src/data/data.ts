// Define a TypeScript interface for your data
export interface CardData {
  id: number;
  month: string;
  date: number;
  day: string;
}

// Dummy data
const dummyData: CardData[] = [
  {
    id: 1,
    month: "January",
    date: 15,
    day: "Monday",
  },
  {
    id: 2,
    month: "February",
    date: 28,
    day: "Tuesday",
  },
  {
    id: 3,
    month: "March",
    date: 10,
    day: "Wednesday",
  },
  {
    id: 4,
    month: "April",
    date: 20,
    day: "Thursday",
  },
  {
    id: 5,
    month: "May",
    date: 5,
    day: "Friday",
  },
  {
    id: 6,
    month: "June",
    date: 30,
    day: "Saturday",
  },
  {
    id: 7,
    month: "July",
    date: 25,
    day: "Sunday",
  },
];

export default dummyData;

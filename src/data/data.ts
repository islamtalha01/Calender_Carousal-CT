// Define a TypeScript interface for your data
export interface CardData {
  id: number;
  title: string;
  month: string;
  day: number;
  dayName: string;
}

// Dummy data
const dummyData: CardData[] = [
  {
    id: 1,
    title: "Card 1",
    month: "January",
    day: 15,
    dayName: "Monday",
  },
  {
    id: 2,
    title: "Card 2",
    month: "February",
    day: 28,
    dayName: "Tuesday",
  },
  {
    id: 3,
    title: "Card 3",
    month: "March",
    day: 10,
    dayName: "Wednesday",
  },
  {
    id: 1,
    title: "Card 1",
    month: "January",
    day: 15,
    dayName: "Monday",
  },
  {
    id: 2,
    title: "Card 2",
    month: "February",
    day: 28,
    dayName: "Tuesday",
  },
  {
    id: 3,
    title: "Card 3",
    month: "March",
    day: 10,
    dayName: "Wednesday",
  },
  // Add more data as needed
];

export default dummyData;

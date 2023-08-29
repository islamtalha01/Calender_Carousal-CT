import useCalendar from "../../hooks"
const CurrentDay = () => {
  const{selected}=useCalendar()
  return (
    <div>{selected.date?.format('DD/MM/YYYY')}</div>
  )
}
export default CurrentDay
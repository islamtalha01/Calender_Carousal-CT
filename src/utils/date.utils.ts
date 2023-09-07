import dayjs, { Dayjs } from "dayjs"
import { unavailableDate, DateType,DateRange } from '../common/types/calendar.types'
import isToday from "dayjs/plugin/isToday"
dayjs.extend(isToday)


function isDateClosed(date:Dayjs,ClosedDates?:Array<unavailableDate>):boolean
{
    const dayName=date.format("dddd")
    if(ClosedDates?.includes(dayName) ||ClosedDates?.some((closedDate)=>{dayjs(closedDate).isSame(date,"day")}))
    return true
   
    return false
}


const getDatesList = (Range:DateRange, closedDates?: Array<unavailableDate>):Array<DateType> => {
  const dateList: Array<DateType> = []
  let currentDate = Range.start
  console.log(currentDate)
  while(!currentDate?.isAfter(Range.end))
  {
    dateList.push({date:currentDate,closed:isDateClosed(currentDate,closedDates)})
    currentDate=currentDate.add(1,'day')

  }
 
  return dateList
}










const getFormattedDate = (date: Dayjs | null, format: string): string => {
  if (date?.isToday()) return "Today"
  return date?.format(format) || ""
}

export { getDatesList, getFormattedDate }
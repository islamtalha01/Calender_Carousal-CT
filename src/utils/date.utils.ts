import dayjs, { Dayjs } from "dayjs"
import { unavailableDate, DateType,DateRange } from '../common/types/calendar.types'
import isToday from "dayjs/plugin/isToday"
dayjs.extend(isToday)


function isDateUnavaiable(date:Dayjs,unavailableDates?:Array<unavailableDate>):boolean
{
    const dayName=date.format("dddd")
    if(unavailableDates?.includes(dayName) ||unavailableDates?.some((unavailableDates)=>{dayjs(unavailableDates).isSame(date,"day")}))
    return true
   
    return false
}

type unavailableDatesCallback = (day: Dayjs) => boolean|undefined;

const getDatesList = (Range:DateRange, unavailableDates?: Array<unavailableDate>|unavailableDatesCallback):Array<DateType> => {
  const dateList: Array<DateType> = []
  let currentDate = Range.start 
  
  while(!currentDate?.isAfter(Range.end))
  {
    if(typeof(unavailableDates)==="function")
    {
      dateList.push({date:currentDate,unavailable:unavailableDates(currentDate)})
    }
    

  else if(Array.isArray(unavailableDates)){
    dateList.push({date:currentDate,unavailable:isDateUnavaiable(currentDate,unavailableDates)})
  }
    currentDate=currentDate.add(1,'day')

  }
 
  return dateList
}

const getFormattedDate = (date: Dayjs | null, format: string): string => {
  if (date?.isToday()) return "Today"
  return date?.format(format) || ""
}

export { getDatesList, getFormattedDate }
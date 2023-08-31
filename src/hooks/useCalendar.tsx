import { useState,useContext,createContext,ReactNode} from "react";
import { getDatesList } from "../utils/Date.utils";
import { formatDuration, getavgDuration } from "../utils/Duration.utils";
import { ConfigProvider } from "antd";
import { DateType,selectedSlot } from "../common/types/calendar.types";
import { Dayjs } from "dayjs";

import closedDatesArray from "../../src/data/data";
const datesData= getDatesList(10,closedDatesArray)
type CalendarContext={
     dates:Array<DateType>,
     setDate:(date:Dayjs)=>void,
     setTime:(time:Dayjs |null)=>void,
     selected:selectedSlot,
     setDuration:(value:number)=>void,
}
type CalendarProviderprop=
{
   
    children:ReactNode,
   
}

const CalendarContext=createContext<CalendarContext | undefined>( undefined)

export function  CalendarProvider({children}:CalendarProviderprop)
{
   
   
    const [selected,setSelectedSlot]=useState<selectedSlot>({
        date:null,time:null,duration:getavgDuration(30,60)
    })
    const setDate=(date:Dayjs)=>
    {
         setSelectedSlot({...selected,date})
         console.log(selected)
    }
    const setTime=(time:Dayjs | null)=>
    {
         setSelectedSlot({...selected,time})
    }
    const setDuration=(duration:number)=>
    {
        setSelectedSlot({...selected,duration})
    }
    const ContextValues:CalendarContext={setDate,setTime,dates:datesData,selected,setDuration}
   

    return(
        <ConfigProvider>
            <CalendarContext.Provider value={ContextValues}>
            {children}
        </CalendarContext.Provider>
        </ConfigProvider>
       
    )
}
const useCalendar = () => {
    const context = useContext(CalendarContext)
    console.log(context)
 
    if (!context) {
      throw new Error("Calendarprovider must wrap the component in which useCalendar is used")
    }
    return context
  }
  
export default useCalendar
  
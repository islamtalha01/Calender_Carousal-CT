import React,{ useState,useContext,ReactNode, Children} from "react";
import { getDatesList } from "../utils/Date.utils";
import { ConfigProvider } from "antd";
import { DateType,selectedSlot } from "../common/types/calendar.types";
import { Dayjs } from "dayjs";
type CalendarContext={
     dates:Array<DateType>,
     setDate:(date:Dayjs)=>void,
     setTime:(time:Dayjs)=>void,
}
type CalendarProviderprop=
{
    dates:Array<DateType>,
    children:ReactNode,
   
}
export const CalendarContext=React.createContext<CalendarContext | null>(null)

export default function  CalendarProvider({dates,children}:CalendarProviderprop)
{
    
    const [selectedSlot,setselectedSlot]=useState<selectedSlot>({
        date:null,time:null,duration:0,
    })
    const setDate=(date:Dayjs):void=>
    {
         setselectedSlot({...selectedSlot,date})
    }
    const setTime=(time:Dayjs):void=>
    {
         setselectedSlot({...selectedSlot,time})
    }
   

    return(
        <ConfigProvider>
            <CalendarContext.Provider value={{setDate,setTime,dates}}>
            {children}
        </CalendarContext.Provider>
        </ConfigProvider>
       
    )
}
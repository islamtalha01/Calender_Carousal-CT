import { MAX_Duration,MIN_Duration } from "../common/constants/constanst"
import { DurationRange } from "../common/types/calendar.types"

export const getavgDuration=(min:number,max:number):number=>
{
   min=min? min:MIN_Duration;
   max=max? max:MAX_Duration;
   return Math.floor((min + max) / 2)
}
export const formatDuration=(value:number)=>
{
    const hours:number=Math.floor((value/60))
    const min:number=Math.floor(value%60)
    const formatedHours=hours.toString().padStart(1, "0")
    const formatedMin=min.toString().padStart(2, "0")

    return `${formatedHours}:${formatedMin}`
}
import { MAX_DURATION,MIN_DURATION } from "../common/constants/constanst"


export const getAvgDuration=(min:number,max:number):number=>
{
   min=min? min:MIN_DURATION;
   max=max? max:MAX_DURATION;
   return Math.floor((min + max) / 2)
}
export const formatDuration=(value:number)=>
{
    const hours:number=Math.floor((value/60))
    const min:number=value%60
    const formatedHours=hours.toString().padStart(1, "0")
    const formatedMin=min.toString().padStart(2, "0")

    return `${formatedHours}:${formatedMin}`
}

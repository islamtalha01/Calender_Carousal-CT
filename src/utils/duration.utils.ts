


export const getMeanDuration=(min:number,max:number):number=>
{
   
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

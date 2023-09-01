import { Dayjs } from "dayjs"

export type DateType = {
    date: Dayjs
  
    /** @default false*/
    closed?: boolean
  }

/**@description Represents a closed date. It Can Either be (string) or a date (Dayjs) */
export type ClosedDate = string | Dayjs


export type selectedSlot = {
  /** @default null */
  date: Dayjs | null
  /** @default null */
  time: Dayjs | null
//   /** @default [avg(minDuration, maxDuration).floor()] */
  duration: number
}
export type Formats = {
    /**
     * @default "DD MMMM YYYY"
     * @example "03 July 2023"
     */
    date: string
    /**
     * @default "hh:mm a"
     * @example "12:00 pm"
     */
    time: string
    /** @default "12h" */
    clock: "12h" | "24h"
  }
  
  /**@description Represents disabled time range in hours
  * @property {number} start - Start of the range (first disabled hour)
  * @property {number} end - End of the range (last disabled hour)
  */
 export type closedHours = {
   start: number
   end: number
 }

 export type DurationRange={
  min:number,
  max:number
 }

 
 
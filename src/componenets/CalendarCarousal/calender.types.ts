import  { Dayjs} from "dayjs"

export type Date = {
    date: Dayjs
  
    /**@default false*/
    closed?: boolean
  }
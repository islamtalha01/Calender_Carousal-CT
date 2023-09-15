import { AliasToken } from "antd/es/theme/internal"


export type CustomStyles = 
{
  cardGap: number
  buttonBorderRadius: number
  colorCardHeader: string
  colorCardHeaderText: string
  colorCardBodyText: string
  colorTimePicker:string,
  colorButton:string,
}
export type CalendarTheme = {
    /**@default false */
    isDark?: boolean
    general?: Partial<AliasToken>
    custom?: Partial<CustomStyles>
  }
  
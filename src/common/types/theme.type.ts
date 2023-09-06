import { AliasToken } from "antd/es/theme/internal"

/**
 * @description Represents a set of color values for various components.
 * @property {string} colorCardHeader - The color of the card header.
 *  The color of the disabled card header.
 * @property {string} colorCardHeaderText - The color of the card header text.
 * @property {string} colorCardBodyText - The color of the card body text.
 * - The color of buttons.
 *  The color of the time picker.
 */
export type Colors = {
  colorCardHeader: string
  colorCardHeaderText: string
  colorCardBodyText: string

}

/**
 * @description Represents spacing values for layout and components.
 * @property {number} cardGap - The gap between cards.
 * @property {number} buttonBorderRadius - The border radius for buttons.
 
 */
export type Spacing = {
  cardGap: number
  buttonBorderRadius: number
 
}
/**
 * @description Represents custom styles that combine color and spacing properties.
 */
export type CustomStyles = Colors & Spacing

export type CalendarTheme = {
    /**@default false */
    isDark: boolean
    general?: Partial<AliasToken>
    custom?: Partial<CustomStyles>
  }
  
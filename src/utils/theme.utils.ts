import { theme } from "antd";
import { CalendarTheme, CustomStyles } from "../common/types/theme.type";
import { AliasToken } from "antd/es/theme/internal";

export function createDateToken(
  styles: Partial<CustomStyles> | undefined,
  token: Partial<AliasToken>
): Partial<AliasToken> {
  console.log(styles);
  return {
    colorText: styles?.colorCardHeaderText || token.colorText,
    colorPrimary: styles?.colorCardHeader || token.colorPrimary,
    colorTextSecondary: styles?.colorCardBodyText || token.colorTextSecondary,
  };
}

export function createTimeToken(
  token: Partial<AliasToken>,
  styles?: Partial<CustomStyles>
): Partial<AliasToken> {
  return {
    colorPrimary: styles?.colorTimePicker || token.colorPrimary,
    colorLink: styles?.colorTimePicker || token.colorPrimary,
  };
}

/**
 * Generates a token object for customizing duration-related components.
 * @param {Partial<AliasToken>} token - The base token object.
 * @param {Partial<CustomStyles> | undefined} styles - Custom styles to override token values.
 * @returns {Partial<AliasToken>} The generated token object.
 */
export function createDurationToken(
  token: Partial<AliasToken>,
  styles?: Partial<CustomStyles>
): Partial<AliasToken> {
  return {
    colorPrimary: styles?.colorButton || token.colorPrimary,
    borderRadiusSM: styles?.buttonBorderRadius || token.borderRadiusSM,
  };
}

/**
 * Retrieves the appropriate theme algorithm based on the calendar theme (dark or light).
 * If no calendar theme is provided, the default algorithm is used.
 * @param {CalendarTheme | undefined} calendarTheme - The calendar theme object.
 * @returns {import("antd").CalendarThemeAlgorithm} The selected theme algorithm.
 */
export function createThemeAlgorithm(calendarTheme?: CalendarTheme) {
  return calendarTheme?.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm;
}

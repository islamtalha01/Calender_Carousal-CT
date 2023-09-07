import { theme } from "antd";
import { CalendarTheme, CustomStyles } from "../common/types/theme.type";
import { AliasToken } from "antd/es/theme/internal";

export function createDateToken(
  token: Partial<AliasToken>,
  styles: Partial<CustomStyles> | undefined,
 
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
  styles?: Partial<CustomStyles> | undefined,
): Partial<AliasToken> {
  return {
    colorPrimary: styles?.colorTimePicker || token.colorPrimary,
    colorLink: styles?.colorTimePicker || token.colorPrimary,
  };
}


export function createDurationToken(
  token: Partial<AliasToken>,
  styles?: Partial<CustomStyles>
): Partial<AliasToken> {
  return {
    colorPrimary: styles?.colorButton || token.colorPrimary,
    borderRadiusSM: styles?.buttonBorderRadius || token.borderRadiusSM,
  };
}


export function createThemeAlgorithm(Theme?: CalendarTheme) {
  return Theme?.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm;
}

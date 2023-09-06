import { theme } from "antd";
import { CalendarTheme,CustomStyles } from "../common/types/theme.type";
import { AliasToken } from "antd/es/theme/internal";


export function createDateToken(styles:Partial<CustomStyles> | undefined,token:Partial<AliasToken>):Partial<AliasToken>{
    
    return{
        colorText:styles?.colorCardHeaderText || token.colorText,
        colorPrimary:styles?.colorCardHeader || token.colorPrimary,
        colorTextSecondary:styles?.colorCardBodyText,
       
    }
    

}
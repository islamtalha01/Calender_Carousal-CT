import { theme } from "antd";

function inLineStyles() {
  const { useToken } = theme;
  const { token } = useToken();
  const headStyleclosed: React.CSSProperties = {
    backgroundColor: token.colorBgContainerDisabled,

    height: "25px",

    color: token.colorText,
    fontSize: token.fontSizeLG,
    fontWeight: 500,
  };
  const headStyleopen: React.CSSProperties = {
    backgroundColor: token.colorPrimary,

    height: "25px",

    color: token.colorText,
    fontSize: token.fontSizeLG,
    fontWeight: 500,
  };
  const bodyStyle: React.CSSProperties = {
    color: token.colorTextSecondary,
  };
  return { headStyleopen, bodyStyle, headStyleclosed };
}

export default inLineStyles;

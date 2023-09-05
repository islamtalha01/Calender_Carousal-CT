import { theme } from 'antd';

function inLineStyles()
{
  const{useToken}=theme
  const {token}=useToken()
  const headStyleclosed:React.CSSProperties = {
    backgroundColor: token.colorBgContainerDisabled,
    // color: token.colorText,
    // fontSize: token.fontSizeLG,
    // fontWeight: 500,
    height: '25px',
    // backgroundColor: props.closed
    // ? token.colorBgContainerDisabled
    // : token.colorPrimary,
  color: token.colorText,
  fontSize: token.fontSizeLG,
  fontWeight: 500,
  };
  const headStyleopen:React.CSSProperties = {
    backgroundColor: '#f96458',
    // color: token.colorText,
    // fontSize: token.fontSizeLG,
    // fontWeight: 500,
    height: '25px',
    
    // : token.colorPrimary,
  color: token.colorText,
  fontSize: token.fontSizeLG,
  fontWeight: 500,
  };
  const bodyStyle: React.CSSProperties = {
    color: token.colorTextSecondary,
  };
  return{headStyleopen,bodyStyle,headStyleclosed}
}


export default inLineStyles;

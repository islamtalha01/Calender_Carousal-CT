import { theme } from 'antd';

function inLineStyles()
{
  const{useToken}=theme
  const {token}=useToken()
  const headStyle:React.CSSProperties = {
    backgroundColor: '#f96458',
    color: token.colorText,
    fontSize: token.fontSizeLG,
    fontWeight: 500,
    height: '25px',
  };

  const bodyStyle: React.CSSProperties = {
    color: token.colorTextSecondary,
  };
  return{headStyle,bodyStyle}
}


export default inLineStyles;

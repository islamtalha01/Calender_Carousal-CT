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

  
  return{headStyle}
}


export default inLineStyles;

// import { createStyles } from 'antd-style';

// const inLineStyles = createStyles(({ token, css }) => ({
//   // 支持 css object 的写法
//   headStyle: {

//   color: token.colorText,
//   fontSize: token.fontSizeLG,
//   fontWeight: '500',
//   height: '25',
//   },
// })) as any
// export default inLineStyles
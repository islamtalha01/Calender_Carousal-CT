// import { theme } from 'antd';

// const { useToken } = theme;

// const { token } = useToken();

// const headStyle = {
//   backgroundColor: '#f96458',
//   color: token.colorText,
//   fontSize: token.fontSizeLG,
//   fontWeight: 500,
//   height: '25px',
// };

// export default headStyle;

import { createStyles } from 'antd-style';

const inLineStyles = createStyles(({ token, css }) => ({
  // 支持 css object 的写法
  headStyle: {

  color: token.colorText,
  fontSize: token.fontSizeLG,
  fontWeight: 500,
  height: '25px',
  },
})) as any
export default inLineStyles
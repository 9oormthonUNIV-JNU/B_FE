import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    // font-weigth: 400
    font-family: 'Pretandard-Medium';
    src: url('/fonts/Pretandard-Medium.woff2') format('woff2');
    font-style: normal;
  }

  @font-face {
    // font-weight: 500
    font-family: 'Pretandard-Regular';
    src: url('/fonts/Pretandard-Regular.woff2') format('woff2');
    font-style: normal;
  }

  @font-face {
    // font-weight: 600
    font-family: 'Pretandard-SemiBold';
    src: url('/fonts/Pretandard-Medium.woff2') format('woff2');
    font-style: normal;
  }

  @font-face {
    // font-weight: 700
    font-family: 'Pretandard-Bold';
    src: url('/fonts/Pretandard-Bold.woff2') format('woff2');
    font-style: normal;
  }
`;

export default GlobalStyles;

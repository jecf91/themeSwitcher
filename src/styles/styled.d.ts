import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title:string;
  
    colors: {
      primary:string;
      secundary:string;
      switch: string;
  
      background:string;
      text:string;
    },
  
    fonts: {}
  }
}
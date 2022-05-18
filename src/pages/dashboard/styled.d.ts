// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      textOnBackground: string;
      navigation: string;
      navigationText: string;
      logoBackground: string;
      button: string;
      gray: string;
      darkGray: string;
      cardText: string;
      logo: string;
      primary: string;
      card: string;
      textOnPrimary: string;
      secondary: string;
      accent: string;
    };
  }
}

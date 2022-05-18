import { createGlobalStyle } from "styled-components";
import { FONTS } from "./constants";

const GlobalStyle = createGlobalStyle`

:root {
  --reach-dialog: 1;
  --background-color: ${(props) => props.theme.colors.background};
  --text-on-background-color: ${(props) => props.theme.colors.textOnBackground};
  --gray-color: ${(props) => props.theme.colors.gray};
  --dark-gray-color: ${(props) => props.theme.colors.darkGray};
  --navigation-color: ${(props) => props.theme.colors.navigation};
  --navigation-text-color: ${(props) => props.theme.colors.navigationText};
  --primary-color: ${(props) => props.theme.colors.primary};
  --logo-color: ${(props) => props.theme.colors.logo};
  --logo-background-color: ${(props) => props.theme.colors.logoBackground};
  --text-on-primary-color: ${(props) => props.theme.colors.textOnPrimary};
  --secondary-color: ${(props) => props.theme.colors.secondary};
  --accent-color: ${(props) => props.theme.colors.accent};
  --font-serif: ${FONTS.serif};
  --font-sans-serif: ${FONTS.sansSerif};
  --card-color: ${(props) => props.theme.colors.card};
  --card-text-color: ${(props) => props.theme.colors.cardText};
  --button-color: ${(props) => props.theme.colors.button};
}


#root {
    height: 100%;
    font-family: var(--font-sans-serif);
}



/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
  
`;

export default GlobalStyle;

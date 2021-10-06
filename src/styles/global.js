import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 19px;

  --font-size: 100%;
  --color-background-dark: #39383c;
  --text-color: #6a6a6b;

  font-family: Roboto;

  @media (min-width: 1920px) {
    :root {
      /* font-size: 62.5%; */
    }
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media screen and (max-width: 1440px) {
    font-size: calc(0.9 * var(--font-size));
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media screen and (max-width: 1280px) {
    font-size: calc(0.8 * var(--font-size));
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media screen and (max-width: 1024px) {
    font-size: calc(0.7 * var(--font-size));
  }
}

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing:border-box;
}

html,
body,
#root {
  height: 100vh;
  width: 100vw;
}

body{
  -webkit-font-smoothing: antialiased;
  background: var(--color-background-dark);
  color: #e1e1e6;
  font: 400 16px Roboto, sans-serif;
}

#root {
display: flex;
align-items: center;
justify-content: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: var(--text-color);
  text-decoration: none;
}

input, button {
  font-size: 16px;
  font-family: Roboto, sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-family: Poppins;
  font-weight: 500;
}

button{
  cursor: pointer;
}

body,
input,
button,
textarea {
  font: 500 1.6rem Roboto;
  color: var(--text-color);
}


`;
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --primary: silver;
        --secondary: #2f2f2f;

        @media (prefers-color-scheme: dark) {
          --primary: #2f2f2f;
          --secondary: silver;
        }
      }

      body {
        margin: 0;
        height: 100vh;
        background: var(--primary);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
  />
);

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const bp = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1280,
};

export const GlobalStyle = createGlobalStyle`

 :root {
    /* Indigo */
    --indigo-50:  #f2f2f8;
    --indigo-100: #d9d9e5;
    --indigo-200: #b0b0cc;
    --indigo-300: #8686b3;
    --indigo-400: #5d5d99;
    --indigo-500: #3c3c73;
    --indigo-600: #2d2d5c;
    --indigo-700: #24244a;
    --indigo-800: #1c1c3d;
    --indigo-900: #19183b;

    /* Slate */
    --slate-50:  #f5f7f8;
    --slate-100: #e0e5e8;
    --slate-200: #c2cbd0;
    --slate-300: #a4b1b8;
    --slate-400: #8697a0;
    --slate-500: #708993;
    --slate-600: #5c6e77;
    --slate-700: #4a585f;
    --slate-800: #394349;
    --slate-900: #2b3236;
    

    /* Grey */
   --grey-0: #fff;
  --grey-50: #f9fafb;
  --grey-100: #f3f4f6;
  --grey-200: #e5e7eb;
  --grey-300: #d1d5db;
  --grey-400: #9ca3af;
  --grey-500: #6b7280;
  --grey-600: #4b5563;
  --grey-700: #374151;
  --grey-800: #1f2937;
  --grey-900: #111827;
  --grey-0-rgb: 255, 255, 255;
  
  --grey-900-rgb: 11, 11, 11;

    /* Mist */
    --mist-50:  #fafdff;
    --mist-100: #f0f9f8;
    --mist-200: #d9efeb;
    --mist-300: #c2e5df;
    --mist-400: #aadbd2;
    --mist-500: #92d1c6;
    --mist-600: #76b2a7;
    --mist-700: #5a8b83;
    --mist-800: #406560;
    --mist-900: #2a4542;

    /* Error */
   --red-100: #ffb4b4;


    /* Gradients */

  --g-multi-dark:
    radial-gradient(160% 120% at 10% 0%, var(--indigo-900) 0%, var(--indigo-800) 35%, transparent 70%),
    radial-gradient(140% 120% at 100% 20%, var(--indigo-700) 0%, transparent 65%),
    linear-gradient(145deg, var(--indigo-900) 0%, var(--indigo-700) 40%, var(--indigo-600) 70%, var(--indigo-500) 100%);
  
  --container-max: 1200px;
  --container-pad: clamp(16px, 5vw, 48px);

  }

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: "Zalando Sans SemiExpanded", sans-serif;
    background: var(--indigo-900);
    color: var(--indigo-50);      
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }


  a {
    color: inherit;
    text-decoration: none;
  }


  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }


  input, button, textarea, select {
    font: inherit;
  }


  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
}
  h2 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
}
 
  body {
    overflow-x: hidden;
  }
  
`;

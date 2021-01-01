import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display", Georgia, "Times New Roman", serif/*rtl:Amiri, Georgia, "Times New Roman", serif*/;
  }

  .card-img-right {
    height: 100%;
    border-radius: 0 3px 3px 0;
  }

  .flex-auto {
    flex: 0 0 auto;
  }

  .h-250 { height: 250px; }
  @media (min-width: 768px) {
    .h-md-250 { height: 250px; }
  }

  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
`;

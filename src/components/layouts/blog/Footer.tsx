import React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <>
      <S_Footer className="blog-footer">
        <p>
          Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <S_Bottom>
          <a href="#">Back to top</a>
        </S_Bottom>
      </S_Footer>
    </>
  );
};

// ------------ Style settings ------------
const S_Footer = styled.footer`
  padding: 2.5rem 0;
  color: #727272;
  text-align: center;
  background-color: #f9f9f9;
  border-top: 0.05rem solid #e5e5e5;
`;

const S_Bottom = styled.p`
  margin-bottom: 0;
`;

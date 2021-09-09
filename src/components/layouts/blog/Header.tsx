import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
  return (
    <>
      <S_Header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="link-secondary" href="#">
              Subscribe
            </a>
          </div>
          <div className="col-4 text-center">
            <S_HeaderLogo className="blog-header-logo text-dark" href="#">
              Large
            </S_HeaderLogo>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="link-secondary" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </a>
          </div>
        </div>
      </S_Header>
    </>
  );
};

// ------------ Style settings ------------
const S_Header = styled.header`
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
`;

const S_HeaderLogo = styled.a`
  font-family: "Playfair Display", Georgia, "Times New Roman", serif /*rtl:Amiri, Georgia, "Times New Roman", serif*/;
  font-size: 2.25rem;

  &:hover {
    text-decoration: none;
  }
`;

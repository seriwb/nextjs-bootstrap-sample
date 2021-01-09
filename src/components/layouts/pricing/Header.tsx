import React from 'react';
import styled from "styled-components";

export const Header: React.FC = () => {
  return (
    <>
      <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <p className="h5 my-0 me-md-auto fw-normal">Company name</p>
        <nav className="my-2 my-md-0 me-md-3">
          <S_NavMenu className="p-2 text-dark" href="#">Features</S_NavMenu>
          <S_NavMenu className="p-2 text-dark" href="#">Enterprise</S_NavMenu>
          <S_NavMenu className="p-2 text-dark" href="#">Support</S_NavMenu>
          <S_NavMenu className="p-2 text-dark" href="#">Pricing</S_NavMenu>
        </nav>
        <a className="btn btn-outline-primary" href="#">Sign up</a>
      </header>
    </>
  );
};

// ------------ Style settings ------------
const S_NavMenu = styled.a`
  margin-left: 4px;
`;

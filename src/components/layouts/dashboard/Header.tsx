import React from "react";
import styled from "styled-components";
interface Props {
  isNavCollapsed: boolean;
  handleNavCollapse: (res: React.BaseSyntheticEvent) => void;
}

export const Header: React.FC<Props> = ({ isNavCollapsed, handleNavCollapse }) => {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <S_Brand className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Company name
        </S_Brand>
        <S_SidebarButton
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </S_SidebarButton>
        <S_Search
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

// ------------ Style settings ------------
const S_Brand = styled.a`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
`;

const S_SidebarButton = styled.button`
  top: 0.25rem;
  right: 1rem;
`;

const S_Search = styled.input`
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;

  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
  }
`;

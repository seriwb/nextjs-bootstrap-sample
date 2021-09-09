import React from "react";
import styled from "styled-components";
import { BarChart2, File, FileText, Home, Layers, PlusCircle, ShoppingCart, Users } from "react-feather";

type Props = {
  isNavCollapsed: boolean;
};

export const Sidebar: React.FC<Props> = ({ isNavCollapsed }) => {
  // TODO: 開いている間はクラスにcollapsingを、開き終わったらshowを付与する
  return (
    <S_Sidebar
      id="sidebarMenu"
      className={`${isNavCollapsed ? "collapse" : ""} col-md-3 col-lg-2 d-md-block bg-light sidebar`}
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <S_ActiveMenu className="nav-link active" aria-current="page" href="#">
              <Home className="feather" />
              Dashboard
            </S_ActiveMenu>
          </li>
          <li className="nav-item">
            <S_Menu className="nav-link" href="#">
              <File className="feather" />
              Orders
            </S_Menu>
          </li>
          <li className="nav-item">
            <S_Menu className="nav-link" href="#">
              <ShoppingCart className="feather" />
              Products
            </S_Menu>
          </li>
          <li className="nav-item">
            <S_Menu className="nav-link" href="#">
              <Users className="feather" />
              Customers
            </S_Menu>
          </li>
          <li className="nav-item">
            <S_Menu className="nav-link" href="#">
              <BarChart2 className="feather" />
              Reports
            </S_Menu>
          </li>
          <li className="nav-item">
            <S_Menu className="nav-link" href="#">
              <Layers className="feather" />
              Integrations
            </S_Menu>
          </li>
        </ul>

        <S_Heading className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <PlusCircle className="feather" />
          </a>
        </S_Heading>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <S_Menu className="nav-link" href="#">
              <FileText className="feather" />
              Current month
            </S_Menu>
          </li>
          <li className="nav-item">
            <S_Menu className="nav-link" href="#">
              <FileText className="feather" />
              Last quarter
            </S_Menu>
          </li>
          <li className="nav-item">
            <S_Menu className="nav-link" href="#">
              <FileText className="feather" />
              Social engagement
            </S_Menu>
          </li>
          <li className="nav-item">
            <S_Menu className="nav-link" href="#">
              <FileText className="feather" />
              Year-end sale
            </S_Menu>
          </li>
        </ul>
      </div>
    </S_Sidebar>
  );
};

// ------------ Style settings ------------
const S_Sidebar = styled.nav`
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 767.98px) {
    top: 5rem;
  }
`;

const S_Menu = styled.a`
  font-weight: 500;
  color: #333;
`;

const S_ActiveMenu = styled.a`
  font-weight: 500;
  color: #007bff;
`;

const S_Heading = styled.h6`
  font-size: 0.75rem;
  text-transform: uppercase;
`;

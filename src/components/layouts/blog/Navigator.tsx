import React from 'react';
import styled from 'styled-components';

export const Navigator: React.FC = () => {
  return (
    <S_NavMenu className="nav-scroller py-1 mb-2">
      <S_Nav className="nav d-flex justify-content-between">
        <a className="p-2 link-secondary" href="#">World</a>
        <a className="p-2 link-secondary" href="#">U.S.</a>
        <a className="p-2 link-secondary" href="#">Technology</a>
        <a className="p-2 link-secondary" href="#">Design</a>
        <a className="p-2 link-secondary" href="#">Culture</a>
        <a className="p-2 link-secondary" href="#">Business</a>
        <a className="p-2 link-secondary" href="#">Politics</a>
        <a className="p-2 link-secondary" href="#">Opinion</a>
        <a className="p-2 link-secondary" href="#">Science</a>
        <a className="p-2 link-secondary" href="#">Health</a>
        <a className="p-2 link-secondary" href="#">Style</a>
        <a className="p-2 link-secondary" href="#">Travel</a>
      </S_Nav>
    </S_NavMenu>
  );
};

// ------------ Style settings ------------
const S_NavMenu = styled.div`
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
`;

const S_Nav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`;

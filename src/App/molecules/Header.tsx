import React from "react";
import styled from "styled-components";
import hamplogo from "../assets/hamplogo.png";

export const Header = () => {
  const StyledHeader = styled.header`
    display: flex;
    height: 100px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(214, 212, 236, 1) 0%,
      rgba(115, 115, 255, 1) 35%,
      rgba(0, 78, 255, 1) 100%
    );
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
  `;
  const StyledHeaderTabs = styled.div`
    display: flex;
    gap: 1rem;
    padding-right: 1rem;
  `;

  const StyledHeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `;

  const StyeldTransitionTab = styled.div`
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  `;

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <img
          src={hamplogo}
          alt="Hamp Athletics Logo"
          style={{ height: "100px" }}
        />
        <div>HampAthletics</div>
      </StyledHeaderLogo>
      <StyledHeaderTabs>
        <StyeldTransitionTab>Workout Plans</StyeldTransitionTab>
        <StyeldTransitionTab>Contact Info</StyeldTransitionTab>
        <StyeldTransitionTab>Schedule Consulation</StyeldTransitionTab>
      </StyledHeaderTabs>
    </StyledHeader>
  );
};

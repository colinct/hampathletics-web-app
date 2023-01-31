import React from "react";
import styled from "styled-components";

export const Header = () => {
  const StyledHeader = styled.header`
    display: flex;
    height: 100px;
    width: 100%;
    background-color: red;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
  `;
  const StyledHeaderTabs = styled.div`
    display: flex;  
    gap: 1rem;
    padding-right: 1rem;
    `;

  return (
    <StyledHeader>
      <div>HampAthletics</div>
      <StyledHeaderTabs>
        <div>Workout Plans</div>
        <div>Contact Info</div>
        <div>Schedule Consulation</div>
      </StyledHeaderTabs>
    </StyledHeader>
  );
};

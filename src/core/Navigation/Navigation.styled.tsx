import Link from "next/link";
import styled, { keyframes, css } from "styled-components";

// Animations
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const NavContainer = styled.nav<{ $isAtTop: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 100;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};

  svg {
    path {
      transition: all 0.2s ease-in-out;
    }
  }

  ${({ $isAtTop }) =>
    !$isAtTop &&
    css`
      height: 50px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.midnight};
      background-color: white;
    `}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: 105px;
    padding: 0 40px;

    ${({ $isAtTop }) =>
      !$isAtTop &&
      css`
        height: 65px;
      `}
  }
`;

const DesktopNav = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    width: 100%;
    gap: 8px;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  padding: 16px 10px;
  margin-left: -8px;

  &:hover,
  &:focus {
    * {
      background-color: ${({ theme }) => theme.colors.oceanBlue};

      &::before,
      &::after {
        background-color: ${({ theme }) => theme.colors.oceanBlue};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
  }
`;

const Hamburger = styled.div<{ $isAtTop: boolean }>`
  position: relative;
  width: 14px;
  cursor: pointer;
  background-color: ${({ theme, $isAtTop }) =>
    theme.colors[$isAtTop ? "white" : "midnight"]};
  transition: background-color 0.2s ease-in-out;
  height: 1px;

  &::before,
  &::after,
  div {
    content: "";
    position: absolute;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${({ theme, $isAtTop }) =>
      theme.colors[$isAtTop ? "white" : "midnight"]};
    transition: all 0.2s ease-in-out;
  }

  &::before {
    top: -4px;
  }

  &::after {
    bottom: -4px;
  }
`;

const MobileMenuBackdrop = styled.div<{
  $isOpen: boolean;
  $isClosing: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  inset: 0;
  z-index: 101;
  background: ${({ $isOpen }) => $isOpen && "#313b48a8"};
  animation: ${(props) => {
    if (props.$isClosing)
      return css`
        ${fadeOut} 0.3s ease-out forwards
      `;
    if (props.$isOpen)
      return css`
        ${fadeIn} 0.3s ease-out forwards
      `;
    return "none";
  }};
`;

const MobileMenuPanel = styled.div<{ $isOpen: boolean; $isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  inset: 0;
  height: 100%;
  width: 700px;
  max-width: 100vw;
  background: white;
  transform: translateX(-100%);
  z-index: 102;
  animation: ${(props) => {
    if (props.$isClosing)
      return css`
        ${slideOutToLeft} 0.3s ease-out forwards
      `;
    if (props.$isOpen)
      return css`
        ${slideInFromLeft} 0.3s ease-out forwards
      `;
    return "none";
  }};
`;

const MobileMenuHeader = styled.div<{ $isAtTop: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  transition: all 0.2s ease-in-out;

  ${({ $isAtTop }) =>
    !$isAtTop &&
    css`
      height: 50px;
    `}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: 105px;
    padding: 0 40px;

    ${({ $isAtTop }) =>
      !$isAtTop &&
      css`
        height: 65px;
      `}
  }
`;

const MobileMenuCloseButton = styled.button`
  border: none;
  background: none;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-left: -10px;
  margin-top: 2px;
`;

const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 80px 20px;
`;

const MobileMenuLink = styled(Link)`
  font-size: 48px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  color: ${({ theme }) => theme.colors.midnight};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.oceanBlue};
  }
`;

export {
  NavContainer,
  DesktopNav,
  MobileMenuButton,
  Hamburger,
  MobileMenuBackdrop,
  MobileMenuPanel,
  MobileMenuHeader,
  MobileMenuCloseButton,
  MobileMenuItems,
  MobileMenuLink,
};

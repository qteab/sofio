"use client";

import { useState, useEffect } from "react";
import * as S from "./Navigation.styled";
import { Absolute, Link } from "@/styles/components";
import { Flex } from "@/styles/global";

const navigationItems = [
  { name: "Science", href: "/science" },
  { name: "Team", href: "/team" },
  { name: "FAQ", href: "/faq" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // State to track if user is at the top of the page

  const handleOpen = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Listen for scroll events to determine if user is at the top of the page
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <S.NavContainer $isAtTop={isAtTop}>
        {/* Desktop Navigation Links - Left Side */}
        <S.DesktopNav>
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              label={item.name}
              color={isAtTop ? "white" : "midnight"}
            />
          ))}
        </S.DesktopNav>
        {/* Logo */}
        <Absolute left="50%" transform="translate(-50%)">
          <Link href="/">
            <Flex $align="center" $justify="center">
              <svg
                width="85"
                height="22"
                viewBox="0 0 85 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M75.2077 0.971912C69.7699 0.971912 65.3917 5.4555 65.3917 11C65.3917 16.5445 69.7699 21.0281 75.2077 21.0281C80.6455 21.0281 85 16.5203 85 11C85 5.47971 80.6218 0.971912 75.2077 0.971912ZM75.2077 16.8334C72.0299 16.8334 69.5114 14.2301 69.5114 11C69.5114 7.76993 72.0299 5.1424 75.2077 5.1424C78.3854 5.1424 80.9039 7.74572 80.9039 11C80.9039 14.2543 78.3618 16.8334 75.2077 16.8334ZM28.3883 0.971912C22.9978 0.971912 18.596 5.4555 18.596 11C18.596 16.5445 22.9978 21.0281 28.3883 21.0281C33.7788 21.0281 38.1807 16.5203 38.1807 11C38.1807 5.47971 33.8025 0.971912 28.3883 0.971912ZM28.3883 16.8334C25.2342 16.8334 22.6921 14.2301 22.6921 11C22.6921 7.76993 25.2342 5.1424 28.3883 5.1424C31.5425 5.1424 34.0846 7.74572 34.0846 11C34.0846 14.2543 31.5425 16.8334 28.3883 16.8334ZM58.7777 1.50237V20.4976H62.8501V1.50237H58.7777ZM40.7233 1.50237V11V20.4976H44.8425V13.0971H55.8116V8.92658H44.8425V5.69651H56.0942V1.50237H40.7233ZM8.80365 16.8334C11.5575 16.8334 13.2291 16.2308 13.2291 14.9531C13.2291 13.5549 11.9578 13.2897 8.33294 13.0008C3.24817 12.615 0.329381 10.7832 0.329381 6.97424C0.329381 2.97269 4.09609 0.971912 8.19163 0.971912C11.1341 0.971912 13.8648 1.50237 16.7126 2.85218L15.2059 6.92581C12.4521 5.55179 10.3802 5.14184 8.14433 5.14184C5.7199 5.14184 4.49585 5.64808 4.49585 6.78109C4.49585 8.17932 5.9316 8.51663 9.79234 8.83029C14.1238 9.19182 17.4423 10.4695 17.4423 14.7363C17.4423 19.0031 13.3231 21.0281 8.5683 21.0281C5.62587 21.0281 2.8484 20.4976 0 19.1478L1.50668 15.0742C4.23741 16.424 6.28518 16.834 8.80365 16.834V16.8334Z"
                  fill={isAtTop ? "white" : "#313B48"}
                />
              </svg>
            </Flex>
          </Link>
        </Absolute>

        {/* Mobile menu button */}
        <S.MobileMenuButton onClick={handleOpen}>
          <S.Hamburger $isAtTop={isAtTop} />
        </S.MobileMenuButton>
      </S.NavContainer>

      {isOpen && (
        <S.MobileMenuBackdrop
          $isOpen={isOpen}
          $isClosing={isClosing}
          onClick={handleClose}
        />
      )}

      {/* Mobile Menu Panel */}
      <S.MobileMenuPanel $isOpen={isOpen} $isClosing={isClosing}>
        <S.MobileMenuHeader $isAtTop={isAtTop}>
          {/* Logo */}
          <Absolute left="50%" transform="translate(-50%, 2px)">
            <Link href="/">
              <Flex $align="center" $justify="center">
                <svg
                  width="85"
                  height="22"
                  viewBox="0 0 85 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M75.2077 0.971912C69.7699 0.971912 65.3917 5.4555 65.3917 11C65.3917 16.5445 69.7699 21.0281 75.2077 21.0281C80.6455 21.0281 85 16.5203 85 11C85 5.47971 80.6218 0.971912 75.2077 0.971912ZM75.2077 16.8334C72.0299 16.8334 69.5114 14.2301 69.5114 11C69.5114 7.76993 72.0299 5.1424 75.2077 5.1424C78.3854 5.1424 80.9039 7.74572 80.9039 11C80.9039 14.2543 78.3618 16.8334 75.2077 16.8334ZM28.3883 0.971912C22.9978 0.971912 18.596 5.4555 18.596 11C18.596 16.5445 22.9978 21.0281 28.3883 21.0281C33.7788 21.0281 38.1807 16.5203 38.1807 11C38.1807 5.47971 33.8025 0.971912 28.3883 0.971912ZM28.3883 16.8334C25.2342 16.8334 22.6921 14.2301 22.6921 11C22.6921 7.76993 25.2342 5.1424 28.3883 5.1424C31.5425 5.1424 34.0846 7.74572 34.0846 11C34.0846 14.2543 31.5425 16.8334 28.3883 16.8334ZM58.7777 1.50237V20.4976H62.8501V1.50237H58.7777ZM40.7233 1.50237V11V20.4976H44.8425V13.0971H55.8116V8.92658H44.8425V5.69651H56.0942V1.50237H40.7233ZM8.80365 16.8334C11.5575 16.8334 13.2291 16.2308 13.2291 14.9531C13.2291 13.5549 11.9578 13.2897 8.33294 13.0008C3.24817 12.615 0.329381 10.7832 0.329381 6.97424C0.329381 2.97269 4.09609 0.971912 8.19163 0.971912C11.1341 0.971912 13.8648 1.50237 16.7126 2.85218L15.2059 6.92581C12.4521 5.55179 10.3802 5.14184 8.14433 5.14184C5.7199 5.14184 4.49585 5.64808 4.49585 6.78109C4.49585 8.17932 5.9316 8.51663 9.79234 8.83029C14.1238 9.19182 17.4423 10.4695 17.4423 14.7363C17.4423 19.0031 13.3231 21.0281 8.5683 21.0281C5.62587 21.0281 2.8484 20.4976 0 19.1478L1.50668 15.0742C4.23741 16.424 6.28518 16.834 8.80365 16.834V16.8334Z"
                    fill="#313B48"
                  />
                </svg>
              </Flex>
            </Link>
          </Absolute>

          <S.MobileMenuCloseButton onClick={handleClose}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.707031"
                y="7.62939e-06"
                width="15"
                height="1"
                transform="rotate(45 0.707031 7.62939e-06)"
                fill="#0E0F0F"
              />
              <rect
                x="11.3137"
                y="0.707108"
                width="15"
                height="0.999999"
                transform="rotate(135 11.3137 0.707108)"
                fill="#0E0F0F"
              />
            </svg>
          </S.MobileMenuCloseButton>
        </S.MobileMenuHeader>

        <S.MobileMenuItems>
          {navigationItems.map((item, index) => (
            <S.MobileMenuLink
              key={index}
              href={item.href}
              onClick={handleClose}
            >
              {item.name}
            </S.MobileMenuLink>
          ))}
        </S.MobileMenuItems>
      </S.MobileMenuPanel>
    </>
  );
};
export default Navigation;

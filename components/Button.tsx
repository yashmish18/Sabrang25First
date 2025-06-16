import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
  className?: string; // <-- Add className prop
}

const Button: React.FC<ButtonProps> = ({ text, href, className }) => {
  return (
    <StyledWrapper className={className}>
      <Link href={href} passHref>
        <button className="button">
          <div className="blob1" />
          <div className="blob2" />
          <div className="inner">{text}</div>
        </button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: 1.1rem; /* reduced from 1.4rem */
    border-radius: 16px;
    border: none;
    padding: 2px;
    background: radial-gradient(circle 80px at 80% -10%, #fff4cc, #181b1b);
    position: relative;
    min-width: unset;
    min-height: unset;
  }

  .button::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffd70055;
    z-index: -1;
  }

  .blob1 {
    position: absolute;
    width: 50px; /* reduced from 70px */
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 40px at 0% 100%, /* reduced from 60px */
      #ffd700,
      #b8860b80,
      transparent
    );
    box-shadow: -10px 10px 30px #ffd7002d;
  }

  .inner {
    padding: 8px 20px; /* reduced from 14px 25px */
    border-radius: 14px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #f5deb3, #0f1111);
    font-size: 1rem; /* further reduce text size */
  }

  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 14px;
    background: radial-gradient(
      circle 40px at 0% 100%, /* reduced from 60px */
      #ffd7001a,
      #b8860b11,
      transparent
    );
    position: absolute;
  }
`;

export default Button;
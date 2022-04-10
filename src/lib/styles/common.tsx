import { css } from "styled-components";

// * Flex
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const flexColStart = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const flexEvenly = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const flexStart = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// * Button
export const Button = css`
  outline: none;
  border: none;
  background: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: var(--font-sub-2);
  border-radius: 0.5rem;
`;

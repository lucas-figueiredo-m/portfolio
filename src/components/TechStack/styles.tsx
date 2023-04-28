import styled from "styled-components";
import { IoPhonePortraitOutline, IoServer } from "react-icons/io5";

export const TechStackContainer = styled.div`
  width: 100%;
  /* height: 50rem; */
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  background: ${({ theme }) => theme.colors.white};
  mask-image: linear-gradient(black 80%, transparent 90%);
  padding: 3rem 0 9rem 0;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 3rem;
    padding: 3rem 3rem 8rem 3rem;
    mask-image: linear-gradient(black 90%, transparent 95%);
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 3rem;
    padding: 3rem 1.5rem 8rem 1.5rem;
    mask-image: linear-gradient(black 90%, transparent 95%);
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
  }
`;

export const TechStackItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem 0 3rem;

  > div {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    background: ${({ theme }) => theme.colors.support};
    align-items: center;
    justify-content: center;
    display: flex;
  }

  > h2 {
    font-size: 1.75rem;
    margin-top: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.support};
  }

  > p {
    font-size: 1.25rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
  }

  > h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};

    margin-top: 4rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 801px) {
    &:not(:last-child) {
      border-right: 2px solid ${({ theme }) => theme.colors.support};
    }
  }

  @media (max-width: 800px) {
    padding: 0 0 3rem 0;
    border-right: none;

    &:not(:last-child) {
      border-bottom: 2px solid ${({ theme }) => theme.colors.support};
    }
  }
`;

export const PhoneIcon = styled(IoPhonePortraitOutline)`
  width: 2.5rem;
  height: 2.5rem;
  stroke: ${({ theme }) => theme.colors.black};
`;

export const ServerIcon = styled(IoServer)`
  width: 2.5rem;
  height: 2.5rem;
  fill: ${({ theme }) => theme.colors.black};
`;

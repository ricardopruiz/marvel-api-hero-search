import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const StyledSpiner = styled.div`
  animation: ${spin} infinite 1s linear;
`;

export const StyledSearchBar = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  justify-content: center;

  input {
    flex-grow: 1;
    border: 1px ${({ theme }) => theme.border} solid;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 1.3rem;
    padding: 15px;

    &:focus {
      outline: none;
    }
  }

  button {
    border: 1px solid ${({ theme }) => theme.border};
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 1.3rem;
    width: 80px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.color};

    transition: all 0.3s linear;

    &:disabled {
      background-color: ${({ theme }) => theme.disabled};
      color: ${({ theme }) => theme.color};

      transition: all 0.3s linear;
    }
  }
`;

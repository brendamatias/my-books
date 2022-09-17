import styled from 'styled-components';

export const Container = styled.section`
  border: 3px solid ${({ theme }) => theme.secondary};
  border-left-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 21px;
  height: 21px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

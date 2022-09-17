import styled from 'styled-components';

export const Container = styled.div`
  > label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.primary};
  }

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroudSecondary};
    padding: 12px 16px;
    border-radius: 4px;

    svg {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

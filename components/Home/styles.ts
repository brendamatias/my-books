import styled from 'styled-components';

export const Container = styled.div`
  > .banner {
    background: ${(props) => props.theme.backgroudSecondary};
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 40px;

    > h1 {
      font-size: 24px;
      font-weight: 700;
    }

    > p {
      max-width: 460px;
      font-size: 14px;
      margin: 20px 0 40px 0;
      opacity: 0.9;
    }
  }
`;

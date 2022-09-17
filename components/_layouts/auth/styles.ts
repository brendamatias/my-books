import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .content {
    padding: 20px 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 450px;

    > h1 {
      text-align: center;
      margin: 0 auto;
      font-size: 24px;
      font-weight: 500;
    }

    > h3 {
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 40px;
      margin-top: 10px;
      color: ${({ theme }) => theme.secondary};
    }

    > form {
      > div {
        margin-top: 20px;

        &.links {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;

          > a {
            font-size: 12px;
            color: #808191;
            display: inline-block;

            &:hover {
              color: ${({ theme }) => theme.violet};
            }
          }
        }
      }

      > button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
      }
    }
  }
`;

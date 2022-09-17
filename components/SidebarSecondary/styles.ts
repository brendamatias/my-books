import styled from 'styled-components';

export const Container = styled.section`
  padding: 60px 0;
  text-align: center;

  > .avatar {
    width: 50px;
    height: 50px;
    background-color: #111;
    border-radius: 50%;
    margin: 0 auto 10px auto;
  }

  > strong {
    font-size: 14px;
  }

  > span {
    display: block;
    font-size: 12px;
    color: ${(props) => props.theme.secondary};
    max-width: 200px;
    overflow: hidden;
    margin: 0 auto;
  }

  > .pages-read {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 40px 0;

    > svg {
      font-size: 40px;
    }

    > strong {
      font-size: 12px;
      margin-top: 10px;
    }
  }

  > .info {
    padding: 40px;

    > div {
      display: flex;
      text-align: left;
      gap: 0.8rem;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      .icon {
        background-color: rgba(195, 207, 244, 0.2);
        padding: 15px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      > div > strong {
        font-size: 13px;
      }

      > div > span {
        font-size: 10px;
        display: block;
        color: ${(props) => props.theme.secondary};
      }
    }
  }

  > .authours-read {
    background-color: rgba(195, 207, 244, 0.2);
    margin: 40px 40px 0 40px;
    padding: 15px 0 15px 15px;
    text-align: left;
    border-radius: 20px;
    width: 200px;

    > strong {
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
    }

    > ul {
      height: calc(100vh - 662px);
      overflow: hidden;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 8px;
        cursor: pointer;
      }

      &::-webkit-scrollbar-thumb {
        background: #181720;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #111;
      }

      > li {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        > .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #1f1c2e;
          border-radius: 50%;

          > svg {
            font-size: 13px;
            color: #fff;
          }
        }

        strong {
          display: block;
          font-size: 12px;
          width: 120px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        span {
          display: block;
          font-size: 10px;
          color: ${(props) => props.theme.secondary};
        }
      }
    }
  }
`;

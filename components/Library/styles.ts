import styled from 'styled-components';

export const Container = styled.div`
  > h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  > .content {
    margin-top: 40px;

    > div {
      margin-bottom: 20px;
    }
  }

  > .search-container {
    position: relative;
    background-color: ${(props) => props.theme.backgroudSecondary};
    border-radius: 4px;

    > .search-input {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 10px 20px;

      > svg {
        font-size: 20px;
        color: ${(props) => props.theme.primary};
      }
    }

    > .search-dropdown {
      position: absolute;
      background-color: ${(props) => props.theme.backgroudSecondary};
      top: 46px;
      border-radius: 4px;
      width: 100%;
      max-height: 240px;
      overflow: hidden;
      overflow-y: auto;
      z-index: 999999999;

      button {
        border-radius: 4px;
      }

      &::-webkit-scrollbar {
        width: 8px;
        cursor: pointer;
      }

      &::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.backgroudSecondary};
      }

      &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.violet};
        border-radius: 6px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.violet};
      }

      > ul > li > button {
        font-size: 14px;
        padding: 10px 20px;
        width: 100%;
        text-align: left;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: ${(props) => props.theme.backgroudSecondary};

        > img {
          width: 30px;
        }

        &:hover {
          background-color: ${(props) => props.theme.violet};
        }
      }
    }
  }
`;

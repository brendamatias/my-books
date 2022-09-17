import { BookStatus } from '@/types';
import styled from 'styled-components';

type ScrollVerticalProps = {
  type: BookStatus;
};

export const Container = styled.div`
  > strong {
    display: block;
    font-size: 13px;
    margin-bottom: 20px;
  }

  > ul {
    > li {
      position: relative;
    }

    strong {
      font-size: 14px;
      line-height: 1.4em;
      margin: 12px 0 4px 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: 12px;
      margin: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .image-button {
      height: 220px;
      width: 145px;
      margin: 0;
      padding: 0;
      position: relative;

      > img {
        height: inherit;
        width: inherit;
        border-radius: 8px;
      }
    }

    .remove-button {
      position: absolute;
      top: 5px;
      right: 5px;
      border-radius: 50%;
      padding: 6px;
      z-index: 9999999;
      background-color: rgba(195, 207, 244, 0.2);

      &:hover {
        opacity: 1;
      }

      > svg {
        font-size: 11px;
        color: #fff;
      }
    }
  }

  > .book-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    > li {
      display: flex;
      align-items: flex-start;
      gap: 2rem;

      > div {
        > strong {
          margin-top: 0;
        }

        > p {
          max-width: 600px;
          text-align: justify;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          margin: 10px 0 0 0;
          font-size: 13px;
          opacity: 0.8;
        }

        > .rating {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 8px;

          svg {
            font-size: 16px;
            color: #ffcf00;
          }
        }
      }
    }
  }
`;

export const ScrollVertical = styled.ul<ScrollVerticalProps>`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  z-index: 999;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    height: 8px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background-color: #252836;
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
    flex-direction: column;
    min-width: 145px;
    width: 145px;

    .image-button {
      &::after {
        content: '${({ type }) => (type === 'unread' ? 'Marcar como lido' : 'Marcar como comprado')}';
        display: none;
        background-color: ${({ type }) => (type === 'unread' ? '#0071B7' : '#007C4B')};
        width: 100%;
        position: absolute;
        right: 0;
        color: #fff;
        top: calc(50% - 24px);
        font-size: 12px;
        padding: 10px 0;
        font-weight: 600;
      }

      &:hover img {
        opacity: 0.3;
      }

      &:hover::after {
        display: inline-block;
      }
    }
  }
`;

import styled from 'styled-components';

export interface Props {
  open?: boolean;
  newNotification?: boolean;
  color?: string;
}

export const NotificationContainer = styled.div<Props>`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-right: 23px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-right: 190px;

  > button {
    outline: none;
    background-color: transparent;
    border: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
    img {
      width: 20px;
      height: auto;
      margin: 0 30px 0 0 !important;
      display: block;
      font-size: 40px;
      margin: 50px auto 0;
      color: #9e9e9e;
      -webkit-animation: ${(props) =>
        props.newNotification === true
          ? `ring 4s 0.7s ease-in-out infinite`
          : `none`};
      -webkit-transform-origin: 50% 4px;
      -moz-animation: ${(props) =>
        props.newNotification === true
          ? `ring 4s 0.7s ease-in-out infinite`
          : `none`};
      -moz-transform-origin: 50% 4px;
      animation: ${(props) =>
        props.newNotification === true
          ? `ring 4s 0.7s ease-in-out infinite`
          : `none`};
      transform-origin: 50% 4px;
    }

    @-webkit-keyframes ring {
      0% {
        -webkit-transform: rotateZ(0);
      }
      1% {
        -webkit-transform: rotateZ(30deg);
      }
      3% {
        -webkit-transform: rotateZ(-28deg);
      }
      5% {
        -webkit-transform: rotateZ(34deg);
      }
      7% {
        -webkit-transform: rotateZ(-32deg);
      }
      9% {
        -webkit-transform: rotateZ(30deg);
      }
      11% {
        -webkit-transform: rotateZ(-28deg);
      }
      13% {
        -webkit-transform: rotateZ(26deg);
      }
      15% {
        -webkit-transform: rotateZ(-24deg);
      }
      17% {
        -webkit-transform: rotateZ(22deg);
      }
      19% {
        -webkit-transform: rotateZ(-20deg);
      }
      21% {
        -webkit-transform: rotateZ(18deg);
      }
      23% {
        -webkit-transform: rotateZ(-16deg);
      }
      25% {
        -webkit-transform: rotateZ(14deg);
      }
      27% {
        -webkit-transform: rotateZ(-12deg);
      }
      29% {
        -webkit-transform: rotateZ(10deg);
      }
      31% {
        -webkit-transform: rotateZ(-8deg);
      }
      33% {
        -webkit-transform: rotateZ(6deg);
      }
      35% {
        -webkit-transform: rotateZ(-4deg);
      }
      37% {
        -webkit-transform: rotateZ(2deg);
      }
      39% {
        -webkit-transform: rotateZ(-1deg);
      }
      41% {
        -webkit-transform: rotateZ(1deg);
      }

      43% {
        -webkit-transform: rotateZ(0);
      }
      100% {
        -webkit-transform: rotateZ(0);
      }
    }

    @-moz-keyframes ring {
      0% {
        -moz-transform: rotate(0);
      }
      1% {
        -moz-transform: rotate(30deg);
      }
      3% {
        -moz-transform: rotate(-28deg);
      }
      5% {
        -moz-transform: rotate(34deg);
      }
      7% {
        -moz-transform: rotate(-32deg);
      }
      9% {
        -moz-transform: rotate(30deg);
      }
      11% {
        -moz-transform: rotate(-28deg);
      }
      13% {
        -moz-transform: rotate(26deg);
      }
      15% {
        -moz-transform: rotate(-24deg);
      }
      17% {
        -moz-transform: rotate(22deg);
      }
      19% {
        -moz-transform: rotate(-20deg);
      }
      21% {
        -moz-transform: rotate(18deg);
      }
      23% {
        -moz-transform: rotate(-16deg);
      }
      25% {
        -moz-transform: rotate(14deg);
      }
      27% {
        -moz-transform: rotate(-12deg);
      }
      29% {
        -moz-transform: rotate(10deg);
      }
      31% {
        -moz-transform: rotate(-8deg);
      }
      33% {
        -moz-transform: rotate(6deg);
      }
      35% {
        -moz-transform: rotate(-4deg);
      }
      37% {
        -moz-transform: rotate(2deg);
      }
      39% {
        -moz-transform: rotate(-1deg);
      }
      41% {
        -moz-transform: rotate(1deg);
      }

      43% {
        -moz-transform: rotate(0);
      }
      100% {
        -moz-transform: rotate(0);
      }
    }

    @keyframes ring {
      0% {
        transform: rotate(0);
      }
      1% {
        transform: rotate(30deg);
      }
      3% {
        transform: rotate(-28deg);
      }
      5% {
        transform: rotate(34deg);
      }
      7% {
        transform: rotate(-32deg);
      }
      9% {
        transform: rotate(30deg);
      }
      11% {
        transform: rotate(-28deg);
      }
      13% {
        transform: rotate(26deg);
      }
      15% {
        transform: rotate(-24deg);
      }
      17% {
        transform: rotate(22deg);
      }
      19% {
        transform: rotate(-20deg);
      }
      21% {
        transform: rotate(18deg);
      }
      23% {
        transform: rotate(-16deg);
      }
      25% {
        transform: rotate(14deg);
      }
      27% {
        transform: rotate(-12deg);
      }
      29% {
        transform: rotate(10deg);
      }
      31% {
        transform: rotate(-8deg);
      }
      33% {
        transform: rotate(6deg);
      }
      35% {
        transform: rotate(-4deg);
      }
      37% {
        transform: rotate(2deg);
      }
      39% {
        transform: rotate(-1deg);
      }
      41% {
        transform: rotate(1deg);
      }

      43% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(0);
      }
    }
  }
`;

export const Count = styled.div<Props>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color || `#fe6a6a`};
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 600;
    color: white;
    padding: 2px;
  }
`;

export const NotificationModal = styled.div<Props>`
  width: auto;
  height: auto;
  min-width: 200px;
  padding: 30px;
  z-index: 11;
  position: absolute;
  background-color: transparent;
  right: 0;
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.open === true ? `flex` : `none`)};
`;

export const ModalConainer = styled.div<Props>`
  width: 100;
  // max-height: 350px;
  height: auto;
  padding: 30px;
  z-index: 11;
  position: absolute;
  background-color: #fff;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  right: -75px;
  top: 40px;
  opacity: 1;
  flex-direction: column;
  animation: Notf 0.8s forwards;

  @keyframes Notf {
    0% {
      transform: translateX(3000px);
    }
    60% {
      transform: translateX(-25px);
    }
    75% {
      transform: translateX(10px);
    }
    90% {
      transform: translateX(-5px);
    }
  }
`;

export const MessageSection = styled.div`
  width: auto;
  height: auto;
  max-height: 30vh;
  overflow-y: auto;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const SectionButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;

  button {
    outline: none;
    background-color: transparent !important;
    width: auto !important;
    cursor: pointer;
    margin-top: 15px;
    color: ${({ color }) => color || `#fe6a6a`};
    height: auto !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
    &:hover {
      filter: none;
    }
  }
`;

export const Triangle = styled.div<Props>`
  width: 0;
  height: 0;
  display: ${({ open }) => (open ? `flex` : `none`)};
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  margin: 0 -35px 0 0;
  border-bottom: 10px solid #fff;
  align-self: flex-end;
  top: 60px;
  animation: ShoppinModal 0.8s forwards;

  @keyframes ShoppinModal {
    0% {
      transform: translateX(3000px);
    }
    60% {
      transform: translateX(-25px);
    }
    75% {
      transform: translateX(10px);
    }
    90% {
      transform: translateX(-5px);
    }
  }
`;

import styled from "styled-components";

const LoadingWrapper = styled.div `
  width: 70px;
  margin: auto;
  text-align: center;

  div {
    width: 9px;
    height: 9px;
    background-color: ${props => props.color};

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1s infinite ease-in-out both;
  }

  .spin1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spin3 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

export  { LoadingWrapper }
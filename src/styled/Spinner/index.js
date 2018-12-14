/** @flow */
import styled from 'styled-components';

const Spinner: any = styled.i`
  display: block;
  width: 32px;
  height: 32px;
  background-color: ${({ color }) => color};
  -webkit-animation: spin 1.2s infinite ease-in-out;
  animation: spin 1.2s infinite ease-in-out;

  @keyframes spin {
    0% {
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
`;

Spinner.defaultProps = {
  color: '#e59',
};

export default Spinner;

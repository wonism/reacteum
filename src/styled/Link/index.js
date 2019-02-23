import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';
import { anchorStyle } from '~/styled/css';

const Link = styled(LinkComponent)`
  ${anchorStyle}
`;

export default Link;

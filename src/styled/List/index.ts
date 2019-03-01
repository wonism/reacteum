import styled from 'styled-components';

const List = styled.ul<{}>`
  display: flex;
  margin: 0;
  padding: 0;
  text-align: center;
  list-style: none;

  li {
    flex: 1;
  }
`;

export default List;

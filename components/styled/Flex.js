import styled from 'styled-components/native';

export const Flex = styled.View`
  flex-direction: ${props => props.direction === 'row' ? 'row' : 'column'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
`;

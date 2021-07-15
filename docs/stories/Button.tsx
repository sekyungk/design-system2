import React from 'react';
import styled from 'styled-components';
import { colors } from '@sekyungk/design-token2';

const Container = styled.button`
  background-color: ${colors.light.scheme.primary[800]};
`;

export default function Button(): JSX.Element {
  return <Container>버튼</Container>;
}

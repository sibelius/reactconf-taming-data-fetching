import React from 'react';
import styled from 'styled-components'
import { space, width } from 'styled-system';

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #FDAA4C;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #25D7FD;
  ${space} 
`;

export const Cover = () => (
  <Root>
    <Center>
      <Img src={'./img/fetch.jpg'} width={200} />
      <Title mt={20}>Taming Data Fetching</Title>
      <Subtitle mt={20}>From pure React hooks to Relay Modern and Suspense</Subtitle>
      <MeName mt={100}>Sibelius Seraphini</MeName>
    </Center>
  </Root>
);

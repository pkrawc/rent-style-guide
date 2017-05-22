import React from 'react';
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  padding: 0.5 1em;
  border: 2px solid ${({primary}) => primary ? '#A55' : '#000'};
  background: ${({primary}) => primary ? 'transparent' : '#A55'};
  color: ${({primary}) => primary ? '#A55' : '#000'};
  font-size: 1em;
  &:hover {
    background: ${({primary}) => primary ? '#A55' : '#F99'};
  }
`
export default function Button({children, ...rest}) {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>
}

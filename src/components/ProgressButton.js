import React from 'react';

import styled from 'styled-components';

const ProgressButton = ({ buttonTitle }) => {
  return <Button>{buttonTitle}</Button>;
};

const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 70px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 700px;
  border-radius: 35px;
  background-color: #ff872d;
`;

export default ProgressButton;

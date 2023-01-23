import styled from 'styled-components';

const ProgressButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 70px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 700px;
  border-radius: 35px;
  background-color: ${({ disabled, theme }) => (disabled ? theme.Colors.GRAY2 : theme.Colors.ORANGE)};
`;

export default ProgressButton;

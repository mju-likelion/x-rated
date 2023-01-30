import { useField } from 'formik';
import styled from 'styled-components';

const CheckBox = ({ children, name }) => {
  const [field] = useField(name);
  return (
    <div>
      <StyledCheckbox type="checkbox" {...field} />
      {children}
    </div>
  );
};

export default CheckBox;

const StyledCheckbox = styled.input`
  width: 26px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.colors.WHITE};
  border-radius: 6px;
  background: transparent;
  color: ${({ theme }) => theme.colors.WHITE};
  :active,
  ::after {
    background-color: transparent;
  }
`;

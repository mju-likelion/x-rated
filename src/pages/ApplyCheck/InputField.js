import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';

import Button from '../../components/Button';

const InputField = ({ setIsFocus }) => {
  const DEFAULT_ERROR = '작성이 완료되지 않은 내용이 있습니다.';
  const FORM_ERROR = '형식에 맞지 않는 값이 존재합니다.';
  const navigate = useNavigate();

  const handleInputClick = () => {
    setIsFocus(true);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      sid: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(DEFAULT_ERROR),
      sid: Yup.string()
        .required(DEFAULT_ERROR)
        .matches(/^\d{8}$/, FORM_ERROR),
    }),
    onSubmit: values => {
      //console.log(values);
      navigate('/success');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <AllInputField>
        <InputFieldBox>
          <InputNameBox>
            <InputName>
              이름 <Asterisk>*</Asterisk>
            </InputName>
          </InputNameBox>
          <Input
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            {...formik.getFieldProps('name')}
            onClick={handleInputClick}
          />
        </InputFieldBox>
        <InputFieldBox>
          <InputNameBox>
            <InputName>
              학번 <Asterisk>*</Asterisk>
            </InputName>
          </InputNameBox>
          <Input
            placeholder="60XXXXXX"
            id="sid"
            onChange={formik.handleChange}
            value={formik.values.sid}
            {...formik.getFieldProps('sid')}
            onClick={handleInputClick}
          />
        </InputFieldBox>
      </AllInputField>
      <ButtonBox>
        <Button
          text={'입력완료'}
          errorMessage={!formik.values.name ? DEFAULT_ERROR : formik.errors.name || formik.errors.sid}
          type="submit"
        />
      </ButtonBox>
    </form>
  );
};

const AllInputField = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 30px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 40px;
    margin-top: 50px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    gap: 40px;
    margin-top: 40px;
  }
`;

const InputFieldBox = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const InputNameBox = styled.div`
  width: 201px;
  display: flex;
  padding-left: 6px;
  box-sizing: border-box;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 270px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 477px;
  }
`;

const InputName = styled.div`
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    line-height: 18px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    line-height: 22px;
  }
`;

const Asterisk = styled.span`
  color: ${({ theme }) => theme.colors.ORANGE};
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  width: 207px;
  height: 50px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 14px;
  line-height: 18px;
  padding-left: 16px;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.WHITE};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.GRAY3};
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 276px;
    height: 52px;
    font-size: 16px;
    line-height: 20px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 483px;
    height: 62px;
    font-size: 20px;
    line-height: 30px;
  }
`;

const ButtonBox = styled.div`
  margin-top: 70px;
  text-align: center;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 100px;
  }
`;

export default InputField;

import { useState, useEffect } from 'react';

import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';

import { getAgreement } from '../../api/ApplyInfo';
import { ReactComponent as Caution } from '../../assets/images/caution.svg';
import Button from '../../components/Button';
import PageMainTitle from '../../components/PageMainTitle';

import ButtonBox from './ButtonBox';
import { CAMPUS, ENROLLMENTSTATUS, PART } from './ButtonData';
import CautionNotice from './CautionNotice';
import CheckBox from './CheckBox';
import { initialValues } from './InitialValues';
import SelectBox from './SelectBox';
import { GRADE } from './SelectData';
import TextInput from './TextInput';
import { useLocalStorageState } from './useLocalStorageStateHook';
import { validation } from './Validation';

const DEFAULT_ERROR = '작성이 완료되지 않은 내용이 있습니다.';
const FORM_ERROR = '형식에 맞지 않는 값이 존재합니다.';

const STORAGE_KEY = 'INFOVALUE';

const ApplyInfoPage = () => {
  const navigate = useNavigate();
  const [localStorageState, updateLocalStorageState] = useLocalStorageState({ key: STORAGE_KEY, value: initialValues });
  const [agreement, setAgreement] = useState();

  useEffect(() => {
    getAgreement(setAgreement);
  }, []);

  const handleValues = values => {
    updateLocalStorageState(values);
    navigate('/write', {
      state: {
        ...values,
        phone: values.phone.replace(/-/g, ''),
        part: values.part.toLowerCase(),
      },
    });
  };

  const handleError = (values, errors) => {
    if (!values?.name) {
      return DEFAULT_ERROR;
    }
    if (Object.keys(errors).length > 0) {
      if (Object.values(errors).includes('form')) {
        return DEFAULT_ERROR;
      }
      return FORM_ERROR;
    } else {
      return null;
    }
  };

  return (
    <>
      <PageMainTitle title="지원서 작성하기" />
      <ContentContainer>
        <Formik
          initialValues={localStorageState}
          validationSchema={Yup.object(validation)}
          onSubmit={values => handleValues(values)}
        >
          {({ errors, handleSubmit, values }) => (
            <>
              <StyledForm>
                <TextInput name="name" type="text" text="이름" maxLength={10} />
                <InputContainer>
                  <TextInput name="phone" type="text" placeholder="000-0000-0000" text="전화번호" maxLength={13} />
                  <TextInput name="email" type="email" text="이메일" />
                </InputContainer>

                <BreakLine />

                <ButtonBox name="campus" buttonsData={CAMPUS} text="소속 캠퍼스" />

                <ButtomInputContainer>
                  <TextInput name="major" type="text" text="학과" maxLength={11} />
                  <TextInput name="sid" type="text" placeholder="60XXXXXX" text="학번" maxLength={8} />
                </ButtomInputContainer>

                <SelectBox name="grade" selectdata={GRADE} text="학년(추가학기인 경우 '4'를 선택해 주세요)" />

                <ButtonContainer>
                  <ButtonBox name="enrollmentStatus" buttonsData={ENROLLMENTSTATUS} text="학적" />
                </ButtonContainer>

                <ButtonContainer>
                  <ButtonBox name="part" buttonsData={PART} text="지원파트" />
                </ButtonContainer>

                <ButtomBreakLine />

                <AgreementTextContainer>{agreement || ''}</AgreementTextContainer>
                <CheckBox name="personalInfoAgreement" text="개인정보 수집 및 이용 동의" />

                <CautionContainer>
                  <StyledCautionIcon />
                  <CautionTextContainer>
                    <CautionNotice />
                  </CautionTextContainer>
                </CautionContainer>
                <CheckBox name="cautionConfirm" text="위의 주의사항을 확인하였습니다" />

                <SubmitButtonContainer>
                  <Button
                    type="submit"
                    text="다음으로"
                    errorMessage={handleError(values, errors)}
                    onClick={handleSubmit}
                  />
                </SubmitButtonContainer>
              </StyledForm>
            </>
          )}
        </Formik>
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  width: 318px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    max-width: 1200px;
  }
`;

const StyledForm = styled(Form)`
  width: 318px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.devices.TABLET} {
    flex-direction: row;
    justify-content: space-between;
    margin: 40px 0;
    flex-direction: row;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    justify-content: flex-start;
    margin-top: 40px;
  }
`;

const ButtomInputContainer = styled(InputContainer)`
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 4px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 23px;
  }
`;

const BreakLine = styled.div`
  box-sizing: border-box;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  width: 100%;
  margin-bottom: 32px;
  border-radius: 0.5px;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 40px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 50px auto;
  }
`;

const ButtomBreakLine = styled(BreakLine)`
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 4px auto 40px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 20px auto 50px auto;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 32px;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 40px;
  }
`;

const AgreementTextContainer = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;
  margin-top: 32px;
  height: 240px;
  overflow-y: scroll;
  white-space: pre-wrap;
  padding: 20px;
  font-size: 12px;
  line-height: 20px;
  width: 318px;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 40px;
    height: 340px;
    padding: 24px;
    font-size: 14px;
    line-height: 21px;
    width: 568px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 50px;
    padding: 30px;
    font-size: 18px;
    line-height: 24px;
    width: 1200px;
  }

  ::-webkit-scrollbar {
    width: 18px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.GRAY3};
    background-clip: padding-box;
    height: 176px;
    border: 6px solid rgba(0, 0, 0, 0);
    border-radius: 9999px;
  }
`;

const CautionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledCautionIcon = styled(Caution)`
  width: 56px;
  height: 62px;
  margin: 33px 0 0 30px;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 40px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 50px;
  }
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 100px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 100px;
    margin-bottom: 160px;
  }
`;

const CautionTextContainer = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;

  height: 206px;
  padding: 18px;

  @media ${({ theme }) => theme.devices.TABLET} {
    height: 208px;
    padding: 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 220px;
    padding: 30px;
  }
`;

export default ApplyInfoPage;

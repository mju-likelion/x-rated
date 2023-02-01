import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { ReactComponent as Caution } from '../../assets/images/caution.svg';
import Button from '../../components/Button';
import PageMainTitle from '../../components/PageMainTitle';

import ButtonBox from './ButtonBox';
import { PART, CAMPUS, ENROLLMENTSTATUS } from './ButtonData';
import CautionNotice from './CautionNotice';
import CheckBox from './CheckBox';
import { FormikConfig } from './FormikConfig';
import SelectBox from './SelectBox';
import { GRADE } from './SelectData';
import TextInput from './TextInput';

const ApplyInfoPage = () => {
  const DEFAULTERROR = '작성이 완료되지 않은 내용이 있습니다.';
  const FORMERROR = '형식에 맞지 않는 값이 존재합니다.';

  return (
    <>
      <ContentContainer>
        <PageMainTitle title="지원서 작성하기" />

        <Formik
          initialValues={FormikConfig.initialValues}
          validationSchema={FormikConfig.validationSchema}
          onSubmit={FormikConfig.onSubmit}
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

                <AgreementTextContainer></AgreementTextContainer>
                <CheckBox name="personalInfoAgreement" text="개인정보 수집 및 이용 동의" />

                <StyledCautionIcon />
                <CautionTextContainer>
                  <CautionNotice />
                </CautionTextContainer>
                <CheckBox name="cautionConfirm" text="위의 주의사항을 확인하였습니다." />

                <SubmitButtonContainer>
                  <Button
                    type="submit"
                    text="다음으로"
                    errorMessage={
                      !values.name
                        ? DEFAULTERROR
                        : Object.values(errors).includes('form')
                        ? FORMERROR
                        : Object.keys(errors).length > 0
                        ? DEFAULTERROR
                        : null
                    }
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
    margin: 40px 0;
    flex-direction: row;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 40px;
  }
`;

const ButtomInputContainer = styled(InputContainer)`
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 4px 0 40px 0;
  }
`;

const BreakLine = styled.div`
  box-sizing: border-box;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  width: 100%;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 40px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 50px 0;
  }
`;

const ButtomBreakLine = styled(BreakLine)`
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 4px 0 40px 0;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 20px 0 50px 0;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 32px;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 40px;
  }
`;

const AgreementTextContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;

  margin-top: 32px;
  height: 240px;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 40px;
    height: 340px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 50px;
  }
`;

const StyledCautionIcon = styled(Caution)`
  margin-left: 30px;
  width: 56px;
  height: 62px;

  margin-top: 33px;

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
  margin-bottom: 125px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 100px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 100px;
    margin-bottom: 200px;
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

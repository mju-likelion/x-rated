import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { ReactComponent as Caution } from '../../assets/images/caution.svg';
import Button from '../../components/Button';
import PageMainTitle from '../../components/PageMainTitle';

import ButtonBox from './ButtonBox';
import { PART, CAMPUS, ENROLLMENTSTATUS } from './ButtonData';
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
      <PageMainTitle title="지원서 작성하기" />

      <ContentContainer>
        <Formik
          initialValues={FormikConfig.initialValues}
          validationSchema={FormikConfig.validationSchema}
          onSubmit={FormikConfig.onSubmit}
        >
          {({ errors, handleSubmit, values }) => (
            <>
              <Form>
                <TextInput name="name" type="text" text="이름" maxLength={10} />
                <InputContainer contour>
                  <TextInput name="phone" type="text" placeholder="000-0000-0000" text="전화번호" maxLength={13} />
                  <TextInput name="email" type="email" text="이메일" />
                </InputContainer>
                <ButtonContainer>
                  <ButtonBox name="campus" buttonData={CAMPUS} text="소속 캠퍼스" />
                </ButtonContainer>
                <InputContainer>
                  <TextInput name="major" type="text" text="학과" maxLength={11} />
                  <TextInput name="sid" type="text" placeholder="60XXXXXX" text="학번" maxLength={8} />
                </InputContainer>
                <SelectContainer>
                  <SelectBox name="grade" selectdata={GRADE} text="학년(추가학기인 경우 '4'를 선택해 주세요)" />
                </SelectContainer>
                <ButtonContainer>
                  <ButtonBox name="enrollmentStatus" buttonData={ENROLLMENTSTATUS} text="학적" />
                </ButtonContainer>
                <ButtonContainer contour>
                  <ButtonBox name="part" buttonData={PART} text="지원파트" />
                </ButtonContainer>
                <AgreementTextContainer></AgreementTextContainer>
                <CheckBox name="personalInfoAgreement" text="개인정보 수집 및 이용 동의" />
                <CautionContainer>
                  <StyledCautionIcon />
                  <CautionTextContainer></CautionTextContainer>
                </CautionContainer>
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
              </Form>
            </>
          )}
        </Formik>
      </ContentContainer>
    </>
  );
};

export default ApplyInfoPage;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  border-bottom: ${({ theme, contour }) => contour && `1px solid ${theme.colors.GRAY1}`};
`;

const InputContainer = styled(Container)`
  padding: 48px 0;
  display: flex;
  div {
    :nth-child(2) {
      margin-left: 30px;
    }
  }
`;

const TitleContainer = styled(Container)`
  align-items: flex-start;
  margin: 0;
`;

const CautionContainer = styled(Container)`
  flex-direction: column;
  margin-top: 53px;
`;

const ButtonContainer = styled(Container)`
  margin-top: 50px;
  padding-bottom: ${({ contour }) => contour && '20px'};
`;

const SelectContainer = styled(Container)`
  flex-direction: column;
  margin: 23px 0 7px 0;
  height: 93px;
`;

const AgreementTextContainer = styled(Container)`
  height: 340px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;
  margin-top: 50px;
`;

const CautionTextContainer = styled(Container)`
  height: 220px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;
`;

const StyledCautionIcon = styled(Caution)`
  margin-left: 30px;
`;

const SubmitButtonContainer = styled(Container)`
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 200px;
`;

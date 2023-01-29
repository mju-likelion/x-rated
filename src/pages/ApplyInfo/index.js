import { Formik, Form } from 'formik';
import styled from 'styled-components';

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
    <ContentContainer>
      <PageMainTitle title="지원서 작성하기" />
      <Formik
        initialValues={FormikConfig.initialValues}
        validationSchema={FormikConfig.validationSchema}
        onSubmit={FormikConfig.onSubmit}
      >
        {({ errors, handleSubmit, values }) => (
          <>
            <Form>
              <TextInput name="name" type="text" text="이름" maxLength={10} />
              <TextInput name="phone" type="text" placeholder="000-0000-0000" text="전화번호" maxLength={13} />
              <TextInput name="email" type="email" text="이메일" />

              <ButtonBox name="campus" buttonData={CAMPUS} text="소속 캠퍼스" />

              <TextInput name="major" type="text" text="학과" maxLength={11} />
              <TextInput name="sid" type="text" placeholder="60XXXXXX" text="학번" maxLength={8} />
              <SelectBox name="grade" selectdata={GRADE} text="학년" />

              <ButtonBox name="enrollmentStatus" buttonData={ENROLLMENTSTATUS} text="학적" />

              <ButtonBox name="part" buttonData={PART} text="지원파트" />

              <CheckBox name="personalInfoAgreement">개인정보 수집 및 이용 동의</CheckBox>
              <CheckBox name="cautionConfirm">위의 주의사항을 확인하였습니다.</CheckBox>
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
            </Form>
          </>
        )}
      </Formik>
    </ContentContainer>
  );
};

export default ApplyInfoPage;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

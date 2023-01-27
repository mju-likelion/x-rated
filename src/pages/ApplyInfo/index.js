import { Formik, Form } from 'formik';
import { FormikConfig } from './FormikConfig';
import ProgressButton from '../../components/ProgressButton';
import { PART, CAMPUS, ENROLLMENTSTATUS } from './ButtonData';
import CheckBox from './CheckBox';
import TextInput from './TextInput';
import ButtonBox from './ButtonBox';
import SelectBox from './SelectBox';
import { GRADE } from './SelectData';

const ApplyInfoPage = () => {
  return (
    <>
      <Formik
        initialValues={FormikConfig.initialValues}
        validationSchema={FormikConfig.validationSchema}
        onSubmit={FormikConfig.onSubmit}
      >
        {({ errors }) => (
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

            <ProgressButton type="submit" disabled={Object.keys(errors).length > 0}>
              다음으로
            </ProgressButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ApplyInfoPage;

import { Formik, Form } from 'formik';
import { FormikConfig } from './FormikConfig';

import Button from '../../components/Button';

import CheckBox from './CheckBox';
import TextInput from './TextInput';
import ButtonBox from './ButtonBox';
import SelectBox from './SelectBox';

import { GRADE } from './SelectData';
import { PART, CAMPUS, ENROLLMENTSTATUS } from './ButtonData';

const ApplyInfoPage = () => {
  const defaultError = '작성이 완료되지 않은 내용이 있습니다.';
  const formError = '형식에 맞지 않는 값이 존재합니다.';

  return (
    <>
      <Formik
        initialValues={FormikConfig.initialValues}
        validationSchema={FormikConfig.validationSchema}
        onSubmit={FormikConfig.onSubmit}
      >
        {({ errors, handleSubmit, values }) => (
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
                  ? defaultError
                  : Object.values(errors).includes('form')
                  ? formError
                  : Object.keys(errors).length > 0
                  ? defaultError
                  : null
              }
              onClick={handleSubmit}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ApplyInfoPage;

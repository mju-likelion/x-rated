import { Formik, Form } from 'formik';
import { FormikConfig } from './FormikConfig';
import ProgressButton from '../../components/ProgressButton';
import { ENROLLMENTSTATUS_CLIENT, PART, CAMPUS } from './ButtonData';
import CheckBox from './CheckBox';
import TextInput from './TextInput';
import ButtonBox from './ButtonBox';

const ApplyInfoPage = () => {
  return (
    <>
      <Formik
        initialValues={FormikConfig.initialValues}
        validationSchema={FormikConfig.validationSchema}
        onSubmit={FormikConfig.onSubmit}
      >
        <Form>
          <TextInput name="name" type="text" />
          <TextInput name="phoneNumber" type="text" />
          <TextInput name="email" type="email" />

          <ButtonBox name="campus" buttonData={CAMPUS} />

          <TextInput name="major" type="text" />
          <TextInput name="sid" type="text" />
          <TextInput name="grade" type="text" />

          <ButtonBox name="enrollmentStatus" buttonData={ENROLLMENTSTATUS_CLIENT} />

          <ButtonBox name="part" buttonData={PART} />

          <CheckBox name="personalInfoAgreement">동의</CheckBox>

          <ProgressButton type="submit">다음으로</ProgressButton>
        </Form>
      </Formik>
    </>
  );
};

export default ApplyInfoPage;

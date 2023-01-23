import React from 'react';
import { Formik, Form } from 'formik';
import { FormikConfig } from './data/FormikConfig';
import ProgressButton from '../../components/ProgressButton';
import { ACADEMIC, PART, CAMPUS } from './data/ButtonData';
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
          <TextInput name="phoneNum" type="text" />
          <TextInput name="email" type="email" />

          <ButtonBox name="campus" buttonData={CAMPUS} />

          <TextInput name="major" type="text" />
          <TextInput name="studentNumber" type="text" />
          <TextInput name="grade" type="text" />

          <ButtonBox name="academic" buttonData={ACADEMIC} />

          <ButtonBox name="part" buttonData={PART} />

          <CheckBox name="privacyAccept">동의</CheckBox>

          <ProgressButton type="submit">다음으로</ProgressButton>
        </Form>
      </Formik>
    </>
  );
};

export default ApplyInfoPage;

import React from 'react';
import { Formik } from 'formik';
import { FormikConfig } from './data/FormikConfig';
import ProgressButton from '../../components/ProgressButton';
import { Academic, Part, Campus } from './buttonData';
import CheckBox from './CheckBox';

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

          <ButtonBox name="campus" ButtonData={Campus} />

          <TextInput name="major" type="text" />
          <TextInput name="studentNumber" type="text" />
          <TextInput name="grade" type="text" />

          <ButtonBox name="academic" ButtonData={Academic} />

          <ButtonBox name="part" ButtonData={Part} />

          <CheckBox name="acceptedInfo">동의</CheckBox>

          <ProgressButton type="submit">다음으로</ProgressButton>
        </Form>
      </Formik>
    </>
  );
};

export default ApplyInfoPage;

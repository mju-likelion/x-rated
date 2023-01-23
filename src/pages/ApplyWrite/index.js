import React from 'react';
import { useFormik } from 'formik';

import styled from 'styled-components';

const ApplyWritePage = () => {
  const formik = useFormik({
    initialValues: {
      firstAnswer: '',
      secondAnswer: '',
      thirdAnswer: '',
      fourthAnswer: '',
      fifthAnswer: '',
      sixthAnswer: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const ANSWER_ARRAY = ['firstAnswer'];

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {ANSWER_ARRAY.map((item, idx) => {
          return (
            <WriteContainer key={idx}>
              <WriteTitle>
                {` ${
                  idx + 1
                }. 저희 멋쟁이사자처럼 11기에 지원해 주심에 감사드리며, 지원자분의 지원 동기를 올해의 목표와 연관 지어 서술해 주세요`}
              </WriteTitle>
              <WriteBox>
                <WriteArea
                  id={item}
                  placeholder="내용을 입력해주세요"
                  maxLength="1000"
                  name={item}
                  onChange={formik.handleChange}
                  value={formik.values.firstAnswer}
                />
                <WriteLength>{formik.values.firstAnswer.length}/1000</WriteLength>
              </WriteBox>
            </WriteContainer>
          );
        })}

        <button type="submit">상태 확인!</button>
        {/* 이거 버튼은 나중에 공통 버튼으로 변경해서 가져오고 */}
      </form>
    </div>
  );
};

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  //  height: 380px;
`;

const WriteTitle = styled.p`
  font-size: 18px;
  line-height: 23px;
  font-weight: 400px;
`;

const WriteBox = styled(WriteContainer)`
  width: 100%;
  border-radius: 18px;
  margin-top: 16px;
  padding: 30px 30px 15px 30px;
  font-weight: 400px;
  gap: 10px;
  box-sizing: border-box;
  background-color: ${props => props.theme.Colors.GRAY1};
`;

const WriteLength = styled(WriteTitle)`
  align-self: flex-end;
  font-size: 16px;
  line-height: 20px;
`;

const WriteArea = styled.textarea`
  background-color: white;
  color: #ffffff;
  height: 340px;
  resize: none;
  background-color: ${props => props.theme.Colors.GRAY1};
  border-width: 0;
  font-size: 20px;
  line-height: 30px;
`;

export default ApplyWritePage;

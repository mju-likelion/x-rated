import { useFormik } from 'formik';

import styled from 'styled-components';

const ApplyWritePage = () => {
  const TEMP_QUESTIONS = [
    {
      id: 1,
      question:
        '저희 멋쟁이사자처럼 11기에 지원해 주심에 감사드리며, 지원자분의 지원 동기를 올해의 목표와 연관 지어 서술해 주세요',
      maxLength: 1000,
    },
    {
      id: 2,
      question:
        '저희 멋쟁이사자처럼 11기에 지원해 주심에 감사드리며, 지원자분의 지원 동기를 올해의 목표와 연관 지어 서술해 주세요',
      maxLength: 700,
    },
  ];
  //추후 서버 통신시에 마운트되면 문항 질문 받아서 렌더링 (props x)

  const initialValues = {
    firstAnswer: '',
    secondAnswer: '',
    thirdAnswer: '',
    fourthAnswer: '',
    fifthAnswer: '',
    sixthAnswer: '',
  };

  const order = Object.keys(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {TEMP_QUESTIONS.map((item, index) => {
        return (
          <WriteContainer key={index}>
            <WriteTitle>
              {` ${index + 1}. ${item.question}`}
              {/* 추후 서버통신하면 변경요망 */}
            </WriteTitle>
            <WriteBox>
              <WriteArea
                id={order[index]}
                placeholder="내용을 입력해주세요"
                maxLength={item.maxLength}
                name={order[index]}
                onChange={formik.handleChange}
                value={formik.values[order[index]]}
              />
              <WriteLength>
                {formik.values[order[index]].length}/{item.maxLength}
              </WriteLength>
            </WriteBox>
          </WriteContainer>
        );
      })}
      <button type="submit">상태 확인 테스트</button>
      {/* 이거 버튼은 나중에 공통 버튼으로 변경해서 가져오기요망 */}
    </form>
  );
};

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  //  height: 380px; => 추후 피그마 수정하게 될지 모르니 일단 메모
`;

const WriteTitle = styled.p`
  margin-top: 100px;
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

const WriteLength = styled.p`
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

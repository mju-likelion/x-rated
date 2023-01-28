import { useFormik } from 'formik';
import styled, { css } from 'styled-components';

import Button from './../../components/Button';

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
    file: '',
  };

  const order = Object.keys(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onChange = (e, key, maxLength) => {
    if (e.target.value > maxLength) {
      return;
    }
    formik.setFieldValue(key, e.target.value);
  };

  const fileData = formik.values.file;

  return (
    <>
      <FileUploadContainer>
        <BaseTitle>
          Html 혹은 css를 포함한 zip 형식의 자기소개서 페이지를 첨부해 주세요. <Star>*</Star>
        </BaseTitle>

        <FileUploadBorder file={fileData}>
          <FileUploadLabel htmlFor="file">
            <FileUploadTitle file={fileData}>{fileData ? `${fileData.name}` : '파일 불러오기'}</FileUploadTitle>
          </FileUploadLabel>
        </FileUploadBorder>
      </FileUploadContainer>
      <FileUpload
        id="file"
        name="file"
        type="file"
        accept=".html,.zip"
        onChange={e => {
          formik.setFieldValue('file', e.currentTarget.files[0]);
        }}
      />

      <BreakLine />
      <form onSubmit={formik.handleSubmit}>
        {TEMP_QUESTIONS.map((item, index) => {
          return (
            <WriteContainer key={index}>
              <BaseTitle>
                {` ${index + 1}. ${item.question}`}
                {/* 추후 서버통신하면 변경요망 */}
              </BaseTitle>
              <WriteBox>
                <WriteArea
                  id={order[index]}
                  placeholder="내용을 입력해주세요"
                  maxLength={item.maxLength}
                  name={order[index]}
                  onChange={e => onChange(e, order[index], item.maxLength)}
                  value={formik.values[order[index]]}
                />
                <WriteLength>
                  {formik.values[order[index]].length}/{item.maxLength}
                </WriteLength>
              </WriteBox>
            </WriteContainer>
          );
        })}
        <Button type="submit" text={'제출하기'} />
        {/* <button type="submit">상태 확인 테스트</button> */}
        {/* 이거 버튼은 나중에 공통 버튼으로 변경해서 가져오기요망 */}
      </form>
    </>
  );
};

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto 0 auto;
`;

const BaseTitle = styled.p`
  font-weight: 400;
  display: inline;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  margin-left: 6px;
`;
const Star = styled(BaseTitle)`
  color: #ff872d;
`;

const FileUploadBorder = styled.div`
  ${({ file, theme }) =>
    file
      ? css`
          border: 1px solid ${theme.colors.BLUE1};
        `
      : css`
          border: 1px dashed ${theme.colors.GRAY3};
        `};
  border-radius: 10px;
  margin-top: 8px;
  width: 568px;
  // height: 62px;
  padding: 16px 20px 16px 20px;
`;

const FileUploadTitle = styled(BaseTitle)`
  font-size: 20px;
  line-height: 30px;
  ${({ file, theme }) =>
    file
      ? css`
          color: ${theme.colors.BLUE1};
        `
      : css`
          color: ${theme.colors.GRAY3};
        `};
`;

const FileUploadContainer = styled(BaseContainer)`
  align-items: flex-start;
  height: 92px;
`;

const FileUploadLabel = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const FileUpload = styled.input`
  display: none;
`;

const BreakLine = styled.div`
  max-width: 1200px;
  margin: 50px auto 50px auto;
  border: 1px solid ${({ theme }) => theme.colors.GRAY1};
`;

const WriteContainer = styled(BaseContainer)`
  //  height: 380px; => 추후 피그마 수정하게 될지 모르니 일단 메모
`;

const WriteBox = styled(WriteContainer)`
  width: 100%;
  border-radius: 18px;
  margin: 16px 0 100px 0;
  padding: 30px 30px 15px 30px;
  font-weight: 400px;
  gap: 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.GRAY1};
`;

const WriteLength = styled.p`
  align-self: flex-end;
  font-size: 16px;
  line-height: 20px;
`;

const WriteArea = styled.textarea`
  color: #ffffff;
  height: 340px;
  resize: none;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-width: 0;
  font-size: 20px;
  line-height: 30px;
  margin-right: -18px;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 164px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.GRAY3};
  }
`;

export default ApplyWritePage;

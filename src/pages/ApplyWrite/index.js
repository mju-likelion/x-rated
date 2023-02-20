import { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { getApplyQuestionList, sendApplyData } from '../../api/Applywrite';
import PageMainTitle from '../../components/PageMainTitle';
import Toast from '../../components/Toast';

import Button from './../../components/Button';
import { createVaildationSchema, formikConfig, initialValues } from './FormikConfig';
const ApplyWritePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [valid, setValid] = useState(false);
  const [toast, setToast] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const personalInfo = location?.state;

  const isDevelopPart = personalInfo?.part !== 'design';

  const callbackFunctionsObject = {
    navigateFunction: () => navigate('/finish'),
    setToastFunction: setToast,
    setTosatMessageFunction: setToastMessage,
    setList: setQuestionList,
  };

  useEffect(() => {
    if (!personalInfo) {
      setToast(true);
      setToastMessage('잘못된 접근입니다.');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else {
      getApplyQuestionList(personalInfo.part, callbackFunctionsObject);
    }
  }, []);

  const order = Object.keys(initialValues);

  const validationSchema = createVaildationSchema(isDevelopPart);

  const formik = useFormik({
    ...formikConfig,
    ...validationSchema,
    onSubmit: applicationInfo => {
      if (!(applicationInfo && valid)) return;
      const applyObejct = { applicationInfo, personalInfo };
      sendApplyData(applyObejct, callbackFunctionsObject);
    },
  });

  const onChange = (e, key, maxLength) => {
    if (e.target.value > maxLength) {
      return;
    }
    if (key === 'file') {
      formik.setFieldValue(key, e.currentTarget.files[0]);
      return;
    }
    formik.setFieldValue(key, e.target.value);
  };

  const getCharacterCount = (item, index) => {
    return `${formik.values[order[index]].length}/${item.maxLength}`;
  };

  const fileData = formik.values.file;

  const isvalid = () => {
    validationSchema.isValid(formik.values).then(valid => {
      if (valid) setValid(true);
      else setValid(false);
    });
  };

  useEffect(() => {
    isvalid();
  }, [formik.values]); //이거 솔직히 베스트 로직은 아닌 것 같은데 ..
  return (
    <>
      <PageMainTitle title="지원서 작성하기" />
      {isDevelopPart && (
        <>
          <FileUploadContainer>
            <FileTitle>
              HTML 혹은 CSS를 포함한 <BreakLine /> .zip 형식의 자기소개서 페이지를 첨부해 주세요.<Star>*</Star>
              {/* 왜 여기만 line-hegiht가 이상하게 먹지? */}
            </FileTitle>
            <FileUploadBorder file={fileData}>
              <FileUploadLabel htmlFor="file">
                <FileUploadTitle file={fileData}>{fileData ? `${fileData.name}` : '파일 불러오기'}</FileUploadTitle>
              </FileUploadLabel>
            </FileUploadBorder>
          </FileUploadContainer>
          <FileUpload id="file" name="file" type="file" accept=".html,.zip" onChange={e => onChange(e, 'file')} />
          <HorizontalLine />
        </>
      )}

      <WriteForm onSubmit={formik.handleSubmit}>
        {questionList?.map((item, index) => {
          return (
            <WriteContainer key={index}>
              <BaseTitle>
                {` ${index + 1}. ${item.question}`}
                <Star>*</Star>
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
                <WriteLength>{getCharacterCount(item, index)}</WriteLength>
              </WriteBox>
            </WriteContainer>
          );
        })}
        <ButtonBox>
          <Button
            type="submit"
            text={'제출하기'}
            errorMessage={valid ? null : `작성되지 않은 문항이 있거나\n 파일의 크기가 너무 큽니다.`}
          />
        </ButtonBox>
      </WriteForm>
      {toast && <Toast setToast={setToast} isSuccess={false} text={toastMessage} />}
    </>
  );
};

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 318px;
  margin: 20px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    margin: 30px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 50px auto;
    width: 1200px;
  }
`;

const BaseTitle = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.WHITE};
  margin-left: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    line-height: 20px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    line-height: 23px;
  }
`;

const BreakLine = styled.br`
  display: block;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const Star = styled(BaseTitle)`
  color: ${({ theme }) => theme.colors.ORANGE};
  margin-left: 7px;
`;

const FileTitle = styled(BaseTitle)`
  line-height: 15px;
  @media ${({ theme }) => theme.devices.TABLET} {
    line-height: 18px;
  }
`;

const FileUploadContainer = styled(BaseContainer)`
  align-items: flex-start;
  height: 86px; //이건 두줄이라서
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 76px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 92px;
  }
`;

const FileUploadBorder = styled.div`
  ${({ file, theme }) =>
    file
      ? css`
          border: 1px solid ${theme.colors.BLUE1};
        `
      : css`
          background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%235F5F5FFF' stroke-width='2' stroke-dasharray='8%2c8' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
        `};
  margin-top: 6px;
  padding: 16px;
  width: 100%;
  gap: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 8px;
    padding: 16px 20px;
  }
`;

const FileUploadTitle = styled(BaseTitle)`
  ${({ file, theme }) =>
    file
      ? css`
          color: ${theme.colors.BLUE1};
        `
      : css`
          color: ${theme.colors.GRAY3};
        `};
  font-size: 14px;
  line-height: 18px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 16px;
    line-height: 20px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 20px;
    line-height: 30px;
  }
`;

const FileUploadLabel = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;

const FileUpload = styled.input`
  display: none;
`;

const HorizontalLine = styled(BaseContainer)`
  border: 1px solid ${({ theme }) => theme.colors.GRAY1};
  border-radius: 1px;
`;

const WriteContainer = styled(BaseContainer)`
  //  height: 380px; => 추후 피그마 수정하게 될지 모르니 일단 메모
`;

const WriteForm = styled.form``;

const WriteBox = styled(WriteContainer)`
  width: 100%;
  border-radius: 18px;
  gap: 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  padding: 20px 20px 10px 20px;
  margin: 6px 0 30px 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 10px 0 50px 0;
    padding: 30px 30px 15px 30px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 16px 0 100px 0;
  }
`;

const WriteLength = styled.p`
  color: ${({ theme }) => theme.colors.GRAY2};
  align-self: flex-end;
  font-size: 14px;
  line-height: 18px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 16px;
    line-height: 20px;
  }
`;

const WriteArea = styled.textarea`
  color: ${({ theme }) => theme.colors.WHITE};
  resize: none;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-width: 0;
  height: 340px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-right: -8px;
  &:focus {
    outline: none;
  }
  &:focus ~ ${WriteLength} {
    color: ${({ theme }) => theme.colors.WHITE};
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 164px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.GRAY3};
  }

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 16px;
    line-height: 23px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    line-height: 30px;
    font-size: 20px;
    margin-right: -18px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto 100px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 50px auto 100px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 0 auto 160px auto;
  }
`;

export default ApplyWritePage;

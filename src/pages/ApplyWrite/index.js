import { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import PageMainTitle from '../../components/PageMainTitle';

import Button from './../../components/Button';
import { formikConfig, initialValues, validationSchema } from './FormikConfig';

const ApplyWritePage = () => {
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);

  const TEMP_QUESTIONS = [
    {
      id: 1,
      question:
        '저희 멋쟁이사자처럼 11기에 지원해 주심에 감사드리며, 지원자분의 지원 동기를 올해의 목표와 연관 지어 서술해 주세요.',
      maxLength: 1000,
    },
    {
      id: 2,
      question:
        '저희 멋쟁이사자처럼 11기에 지원해 주심에 감사드리며, 지원자분의 지원 동기를 올해의 목표와 연관 지어 서술해 주세요.',
      maxLength: 700,
    },
  ];
  //추후 서버 통신시에 마운트되면 문항 질문 받아서 렌더링 (props x)

  const order = Object.keys(initialValues); //이걸 임포트 받는 이유는, 파트별로 문항수가 달라서 선택해서 사용하려고

  const formik = useFormik({
    ...formikConfig,
    onSubmit: () => {
      navigate('/finish');
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

  const partTest = true; //이건 나중에 파트별로 렌더링 다르게 하는용도 입니다.

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
      {partTest && (
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
        {TEMP_QUESTIONS.map((item, index) => {
          return (
            <WriteContainer key={index}>
              <BaseTitle>
                {` ${index + 1}. ${item.question}`}
                <Star>*</Star>
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
                <WriteLength>{getCharacterCount(item, index)}</WriteLength>
              </WriteBox>
            </WriteContainer>
          );
        })}
        <ButtonBox>
          <Button type="submit" text={'제출하기'} errorMessage={valid ? null : '작성되지않은 문항이 있습니다.'} />
        </ButtonBox>
      </WriteForm>
    </>
  );
};

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const BaseTitle = styled.p`
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
  line-height: 0px;
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
  margin: 20px 16px;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 76px;
    margin: 30px 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 92px;
    margin: 50px auto;
  }
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
  margin-top: 6px;
  padding: 16px;
  max-width: 568px;
  width: 100%;
  //  height: 50px;
  gap: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
  }
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
`;

const FileUpload = styled.input`
  display: none;
`;

const HorizontalLine = styled.div`
  margin: 20px 16px;
  max-width: 1200px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY1};
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 30px 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 50px auto;
  }
`;

const WriteContainer = styled(BaseContainer)`
  //  height: 380px; => 추후 피그마 수정하게 될지 모르니 일단 메모
`;

const WriteForm = styled.form`
  margin: 0 16px;
  max-width: 1200px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 0 auto;
  }
`;

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
  @media ${({ theme }) => theme.devices.PHONE} {
    margin: 20px 0 47px 0;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 50px 0 68px 0;
    //이건 현재 피그마상으로 margin이 동일함(마진의 기준은 푸터가 아닌 채널톡)
  }
`;

export default ApplyWritePage;

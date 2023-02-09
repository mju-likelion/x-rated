import { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import PageMainTitle from '../../components/PageMainTitle';

import Button from './../../components/Button';
import { createVaildationSchema, formikConfig, initialValues } from './FormikConfig';

const ApplyWritePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [valid, setValid] = useState(false);

  const infoObject = location.state; //이것도 state로 관리를 해야되나? 한번만 받아오는 값인데

  const isDevelopPart = infoObject.part !== 'design'; //이건 나중에 파트별로 렌더링 다르게 하는용도 입니다.

  useEffect(() => {
    if (!infoObject) {
      window.alert('잘못된 접근입니다.');
      navigate('/');
    } //alert는 지양하는데, 토스트 메세지로?
    else {
      console.log(infoObject);
      // Axios.get(`/api/assets/questions/${infoObject.part}`)
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
    }
  }, []);

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
        '나의 한계점을 극복하기 위해 노력하여 달성해본 경험을 문제-과정(노력)-목표달성의 이야기로 서술해주세요.',
      maxLength: 1000,
    },
    {
      id: 3,
      question: '웹개발자의 입장에서 평소에 사용하는 서비스에서 개선해야할 점이 있다면 말씀해주세요.',
      maxLength: 1000,
    },
    {
      id: 4,
      question:
        '왜 프론트엔드 파트를 선택하게 되었고 본인이 생각하는 프로젝트 내에서 프론트엔드 파트의 역할을 말씀해주세요.',
      maxLength: 1000,
    },
    {
      id: 5,
      question: '이번 멋쟁이사자처럼 11기 활동을 통해서 얻어가고 싶은것을 말씀해주세요.',
      maxLength: 1000,
    },
  ];
  //추후 서버 통신시에 마운트되면 문항 질문 받아서 렌더링 (props x)

  const order = Object.keys(initialValues);
  //이걸 임포트 받는 이유는, 파트별로 문항수가 달라서 선택해서 사용하려고 => 조건부로 받아서 속성 부여해도 될 듯? 이건 서버연동하면 고민

  const validationSchema = createVaildationSchema(isDevelopPart);

  const formik = useFormik({
    ...formikConfig,
    ...validationSchema,
    onSubmit: value => {
      if (!valid) return;
      const sendData = [];
      sendData.push(infoObject);
      sendData.push(value);
      console.log(sendData);
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
`;

const FileUpload = styled.input`
  display: none;
`;

const HorizontalLine = styled(BaseContainer)`
  border: 1px solid ${({ theme }) => theme.colors.GRAY1};
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
  margin: 20px auto 47px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 50px auto 68px auto;
    //이건 현재 피그마상으로 margin이 동일함(마진의 기준은 푸터가 아닌 채널톡)
  }
`;

export default ApplyWritePage;

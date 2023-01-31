import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/images/404_lion.svg';

import Button from './../../components/Button';
const ApplyNotFoundPage = () => {
  return (
    <div>
      <AlertContainer>
        <LionLogo />
        <StatusFont>404</StatusFont>
        <ErrorFont>Page not found</ErrorFont>
        <AlertContentFont>
          죄송합니다. 찾으려는 페이지의 주소가 <br /> 잘못 입력되었거나 주소의 변경 혹은 <br />
          삭제로 인해 사용하실 수 없습니다.
        </AlertContentFont>
      </AlertContainer>

      <ButtonBox>
        <Button type="button" text={'메인으로'} />
      </ButtonBox>
    </div>
  );
};

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 368px;
  margin: 121px 65px 60px 65px;
`;

const LionLogo = styled(Logo)``;

const StatusFont = styled.p`
  font-size: 60px;
  font-weight: 800;
  line-height: 73px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const ErrorFont = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const AlertContentFont = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.GRAY2};
  text-align: center;
  margin-top: 40px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 146px 0;
`;

export default ApplyNotFoundPage;

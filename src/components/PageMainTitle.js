import styled from 'styled-components';

const PageMainTitle = ({ title }) => {
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
    </Container>
  );
};

export default PageMainTitle;

const MainTitle = styled.p`
  height: 56px;
  color: ${({ theme }) => theme.Colors.WTHIE};
  font-size: 40px;
  font-weight: 700;
  line-height: 56px;
  margin-left: 10px;
  @media ${({ theme }) => theme.Devices.TABLET} {
    margin: 160px auto 50px auto;
    font-size: 32px;
  }
  @media ${({ theme }) => theme.Devices.PHONE} {
    height: 36px;
    margin-left: 8px;
    font-size: 22px;
    line-height: 36px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  margin: 160px auto 100px auto;
  @media ${({ theme }) => theme.Devices.TABLET} {
    margin: 100px auto 50px auto;
  }
  @media ${({ theme }) => theme.Devices.PHONE} {
    margin: 80px auto 40px auto;
  }
`;

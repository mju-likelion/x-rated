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
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 700;
  margin-left: 24px;
  height: 36px;
  font-size: 22px;
  line-height: 36px;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-left: 26px;
    height: 56px;
    font-size: 32px;
    line-height: 56px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    margin-left: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  margin: 80px 0 40px 0;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 100px 0 50px 0;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 160px auto 100px auto;
  }
`;

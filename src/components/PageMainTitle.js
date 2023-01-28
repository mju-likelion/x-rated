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
  color: ${({ theme }) => theme.Colors.WHITE};
  font-weight: 700;

  @media ${({ theme }) => theme.Devices.PHONE} {
    margin-left: 2px;
    height: 36px;
    margin-left: 8px;
    font-size: 22px;
    line-height: 36px;
  }
  @media ${({ theme }) => theme.Devices.TABLET} {
    margin-left: 10px;
    height: 56px;
    font-size: 32px;
    line-height: 56px;
  }
  @media ${({ theme }) => theme.Devices.DESKTOP} {
    font-size: 40px;
    margin-left: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;

  @media ${({ theme }) => theme.Devices.PHONE} {
    margin: 80px auto 40px auto;
  }
  @media ${({ theme }) => theme.Devices.TABLET} {
    margin: 100px auto 50px auto;
  }
  @media ${({ theme }) => theme.Devices.DESKTOP} {
    margin: 160px auto 100px auto;
  }
`;

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
  margin-left: 8px;
  height: 36px;
  font-size: 22px;
  line-height: 36px;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-left: 10px;
    height: 56px;
    font-size: 32px;
    line-height: 56px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 318px;
  margin: 80px auto 40px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    margin: 100px auto 50px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    margin: 160px auto 100px auto;
  }
`;

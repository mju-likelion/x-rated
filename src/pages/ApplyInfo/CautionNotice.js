import styled from 'styled-components';

const CautionNotice = () => {
  return (
    <>
      <Title>지원 관련 주의사항</Title>
      <CautionList>
        <CautionText>지원서 최종 제출 후에는 지원서의 수정이 불가합니다.</CautionText>
        <CautionText>
          <span>지원서 접수 마감일에는 지원자가 몰려 지원이 어려울 수 있으니, </span>
          여유 있게 미리 제출해 주시기 바랍니다.
        </CautionText>
        <CautionText>
          <span>지원서의 내용이 사실과 다를 경우, 합격이 취소되거나 </span>전형 상의 불이익을 받을 수 있습니다.
        </CautionText>
        <CautionText>
          <p>
            <span>모든 소통은 작성하신 이메일로 이루어지니, </span>작성한 항목을 다시 한번 확인해 주세요.
          </p>
        </CautionText>
      </CautionList>
    </>
  );
};

const Title = styled.p`
  font-weight: 700;
  width: 318px;
  font-size: 14px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    font-size: 20px;
  }
`;

const CautionList = styled.ul`
  padding: 6px 0 0 20px;
  margin-top: 6px;

  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 8px 0 0 25px;
    margin-top: 10px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 10px 0 0 30px;
    margin-top: 10px;
  }
`;

const CautionText = styled.li`
  box-sizing: border-box;
  list-style-type: disc;

  color: ${({ theme }) => theme.colors.GRAY2};
  :last-child {
    p {
      color: ${({ theme }) => theme.colors.RED};
    }
    span {
      display: block;
    }
  }
  font-size: 12px;
  line-height: 20px;

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    line-height: 21px;
    :nth-child(2),
    :nth-child(3) {
      span {
        display: block;
      }
    }
    :last-child {
      span {
        display: inline;
      }
    }
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    margin-bottom: 3px;
    span {
      display: inline;
    }
    p {
      line-height: 30px;
    }
  }
`;

export default CautionNotice;

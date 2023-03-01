import styled from 'styled-components';

import { ReactComponent as AbleFindSvg } from '../../assets/images/icon_find_able.svg';
import { ReactComponent as DisableFindSvg } from '../../assets/images/icon_find_disable.svg';
import { ReactComponent as FailFindImg } from '../../assets/images/icon_find_fail.svg';
import { ReactComponent as SuccessFindImg } from '../../assets/images/icon_find_success.svg';

const ResultImage = ({ result }) => {
  switch (result) {
    case 'SUCCESS':
      return <SuccessFindIcon />;
    case 'FAIL':
      return <FailFindIcon />;
    case 'FOCUS':
      return <AbleFindIcon />;
    case 'NONFOCUS':
      return <DisableFindIcon />;
    default:
      return <></>;
  }
};

const SuccessFindIcon = styled(SuccessFindImg)`
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 30px;
    height: 64px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 38px;
    height: 80px;
  }
`;

const FailFindIcon = styled(FailFindImg)`
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 30px;
    height: 64px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 38px;
    height: 80px;
  }
`;

const AbleFindIcon = styled(AbleFindSvg)`
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 30px;
    height: 64px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 38px;
    height: 80px;
  }
`;

const DisableFindIcon = styled(DisableFindSvg)`
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 30px;
    height: 64px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 38px;
    height: 80px;
  }
`;

export default ResultImage;

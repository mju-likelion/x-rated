import { ReactComponent as Design } from '../../assets/images/icon_design.svg';
import { ReactComponent as Server } from '../../assets/images/icon_server.svg';
import { ReactComponent as Web } from '../../assets/images/icon_web.svg';

const PartImage = ({ part }) => {
  switch (part) {
    case 'WEB':
      return <Web />;
    case 'SERVER':
      return <Server />;
    case 'DESIGN':
      return <Design />;
    default:
      return <></>;
  }
};

export default PartImage;

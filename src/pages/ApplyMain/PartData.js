import { ReactComponent as Design } from '../../assets/images/icon_design.svg';
import { ReactComponent as Server } from '../../assets/images/icon_server.svg';
import { ReactComponent as Web } from '../../assets/images/icon_web.svg';

export const PART_DATA = [
  {
    image: Web,
    value: 'WEB',
    info: 'React를 활용하여 협업을 통해서 유지보수성 및 UI/UX를 고려한 실제 웹 서비스를 제공해요.',
    tool: '이것 저것',
  },
  {
    image: Server,
    value: 'SERVER',
    info: '실제 서비스에 사용되는 API 서버를 설계하고, NestJS를 통해 실제 작동하는 서버로 구현/배포해요.',
    tool: '이것 저것',
  },
  {
    image: Design,
    value: 'DESIGN',
    info: '나의 아이디어를 기획, 디자인하고 개발 파트와의 협업을 통해 실제 서비스로 만들어요.',
    tool: '이것 저것',
  },
];

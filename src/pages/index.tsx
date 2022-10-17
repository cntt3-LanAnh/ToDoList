import { LAYOUT_TYPE } from 'constants/app';
import { withAuthenticated } from 'hocs';
import { HomContainer } from 'modules/home';

const HomeAuthenticated = withAuthenticated(HomContainer);
const Index = () => <HomeAuthenticated />;

Index.layout = LAYOUT_TYPE.authenticated;

export default Index;

import { Index } from 'modules/admin/dashboard';
import { LayoutType } from 'types/app';

const Dashboard = () => {
  return <Index />;
};

Dashboard.layoutType = LayoutType.admin;

export default Dashboard;

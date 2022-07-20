import Home from './home/index';
import { DataProvider } from '../providers/DataProvider';

const IndexPage = () => {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
};
export default IndexPage;

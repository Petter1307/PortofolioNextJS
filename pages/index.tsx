import Home from './home';
import { DataProvider } from '../localprovider/DataProvider';

const IndexPage = () => {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
};
export default IndexPage;

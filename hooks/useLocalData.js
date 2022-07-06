import { useContext } from 'react';
import { DataContext } from '../localprovider/DataProvider';

const useData = () => useContext(DataContext);
export default useData;

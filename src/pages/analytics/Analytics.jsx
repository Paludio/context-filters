import { useContext, useEffect } from 'react';
import { getPhones } from '../../services/api';
import Filters from '../../components/filters/Filters';
import Header from '../../components/header/Header';
import LargeLoading from '../../components/loading/largeLoading/LargeLoading';
import Table from '../../components/table/Table';
import PhoneContext from '../../context/PhoneContext';

export default function Analytics() {
  const { loading, setLoading, setPhones } = useContext(PhoneContext);

  useEffect(() => {
    const requestAPI = async () => {
      const result = await getPhones();
      setPhones(result);
      setLoading(false);
    };

    requestAPI();
  }, [setLoading, setPhones]);
  return (
    <>
      <Header />
      <Filters />
      {
        loading
          ? <LargeLoading />
          : <Table />
      }
    </>
  );
}

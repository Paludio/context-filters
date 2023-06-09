import { useContext, useEffect } from 'react';
import Filters from '../../components/filters/Filters';
import Header from '../../components/header/Header';
import LargeLoading from '../../components/loading/largeLoading/LargeLoading';
import Table from '../../components/table/Table';
import PhoneContext from '../../context/PhoneContext';

export default function Analytics() {
  const { loading, setLoading, setPhones, setKeys } = useContext(PhoneContext);

  // useEffect(() => {
  //   const requestAPI = async () => {
  //     const result = await getPhones();
  //     const keys = Object.keys(result[0]).filter((key) => key !== 'id');
  //     setPhones(result);
  //     setKeys(keys);
  //     setLoading(false);
  //   };

  //   requestAPI();
  // }, [setLoading, setPhones]);

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

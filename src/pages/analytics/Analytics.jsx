import Filters from '../../components/filters/Filters';
import Header from '../../components/header/Header';
import LargeLoading from '../../components/loading/largeLoading/LargeLoading';
import Table from '../../components/table/Table';

export default function Analytics() {
  const loading = false;
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

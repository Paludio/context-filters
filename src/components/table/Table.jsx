import './table.css';
import { useCallback, useContext, useEffect } from 'react';
import PhoneContext from '../../context/PhoneContext';
import FilterContext from '../../context/FilterContext';

const menosUm = -1;

export default function Table() {
  const { phones, setPhones } = useContext(PhoneContext);
  const { searchInput, selectInput, sortInput } = useContext(FilterContext);

  const newArray = phones.filter((phone) => {
    if (selectInput === '') {
      return phone
        .name.toLowerCase().includes(searchInput.toLowerCase());
    }

    console.log(phone[selectInput]);

    return phone[selectInput].toLowerCase().includes(searchInput.toLowerCase());
  });

  const verifyInput = (a, b) => (
    a.name.toLowerCase() < b.name.toLowerCase() === true ? menosUm : 0);

  const verifyInputDesc = (a, b) => (
    a.name.toLowerCase() > b.name.toLowerCase() === true ? menosUm : 0);

  const sortArray = useCallback((param) => {
    if (param === 'asc') {
      newArray.sort((a, b) => {
        if (selectInput === '') return verifyInput(a, b);

        return a[selectInput].toLowerCase() < b[selectInput].toLowerCase() === true
          ? menosUm : 0;
      });

      setPhones(newArray);
    }

    if (param === 'desc') {
      newArray.sort((a, b) => {
        if (selectInput === '') return verifyInputDesc(a, b);

        return a[selectInput].toLowerCase() > b[selectInput].toLowerCase() === true
          ? menosUm : 0;
      });

      setPhones(newArray);
    }
    return newArray;
  }, [newArray, selectInput, setPhones]);

  useEffect(() => {
    sortArray(sortInput);
  }, [sortInput]);

  return (
    <table className="table">
      <thead>
        <tr className="hover:bg-white">
          <th>Nome</th>
          <th>Marca</th>
          <th>Preço</th>
          <th>Cor</th>
          <th>Armazenamento</th>
          <th>Camera</th>
          <th>Tela</th>
          <th className="border-r-0">S.O</th>
        </tr>
      </thead>
      <tbody>
        {
          newArray.map((phone) => (
            <tr key={ phone.id }>
              <td>{phone.name}</td>
              <td>{phone.brand}</td>
              <td>{`R$ ${Number(phone.price).toFixed(2)}`}</td>
              <td>{phone.color}</td>
              <td>{phone.storage}</td>
              <td>{phone.camera}</td>
              <td>{phone.screen}</td>
              <td>{phone.operatingSystem}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

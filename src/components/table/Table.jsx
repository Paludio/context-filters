import './table.css';
import phones from '../../data/phones';

export default function Table() {
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
          phones.map((phone) => (
            <tr key={ phone.id }>
              <td>{phone.name}</td>
              <td>{phone.brand}</td>
              <td>{`R$ ${phone.price.toFixed(2)}`}</td>
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

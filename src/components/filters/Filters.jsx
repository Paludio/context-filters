import {
  Input,
  Select,
  Option,
  Radio,
} from '@material-tailwind/react';
import { useContext } from 'react';
import FilterContext from '../../context/FilterContext';
import PhoneContext from '../../context/PhoneContext';

export default function Filters() {
  const { keys } = useContext(PhoneContext);
  const {
    searchInput,
    setSearchInput,
    selectInput,
    setSelectInput,
    setSortInput,
  } = useContext(FilterContext);

  return (
    <form className="flex items-center justify-around mt-20">
      <fieldset>
        <label htmlFor="filter-input">
          <Input
            id="filter-input"
            size="lg"
            label="Type your search"
            type="text"
            name="searchInput"
            value={ searchInput }
            onChange={ (e) => setSearchInput(e.target.value) }
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="field-select">
          <Select
            name="selectInput"
            id="field-select"
            label={ keys.length === 0 ? 'Carregando...' : 'Select a field' }
            value={ selectInput }
            onChange={ (e) => setSelectInput(e) }
          >
            {
              keys.length === 0
                ? (
                  <Option
                    className="rounded-lg bg-white"
                  >
                    Carregando...
                  </Option>
                )
                : (
                  keys.map((key) => (
                    <Option
                      key={ key }
                      value={ key }
                      className="rounded-lg bg-white"
                    >
                      {key}
                    </Option>
                  ))
                )
            }
          </Select>
        </label>
      </fieldset>
      <fieldset>
        <Radio
          type="radio"
          name="sort"
          value="asc"
          label="Crescente"
          onClick={ (e) => setSortInput(e.target.value) }
        />
        <Radio
          type="radio"
          name="sort"
          value="desc"
          label="Descendente"
          onClick={ (e) => setSortInput(e.target.value) }
        />
      </fieldset>
    </form>
  );
}

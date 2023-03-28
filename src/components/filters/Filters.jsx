import {
  Input,
  Select,
  Option,
  Radio,
} from '@material-tailwind/react';

export default function Filters() {
  return (
    <form className="flex items-center justify-around mt-20">
      <fieldset>
        <label htmlFor="filter-input">
          <Input
            id="filter-input"
            size="lg"
            label="Type your search"
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="field-select">
          <Select
            name="field"
            id="field-select"
            label="Field"
          >
            <Option
              className="rounded-lg bg-white"
            >
              Field
            </Option>
          </Select>
        </label>
      </fieldset>
      <fieldset>
        <Radio
          type="radio"
          id="asc-radio"
          name="sort"
          label="Crescente"
        />
        <Radio
          type="radio"
          id="desc-radio"
          name="sort"
          label="Descendente"
        />
      </fieldset>
    </form>
  );
}

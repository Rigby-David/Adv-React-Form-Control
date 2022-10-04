import useSearchForm from '../Hooks/use-search-form';
import {
  InputControl
} from '../Projects/Forms/FormControl.jsx';

export default function SearchForm({ onsubmit }) {
  const { pokemon, setPokemon, type_1, setType_1 } = useSearchForm();

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onsubmit(formDataObject);
  };

  return (
    <form onSubmit={formSubmit}>

      <InputControl
        label="Search by Poke'mon name"
        type="text"
        name="pokemon"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
    </form>
  );
}

import useSearchForm from '../Hooks/use-search-form';
import {
  InputControl
} from '../Projects/Forms/FormControl.jsx';
//catches onSubmit
export default function SearchForm() {
  const { pokemon, setPokemon } = useSearchForm();
  // , type_1, setType_1
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

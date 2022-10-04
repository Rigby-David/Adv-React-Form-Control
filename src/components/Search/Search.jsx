import useSearchResults from '../Hooks/use-search-results';
import { FormButton } from '../Projects/Forms/FormControl';
import SearchForm from './SearchForm.jsx';

export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    pokemon,
    setPokemon,
    searchResults,
    searchPokedex,
  } = useSearchResults();
  return (
    <section>
      <SearchForm
        pokemon={pokemon}
        setPokemon={setPokemon}
        onsubmit={searchPokedex}
      />
      <FormButton/>
    </section>
  );
}

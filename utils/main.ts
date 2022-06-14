export const goToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const pokemonSpeciesApiCall = (id: number, setState: any): any => {
  //this will do an api call and return the result of the Api call

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    .then((data) => data.json())
    .then((data) => setState(data));
};

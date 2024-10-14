export default class IDs {
  constructor() {
    this.previousIDs = [];
    this.currentIDs = [];
  }

  reset() {
    this.currentIDs = [];
    this.previousIDs = [];
  }

  addIDs() {
    const cardCount = !this.currentIDs.length ? 4 : this.currentIDs.length + 2;

    const newIDs = [];

    for (let i = 0; i < cardCount; i++) {
      const id = Math.floor(Math.random() * 1025);
      if (this.previousIDs.includes(id)) {
        i--;
      } else {
        this.previousIDs.push(id);
        newIDs.push(id);
      }
    }

    this.currentIDs = newIDs;
  }

  getPokemons(setPokemons) {
    Promise.all(
      this.currentIDs.map((id) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
          (response) => {
            return response.json();
          },
        );
      }),
    ).then((values) => {
      function cap(string) {
        const result = string.charAt(0).toUpperCase() + string.slice(1);
        return result;
      }
      const pokemons = values.map((value) => {
        return {
          name: cap(value.name),
          img: value.sprites.front_default,
          wasClicked: false,
          id: value.id,
        };
      });

      setPokemons(pokemons);
    });
  }
}

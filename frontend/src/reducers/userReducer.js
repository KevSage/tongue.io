const initialState = {
  user: {},
  nation: {},
  phrasebooks: [],
  entries: [],
  phrases: [],
  active_phrasebook: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      let entries = [];
      let phrases = [];

      action.value.phrasebooks.map(book => {
        book.entries.map(entry => {
          entries.push(entry);
        });
      });
      action.value.phrasebooks.map(book => {
        book.phrases.map(phrase => {
          phrases.push(phrase);
        });
      });
      return {
        ...state,
        user: action.value,
        nation: action.value.nation,
        phrasebooks: action.value.phrasebooks,
        entries: entries,
        phrases: phrases
      };
    case "SET_ACTIVE_PHRASEBOOK":
      return {
        ...state,
        active_phrasebook: action.value
      };
    case "SAVE_ENTRY":
      return {
        ...state,
        entries: [...state.entries, action.value]
      };
    case "ADD_PHRASEBOOK":
      return {
        ...state,
        phrasebooks: [...state.phrasebooks, action.value]
      };
    case "DELETE_PHRASEBOOK":
      console.log("hit reducer");
      let newestArr = [];
      fetch("http://localhost:3000/phrasebooks/" + action.value, {
        method: "DELETE"
      })
        .then(res => res.text())
        .then(data => {
            console.log(data)
        //   let newArray = [...state.phrasebooks];
        //   let newestArr = newArray.filter(
        //     book => book.id !== parseInt(action.value)
        //   );
          
        });
        newestArr = state.phrasebooks.filter(book => book.id !== parseInt(action.value))
      return {
        ...state,
        phrasebooks: newestArr
      };

    default:
      return state;
  }
};

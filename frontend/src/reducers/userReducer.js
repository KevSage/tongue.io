const initialState = {
  user: {},
  nation: {},
  phrasebooks: [],
  entries: [],
  phrases: [],
  active_phrasebook: {},
  active_phrase: {}
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
    case "SET_ACTIVE_PHRASE":
      return {
        ...state,
        active_phrase: action.value
      };
    case "SAVE_ENTRY":
      return {
        ...state,
        phrasebooks: action.value
      };
    case "ADD_PHRASEBOOK":
      let newPhrasebook = this;
      return {
        ...state,
        phrasebooks: [...state.phrasebooks, action.value]
      };
    case "ADD_PHRASE":
      let newActivePhrasebook = { ...state.active_phrasebook };
      if (newActivePhrasebook.phrases) {
        newActivePhrasebook.phrases.push(state.active_phrase);
      } else {
        newActivePhrasebook = { ...newActivePhrasebook, phrases: [] };
        // newActivePhrasebook = { ...newActivePhrasebook, entries: []};
        newActivePhrasebook.phrases = [
          ...newActivePhrasebook.phrases,
          state.active_phrase
        ];
        // newActivePhrasebook.entries.push(state.active_phrase);
      }

      // console.log(action.value);
      console.log(state.active_phrasebook);
      console.log(newActivePhrasebook);
      return {
        ...state,
        active_phrasebook: newActivePhrasebook
      };
    case "DELETE_PHRASEBOOK":
      console.log("hit reducer");
      let newestArr = [];
      fetch("http://localhost:3000/phrasebooks/" + action.value, {
        method: "DELETE"
      })
        .then(res => res.text())
        .then(data => {
          console.log(data);
        });
      newestArr = state.phrasebooks.filter(
        book => book.id !== parseInt(action.value)
      );
      return {
        ...state,
        phrasebooks: newestArr
      };
    case "DELETE_PHRASE":
      console.log(action.value);

      fetch("http://localhost:3000/phrases/" + action.value.target.id, {
        method: "DELETE"
      })
        .then(res => res.text())
        .then(data => {
          console.log(data);
        });
      let newArray = state.active_phrasebook.phrases.filter(
        phrase => phrase.id !== parseInt(action.value.target.id)
      );
      console.log(state.active_phrasebook);
      console.log(newArray);
      let new_obj = Object.assign({}, state.active_phrasebook);
      new_obj.phrases = [...newArray];
      console.log(new_obj);
      return {
        ...state,
        active_phrasebook: new_obj
      };

    default:
      return state;
  }
};

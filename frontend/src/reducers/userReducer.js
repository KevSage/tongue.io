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
    case "DELETE_ENTRY":
      console.log(action.value);
      debugger;
      fetch("http://localhost:3000/entries/" + action.value.target.id, {
        method: "DELETE"
      })
        .then(res => res.text())
        .then(data => {
          console.log(data);
        });
      let newArray = state.active_phrasebook.entries.filter(
        entry => entry.id !== parseInt(action.value.target.id)
      );
      let newEntryTotal = state.entries.filter(
        entry => entry.id !== parseInt(action.value.target.id)
      );
      debugger;
      let wim = [];

      state.phrasebooks.map(book => {
        wim.push(
          book.entries.filter(
            entry => entry.id !== parseInt(action.value.target.id)
          )
        );
      });

      console.log(state.active_phrasebook);
      console.log(newArray);
      debugger;
      let new_obj = Object.assign({}, state.active_phrasebook);
      new_obj.entries = [...newArray];
      console.log(new_obj);
      // let newEntryTotal = state.entries;
      debugger;
      return {
        ...state,
        active_phrasebook: new_obj,
        entries: newEntryTotal,
        phrasebooks: wim
      };

    default:
      return state;
  }
};

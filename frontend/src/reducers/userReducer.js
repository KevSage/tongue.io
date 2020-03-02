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
    default:
      return state;
  }
};

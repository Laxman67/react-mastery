import CATEGORIES_ACTION_TYPES from './CategoryTypes';

const CATEGORY_INTITIAL_STATE = { categoriesMap: {} };

export const categoriesReducer = (
  state = CATEGORY_INTITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };

    default:
      return state;
  }
};

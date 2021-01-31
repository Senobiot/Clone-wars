export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY';
export const CHOOSE_CATEGORY_TILE = 'CHOOSE_CATEGORY_TILE';

export const chooseCategories = (value) => {
  return {
    type: CHOOSE_CATEGORY,
    value
  };
};

export const chooseCategoriesTile = (value) => {
  return {
    type: CHOOSE_CATEGORY_TILE,
    value
  };
};
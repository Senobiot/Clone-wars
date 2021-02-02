import { CHOOSE_CATEGORY } from '../actions/actionCategories';
import { CHOOSE_CATEGORY_TILE } from '../actions/actionCategories';

const initialState = {
    category: 'Все врачи',
  }

const initialStateTile = {
    categoryTile: 0
}
  
  export function categoriesReducer(state = initialState, action) {
    switch (action.type) {
      case CHOOSE_CATEGORY:
        return { ...state, category: action.value }
  
      default:
        return state
    }
  }

  export function categoriesTileReducer(state = initialStateTile, action) {
    switch (action.type) {
      case CHOOSE_CATEGORY_TILE:
        return { ...state, categoryTile: action.value }
  
      default:
        return state
    }
  }
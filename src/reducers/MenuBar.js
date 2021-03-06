const MenuBar = (state = {
  anchorEl: null,
  mobileMoreAnchorEl: null,
  categories: [],
  openDrawer: false,
  isFetching: false,
  locale: 'fr-fr',
  translationsOverride: null,
}, action) => {
  switch (action.type) {
    case 'UPDATE_MOBILE_MENU_ANCHOR': {
      return {
        ...state,
        mobileMoreAnchorEl: action.anchor,
      };
    }
    case 'UPDATE_DESKTOP_MENU_ANCHOR': {
      return {
        ...state,
        anchorEl: action.anchor,
      };
    }
    case 'UPDATE_CATEGORIES': {
      return {
        ...state,
        isFetching: false,
        categories: action.categories,
      };
    }
    case 'IS_FETCHING': {
      return {
        ...state,
        isFetching: action.flag,
      };
    }
    case 'UPDATE_LANGUAGE': {
      return {
        ...state,
        locale: action.locale,
        translationsOverride: action.translationsOverride,
      };
    }
    case 'TOGGLE_DRAWER': {
      return {
        ...state,
        openDrawer: action.toggle,
      };
    }
    default:
      return state;
  }
};

export default MenuBar;

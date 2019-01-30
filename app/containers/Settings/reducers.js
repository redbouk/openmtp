'use strict';

import { actionTypes } from './actions';
import { DEVICES_TYPE_CONST } from '../../constants';

export const initialState = {
  freshInstall: 0,
  toggleSettings: false,
  enableAutoUpdateCheck: true,
  enablePrereleaseUpdates: true,
  enableAnalytics: true,
  hideHiddenFiles: {
    [DEVICES_TYPE_CONST.local]: true,
    [DEVICES_TYPE_CONST.mtp]: true
  },

  fileExplorerListingType: {
    [DEVICES_TYPE_CONST.local]: 'grid',
    [DEVICES_TYPE_CONST.mtp]: 'grid'
  }
};

export default function Settings(state = initialState, action) {
  // eslint-disable-next-line prefer-const
  let { type, payload, deviceType = null } = action;
  switch (type) {
    case actionTypes.FRESH_INSTALL:
      return { ...state, freshInstall: payload };

    case actionTypes.TOGGLE_SETTINGS:
      return { ...state, toggleSettings: payload };

    case actionTypes.HIDE_HIDDEN_FILES:
      return {
        ...state,
        hideHiddenFiles: { ...state.hideHiddenFiles, [deviceType]: payload }
      };

    case actionTypes.FILE_EXPLORER_LISTING_TYPE:
      return {
        ...state,
        fileExplorerListingType: {
          ...state.fileExplorerListingType,
          [deviceType]: payload
        }
      };

    case actionTypes.ENABLE_AUTO_UPDATE_CHECK:
      return { ...state, enableAutoUpdateCheck: payload };

    case actionTypes.ENABLE_ANALYTICS:
      return { ...state, enableAnalytics: payload };

    case actionTypes.COPY_JSON_FILE_TO_SETTINGS:
      return { ...state, ...payload };

    default:
      return state;
  }
}

import { type, actionType, initialType } from './actionType';

const initialState: initialType = {
    recent: [],
    accessed: [],
};

export default (state = initialState, action: actionType): initialType => {
    switch (action.type) {
        case type.ALBUMS_RECENT:
            return {
                ...state,
                recent: action.recent,
            };
        case type.ALBUMS_ACCESSED:
            return {
                ...state,
                accessed: action.accessed,
            };
        default:
            return state;
    }
};

import { combineReducers } from 'redux';
import albumsReducer from '../screens/Home/store/reducer';

export default combineReducers({
    albums: albumsReducer,
});

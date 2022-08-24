import { combineReducers} from 'redux';
import { SinhVienReducer } from './reducer/sinhVienReducer';
export  const rootReducer = combineReducers({
    SinhVienReducer: SinhVienReducer
})


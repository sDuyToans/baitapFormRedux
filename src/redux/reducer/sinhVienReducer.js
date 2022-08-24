const stateDefautl = {
    thongTinSV: {
        maSV: '',
        soDT: '',
        hoTen: '',
        email: ''
    },
    arrSinhVien: [
        { maSV: 1, soDT: 123123123, hoTen: 'Nguyen Van A', email: '1234@gmail.com' },
        { maSV: 2, soDT: 123123123, hoTen: 'Nguyen Van B', email: '12345@gmail.com' },
    ],
    arrSinhVienRender: []
}
const resetFormFiedls = (FormFiedls) => {
    FormFiedls.maSV = '';
    FormFiedls.hoTen = '';
    FormFiedls.soDT = '';
    FormFiedls.email = '';
}

export const SinhVienReducer = (state = stateDefautl, action) =>{
    const { type, payload } = action;
    switch(type){
        case 'HANDLE_CHANGE':{
            const { id, value } = payload;
            const newSV = {...state.thongTinSV};
            newSV[id] = value;
            state.thongTinSV = newSV;
            return {...state}
        }
        case 'ADD_SV': {
            const { newSV } = payload;
            const newArrSinhVien = [...state.arrSinhVien];
            newArrSinhVien.push(newSV);
            state.arrSinhVien = newArrSinhVien;
            const newThongTinSV = {...state.thongTinSV};
            resetFormFiedls(newThongTinSV);
            state.thongTinSV = newThongTinSV;
            state.arrSinhVienRender = [...state.arrSinhVien];
            return {...state}
        }
        case 'DELETE': {
            const { maSV } = payload;
            const newArrSinhVien = [...state.arrSinhVien];
            state.arrSinhVien = newArrSinhVien.filter(sv => sv.maSV !== maSV);
            state.arrSinhVienRender = [...state.arrSinhVien];
            return { ...state }
        }
        case 'EDIT': {
            const { maSV } = payload;
            const newArrSinhVien = [...state.arrSinhVien];
            const svChange = newArrSinhVien.find((sv) => sv.maSV === maSV);
            let editSinhvien = {...state.thongTinSV};
            editSinhvien = {...svChange}
            state.thongTinSV = editSinhvien;
            state.arrSinhVienRender = [...state.arrSinhVien];
            return {...state}
        }
        case 'UPDATE': {
            const { editSV } = payload;
            let newArrSinhvien = [...state.arrSinhVien];
            let svChange = newArrSinhvien.find(sv => sv.maSV === editSV.maSV);
            svChange = {...editSV};
            let arrSVchanged = newArrSinhvien.map(sv => {
                if(sv.maSV === svChange.maSV){
                    sv = {...svChange}
                }
                return sv;
            });
            state.arrSinhVien = arrSVchanged;
            const newThongTinSV = {...state.thongTinSV};
            resetFormFiedls(newThongTinSV);
            state.thongTinSV = newThongTinSV;
            state.arrSinhVienRender = [...state.arrSinhVien];
            return {...state};
        }
        case 'SEARCH': {
            const { value } = payload;
            const clArrSinhVien = [...state.arrSinhVien];
            const filterCloneArrSinhVien = clArrSinhVien.filter(sv => sv.hoTen.toLowerCase().includes(value));
            state.arrSinhVienRender = [...filterCloneArrSinhVien];
            return {...state};
        }
        default: 
        state.arrSinhVienRender = [...state.arrSinhVien]
        return {...state};
    }
}
import React, { Component } from "react";
import { connect } from "react-redux";

class FormValidation extends Component {
  render() {
    const { thongTinSV } = this.props;
    const { maSV, soDT, hoTen, email } = thongTinSV;
    const handleChange = (event) => {
        const { id, value } = event.target;
        const action = {
            type: 'HANDLE_CHANGE',
            payload: { id: id, value: value}
        }
        this.props.dispatch(action);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const action = {
            type: 'ADD_SV',
            payload: { newSV: thongTinSV},
        }
        this.props.dispatch(action);
    }
    
    return (
      <div className="form-container">
        <div className="container">
          <div className="card">
            <div className="card-title bg-dark text-white p-3">
              <span>Thông tin sinh viên</span>
            </div>
            <form className="card-body row" onSubmit={handleSubmit} >
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="maSV" className="form-label">
                    Mã SV
                  </label>
                  <input type="text" className="form-control" id="maSV" value={maSV} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="soDT" className="form-label">
                    Số ĐT
                  </label>
                  <input type="number" className="form-control" id="soDT" value={soDT} onChange={handleChange}/>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="hoTen" className="form-label">
                    Họ Tên
                  </label>
                  <input type="text" className="form-control" id="hoTen" value={hoTen} onChange={handleChange}/>
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" value={email} onChange={handleChange}/>
                </div>
              </div>
              <button className="btn btn-success col-2 mb-3 me-3">Thêm sinh viên</button>
              <button type="button" className="btn btn-success col-2 mb-3" onClick={() => {
                const action = {
                    type: 'UPDATE',
                    payload: {
                       editSV: thongTinSV
                    }
                }
                this.props.dispatch(action);
              }}>Cập nhật</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    thongTinSV: state.SinhVienReducer.thongTinSV
});


export default connect(mapStateToProps)(FormValidation);

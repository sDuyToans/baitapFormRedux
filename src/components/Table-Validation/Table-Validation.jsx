import React, { Component } from "react";
import { connect } from "react-redux";

class TableValidation extends Component {
  render() {
    const { arrSinhVienRender } = this.props;
    const onSearchChange = (event) =>{
        const { value } = event.target;
        const action = {
            type: 'SEARCH',
            payload: { value: value}
        }
        this.props.dispatch(action);
    }
    const renderSinhVien = () => {
      return arrSinhVienRender.map((sv, index) => {
        const { maSV, soDT, hoTen, email } = sv;
        return (
          <tr key={index}>
            <td>{maSV}</td>
            <td>{hoTen}</td>
            <td>{soDT}</td>
            <td>{email}</td>
            <td>
              <button
                className="btn btn-danger mx-2"
                onClick={() => {
                  const action = {
                    type: "DELETE",
                    payload: { maSV: maSV },
                  };
                  this.props.dispatch(action);
                }}
              >
                Xóa
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  const action = {
                    type: "EDIT",
                    payload: { maSV: maSV },
                  };
                  this.props.dispatch(action);
                }}
              >
                Chỉnh sửa
              </button>
            </td>
          </tr>
        );
      });
    };
    return (
      <div className="talbe-container mt-4">
        <div className="container">
          <table className="table">
            <thead className="bg-dark text-white">
              <tr>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th></th>
                <th>
                  <div className="search-form">
                    <input
                      className="form-control me-2 mb-3"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={onSearchChange}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>{renderSinhVien()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSinhVien: state.SinhVienReducer.arrSinhVien,
  arrSinhVienRender: state.SinhVienReducer.arrSinhVienRender
});

export default connect(mapStateToProps)(TableValidation);

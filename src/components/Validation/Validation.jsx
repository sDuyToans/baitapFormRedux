import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormValidation from '../Form-Validation/Form-Validation'
import TableValidation from '../Table-Validation/Table-Validation'

class Validation extends Component {
  render() {
    return (
      <div className="validation-container">
        <div className="container">
            <FormValidation/>
            <TableValidation/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Validation)
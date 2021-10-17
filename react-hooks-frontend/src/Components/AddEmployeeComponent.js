import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useHistory, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailid, setEmailid] = useState('')
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, emailid }

        if (id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                history.push('/employees');

            }).catch(error => {
                console.log(error)
            })


        } else {
            EmployeeService.createEmployee(employee).then((response) => {

                console.log(response.data);
                history.push('/employees');

            }).catch(error => {
                console.log(error)
            })
        }

    }



    useEffect((id) => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailid(response.data.emailid)
        }).catch(error => {
            console.log(error)
        })

    }, [])

    const title = () => {
        if (id) {
            return <h2 className="text-center"> Update Employee</h2>

        } else {
            return <h2 className="text-center"> Add Employee</h2>
        }
    }
    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card-col-md-5 offset-md-2 offset-md-2">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-table"> First Name: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} >

                                    </input>

                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-table"> Last Name: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} >

                                    </input>

                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-table"> EmailId: </label>
                                    <input
                                        type="email"
                                        placeholder="Enter email ID"
                                        name="emailid"
                                        className="form-control"
                                        value={emailid}
                                        onChange={(e) => setEmailid(e.target.value)} >

                                    </input>

                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}> Submit  </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel</Link>
                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddEmployeeComponent

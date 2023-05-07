import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            fullname: "",
            email: "",
            password: "",
            nin: "",
            accountNumber: "",
            address: "",
            phoneNumber: "",
            bvn: "",
            errors: {}
        };
    }

    onChange = (e: any) => {
        this.setState({[e.target.id]: e.target.value})
        console.log(e.target.value)
    }

    onSubmit = (e: any) => {
        e.prevent.default();

        const newUser = {
            username: this.state.username,
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            nin: this.state.nin,
            accountNumber: this.state.accountNumber,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            bvn: this.state.bvn,
        };
        console.log(newUser);
    }

    render() {
        return(
            <div className="container p-5">
                <div className="">
                    <div className="col s8 offset-s2">
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate>
                            <div className='row'>
                                <div className='left col-md-6'>
                                    <div className="input-field col s12">
                                    <label htmlFor="name"></label>
                                        <input
                                            id="username"
                                            type="text"
                                            placeholder='Username'
                                            onChange={this.onChange}
                                            value={this.state.username}
                                        />
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            id="fullname"
                                            type="text"
                                            placeholder='Fullname'
                                            onChange={this.onChange}
                                            value={this.state.fullname}
                                        />
                                        <label htmlFor="name"></label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            placeholder='Email'
                                            id="email"
                                            type="email"
                                        />
                                        <label htmlFor="email"></label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            placeholder='Password'
                                            id="password"
                                            type="password"
                                        />
                                        <label htmlFor="password"></label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            placeholder='NIN'  
                                            id="nin"
                                            type="text"
                                        />
                                        <label htmlFor="text"></label>
                                    </div>
                                </div>
                                <div className='right col-md-6'>
                                    <div className="input-field col s12">
                                        <input
                                            placeholder='Account Number'
                                            id="accnumber"
                                            type="text"
                                        />
                                        <label htmlFor="name"></label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            placeholder='Address'
                                            id="address"
                                            type="text"
                                        />
                                        <label htmlFor="name"></label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            placeholder='Phone Number'
                                            id="bvn"
                                            type="email"
                                        />
                                        <label htmlFor="email"></label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            placeholder='BVN'
                                            id="bvn"
                                            type="text"
                                        />
                                        <label htmlFor="password"></label>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                        background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)'
                                    }}
                                    type="submit"
                                    className="btn waves-effect waves-light hoverable blue accent-3"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
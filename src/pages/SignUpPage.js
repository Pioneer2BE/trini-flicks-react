import React, {useState}from 'react'
import validator from 'validator'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SignUpPage = () => {

    const signUpForm = {

        firstName:"",
        lastName:"",
        email:"",
        password:"",
        cPassword:""

    }

    const [signUpFormData, setSignUpFormData] = useState(signUpForm)

    const [signUpErrors, setSignUpErrors] = useState({})


    const signUp = (evt) => {

        evt.preventDefault();

        if(Object.keys(signUpErrors).length === 0){

            fetch(
                "http://localhost:5000/users/sign-up",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
    
                    body: JSON.stringify(signUpFormData)
                }
            )
                .then(res => res.json())
                .then((json) => {
    
                    console.log(json.message)
    
                })
                .catch(err => console.log(`Error :${err}`));
    
        }
        else{

            console.log("missed")

        }

    }

    return (
        <>
            <Navbar />
            <section className="section is-relative">
                <div className="container">
                    <div className="columns is-multiline">
                        <div className="column is-6 is-4-desktop mb-5 mr-auto">
                            <div className="py-5 has-text-centered">
                                <span className="has-text-grey-dark">Sign Up</span>
                                <h3 className="mb-5 is-size-4 has-text-weight-bold">Create new account</h3>
                                <form onSubmit={signUp}>
                                    <div className="field">
                                        <div className="mb-2 columns is-multiline">
                                            <div className="column is-6">
                                                <div className="control">
                                                    <input className={signUpErrors.fNameError ? "input is-danger" : "input"} type="text" placeholder="First Name" value={signUpFormData.firstName} 
                                                    onChange={
                                                        (evt) => {

                                                            setSignUpFormData({
                                                                ...signUpFormData, firstName: evt.target.value
                                                            })

                                                            setSignUpErrors(delete signUpErrors.fNameError)
                                                        }

                                                    }
                                                    onBlur={
                                                        (evt) => {

                                                            const firstname = evt.target.value

                                                            if(!firstname.trim()){
                                                                setSignUpErrors({
                                                                    ...signUpErrors, fNameError: "Please eter your firstname."
                                                                })
                                                            }
                                                            
                                                        }
                                                    }
                                                    />
                                                </div>
                                                {
                                                    signUpErrors.fNameError &&
                                                    <p className="help is-danger">{signUpErrors.fNameError}</p>

                                                }
                                            </div>
                                            <div className="column is-6">
                                                <div className="control">
                                                    <input className={signUpErrors.lNameError ? "input is-danger" : "input"} type="text" placeholder="Last Name" value={signUpFormData.lasttName}
                                                    onChange={
                                                        (evt) => {

                                                            setSignUpFormData({
                                                                ...signUpFormData, lastName: evt.target.value
                                                            })

                                                            setSignUpErrors(delete signUpErrors.lNameError)
                                                            
                                                        }
                                                    }
                                                    onBlur={
                                                        (evt) => {

                                                            const lastname = evt.target.value.trim()

                                                            if(!lastname){
                                                                setSignUpErrors({
                                                                    ...signUpErrors, lNameError: "Please eter your lastname."
                                                                })
                                                            }

                                                            
                                                        }
                                                    }
                                                    />
                                                </div>
                                                {
                                                    signUpErrors.lNameError &&
                                                    <p className="help is-danger">{signUpErrors.lNameError}</p>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className={signUpErrors.emailError ? "input mb-2 is-danger" : "input mb-2"} type="email" placeholder="E-mail address" value={signUpFormData.email}
                                            onChange={
                                                (evt) => {

                                                    setSignUpFormData({
                                                        ...signUpFormData, email: evt.target.value
                                                    })

                                                    setSignUpErrors(delete signUpErrors.emailError)
                                                }
                                            }
                                            
                                            onBlur={
                                                (evt) => {

                                                    const email = evt.target.value.trim();
                                                    
                                                    if(email){
                                                        
                                                        if (!validator.isEmail(email)) {

                                                            setSignUpErrors({
                                                                ...signUpErrors, emailError: "Email address is invalid."
                                                            })

                                                        }
                                                        else{

                                                            fetch(
                                                                `http://localhost:5000/users?email=${email}`,
                                                                {
                                                                    method: "GET",
                                                                    headers: {
                                                                        "Content-Type": "application/json"
                                                                    }
                                                                }
                                                            )
                                                                .then(res => res.json())
                                                                .then((json) => {

                                                                    console.log(json)

                                                                    if(json.data){
                                                                        
                                                                        setSignUpErrors({
                                                                            ...signUpErrors, emailError: json.message
                                                                        })

                                                                    }

                                                                })
                                                                .catch(err => console.log(`Error :${err}`));
                                                        }
                                                    }
                                                    
                                                }
                                            }/>
                                        </div>
                                        {
                                            signUpErrors.emailError &&
                                            <p className="help is-danger">{signUpErrors.emailError}</p>

                                        }
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className={signUpErrors.passwordError ? "input mb-3 is-danger" : "input mb-3"} type="password" placeholder="Password" value={signUpFormData.password}
                                            onChange={
                                                (evt) => {

                                                    setSignUpFormData({
                                                        ...signUpFormData, password: evt.target.value
                                                    })

                                                    setSignUpErrors(delete signUpErrors.passwordError)
                                                }
                                            }
                                            onBlur={
                                                (evt) => {

                                                    const password = evt.target.value.trim()

                                                    if(!password){
                                                        setSignUpErrors({
                                                            ...signUpErrors, passwordError: "Please enter your password."
                                                        })
                                                    }
                                                    else if(!validator.isStrongPassword(password)){
                                                        setSignUpErrors({
                                                            ...signUpErrors, passwordError: "Your password must contain at least a upper and lower case character, a number and a symbol."
                                                        })
                                                    }

                                                    
                                                }
                                            }/>
                                        </div>
                                        {
                                            signUpErrors.passwordError &&
                                            <p className="help is-danger">{signUpErrors.passwordError}</p>

                                        }
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className={signUpErrors.cPasswordError ? "input mb-3 is-danger" : "input mb-3"} type="password" placeholder="Confirm Password" value={signUpFormData.cPassword}
                                            onChange={
                                                (evt) => {

                                                    setSignUpFormData({
                                                        ...signUpFormData, cPassword: evt.target.value
                                                    })
                                                    
                                                    setSignUpErrors(delete signUpErrors.cPasswordError)
                                                }
                                            }
                                            onBlur={
                                                (evt) => {

                                                    const cPassword = evt.target.value.trim()

                                                    if(cPassword !== signUpFormData.password){
                                                        setSignUpErrors({
                                                            ...signUpErrors, cPasswordError: "Your confirm password does not match your password."
                                                        })
                                                    }
                                                }
                                            }/>
                                        </div>
                                        {
                                            signUpErrors.cPasswordError &&
                                            <p className="help is-danger">{signUpErrors.cPasswordError}</p>

                                        }
                                    </div>
                                    <button type="submit" className="button is-primary mb-3 is-fullwidth">Sign Up</button>
                                    <p className="has-text-grey-dark">
                                        <span><small>Already have an account?</small></span>
                                        <a href="#">Sign In</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="is-hidden-mobile is-hidden-desktop" style={{position: "absolute", top: 0, bottom: 0, right: 0, width: "45%", backgroundImage: "url('bulma-plain-assets/images/green-400-square.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
                <div className="is-hidden-touch" style={{position: "absolute", top: 0, bottom: 0, right: 0, width: "50%", backgroundImage: "url('bulma-plain-assets/images/green-400-square.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
            </section>
            <Footer />
        </>
    )
}

export default SignUpPage

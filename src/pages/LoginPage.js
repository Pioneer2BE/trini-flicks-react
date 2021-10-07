import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LoginPage = () => {

    const loginForm = {
        email: "",
        password: ""

    }

    const [loginFormData, setLoginFormData] = useState(loginForm)

    let history = useHistory()

    const login = (evt) => {

        evt.preventDefault();

        fetch(
            "http://localhost:5000/users/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(loginFormData)
            }
        )
            .then(res => res.json())
            .then((json) => {

                alert(json.message)
                history.push("/")

            })
            .catch(err => console.log(`Error :${err}`));

    }

    return (
        <>
            <Navbar />
            <section class="section is-relative">
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column is-6 is-4-desktop mb-5 mr-auto">
                            <div>
                                <div class="mx-auto py-5 has-text-centered">
                                    <form onSubmit={login}>
                                        <span class="has-text-grey-dark">Sign In</span>
                                        <div class="field">
                                            <div class="control">
                                                <input class="input" type="email" placeholder="E-mail address" value={loginFormData.email} onChange={
                                                    (evt) => {

                                                        setLoginFormData({
                                                            ...loginFormData, email: evt.target.value
                                                        })
                                                    }
                                                } />
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="control">
                                                <input class="input" type="password" placeholder="Password" value={loginFormData.password} onChange={
                                                    (evt) => {

                                                        setLoginFormData({
                                                            ...loginFormData, password: evt.target.value
                                                        })
                                                    }
                                                } />
                                            </div>
                                        </div>
                                        <button class="button is-primary mb-4 is-fullwidth" >Get Started</button>
                                        <a class="mb-5 is-inline-block" href="#"><small>Forgot password?</small></a>
                                        <a class="button is-light mb-2 is-flex is-justify-content-center is-align-items-center is-fullwidth" href="#">
                                            <img class="image mr-2" style={{ height: '24px' }} src="../assets/img/socials/facebook.svg" alt="" />
                                            <span class="has-text-grey-dark">Sign in with Facebook</span>
                                        </a>
                                        <a class="button is-light mb-2 is-flex is-justify-content-center is-align-items-center is-fullwidth" href="#">
                                            <img class="image mr-2" style={{ height: '24px' }} src="bulma-plain-assets/socials/twitter.svg" alt="" />
                                            <span class="has-text-grey-dark">Sign in with Twitter</span>
                                        </a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="is-hidden-mobile is-hidden-desktop" style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '45%', backgroundImage: `url('bulma-plain-assets/images/green-400-square.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div class="is-hidden-touch" style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '50%', backgroundImage: `url('bulma-plain-assets/images/green-400-square.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            </section>
            <Footer />
        </>
    )
}

export default LoginPage

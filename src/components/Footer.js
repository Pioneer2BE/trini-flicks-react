import React from 'react'

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="columns is-multiline" style={{ borderBottom: '1px solid #dee2e6' }}>
                    <div className="column is-3 mb-5">
                        <a className="mb-4 is-inline-block" href="#">
                            <img className="image" src="bulma-plain-assets/logos/plainb-logo.svg" alt="" width="96px" />
                        </a>
                        <p className="has-text-grey-dark mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div>
                            <a className="mr-3 is-inline-block" href="#">
                                <img className="mx-auto image is-fullwidth" src="bulma-plain-assets/socials/facebook.svg" />
                            </a>
                            <a className="mr-3 is-inline-block" href="#">
                                <img className="mx-auto image is-fullwidth" src="bulma-plain-assets/socials/github.svg" />
                            </a>
                            <a className="mr-3 is-inline-block" href="#">
                                <img className="mx-auto image is-fullwidth" src="bulma-plain-assets/socials/instagram.svg" />
                            </a>
                            <a className="mr-3 is-inline-block" href="#">
                                <img className="mx-auto image is-fullwidth" src="bulma-plain-assets/socials/linkedin.svg" />
                            </a>
                            <a className="is-inline-block" href="#">
                                <img className="mx-auto image is-fullwidth" src="bulma-plain-assets/socials/twitter.svg" />
                            </a>
                        </div>
                    </div>
                    <div className="column is-9">
                        <div className="columns is-multiline">
                            <div className="column is-6 is-4-desktop mb-5">
                                <h4 className="is-size-4 has-text-weight-bold mb-4">Company</h4>
                                <ul>
                                    <li className="mb-2"><a className="button is-white" href="#">About Us</a></li>
                                    <li className="mb-2"><a className="button is-white" href="#">Careers</a></li>
                                    <li className="mb-2"><a className="button is-white" href="#">Press</a></li>
                                    <li><a className="button is-white" href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="column is-6 is-4-desktop mb-5">
                                <h4 className="is-size-4 has-text-weight-bold mb-4">Pages</h4>
                                <ul>
                                    <li className="mb-2"><a className="button is-white" href="#">Login</a></li>
                                    <li className="mb-2"><a className="button is-white" href="#">Register</a></li>
                                    <li className="mb-2"><a className="button is-white" href="#">Add list</a></li>
                                    <li><a className="button is-white" href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="column is-6 is-4-desktop mb-5">
                                <h4 className="is-size-4 has-text-weight-bold mb-4">Legal</h4>
                                <ul>
                                    <li className="mb-2"><a className="button is-white" href="#">Terms</a></li>
                                    <li className="mb-2"><a className="button is-white" href="#">About Us</a></li>
                                    <li className="mb-2"><a className="button is-white" href="#">Team</a></li>
                                    <li><a className="button is-white" href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 has-text-centered">
                    <p>All rights reserved © Wireframes Corporation 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

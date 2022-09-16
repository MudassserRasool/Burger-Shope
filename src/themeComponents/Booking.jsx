import React from 'react'
import Header from './Header'

const Booking = () => {
    return (
        <div>
            <Header />
            {/* book section */}
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Book A Table
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <form action>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div>
                                        <select className="form-control nice-select wide">
                                            <option value disabled selected>
                                                How many persons?
                                            </option>
                                            <option value>
                                                2
                                            </option>
                                            <option value>
                                                3
                                            </option>
                                            <option value>
                                                4
                                            </option>
                                            <option value>
                                                5
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="btn_box">
                                        <button>
                                            Book Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="col-md-6">

                            <div className="row w-300">

                                <div className="col-lg-6 ">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl" className="w-100" height={400} allowFullScreen loading="lazy" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* end book section */}
        </div>
    )
}

export default Booking
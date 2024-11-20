import React from 'react'
import vg from '/assets/2.webp'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from 'react-icons/ai';

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>A speech topic in English could be: "The Importance of Environmental Sustainability in Modern Society," which could discuss the need for sustainable practices to protect our planet, including reducing carbon emissions, conserving resources, and promoting renewable energy.
                        Other potential speech topics include:
                        Social Issues:

                        The Impact of Social Media on Mental Health
                        Combating Cyberbullying
                        Promoting Gender Equality
                        Importance of Education for All

                        Technology:
                        Artificial Intelligence and its Implications
                        Ethical Concerns of Data Privacy
                        The Role of Technology in Healthcare </p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>

                        <div style={{ animationDelay: "0.3s" }}>
                            <incon>
                                <AiFillGoogleCircle />
                            </incon>
                            <p>Google</p>

                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <incon>
                                <AiFillAmazonCircle />
                            </incon>
                            <p>Amazon</p>

                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <incon>
                                <AiFillYoutube />
                            </incon>
                            <p>Youtube</p>

                        </div>
                        <div style={{ animationDelay: "0.1s" }}>
                            <incon>
                                <AiFillInstagram />
                            </incon>
                            <p>Instagram</p>

                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
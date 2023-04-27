import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { Link } from 'react-router-dom'

const About = () => (
    <>
        <Breadcrumbs>
            <Link to="/">Home</Link>
            About
        </Breadcrumbs>
        <section id="about" className="py-16">
            <div className="tw-container grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
                <img
                    style={{height: '450px'}}
                    alt="dining room"
                    className="object-cover rounded w-full bg-gray-100"
                    src='https://images.livemint.com/img/2022/08/25/1600x900/telemedicine_1661458642738_1661458642985_1661458642985.jpg'
                />
                <article>
                    <div>
                        <h2 className="font-bold">Our Story</h2>
                        <div className="w-24 h-1 mt-3 bg-blue-600"/>
                    </div>
                    <p className="mt-5 text-sm md:text-base lg:text-lg leading-loose">
                    Digital comfort refers to the ease and comfort that individuals experience while using digital devices or technology.
                     With the advent of technology, people can easily access information from various sources, communicate and connect 
                     with others, and carry out tasks in a more efficient and effective manner. Digital comfort is achieved when individuals
                      gain mastery over their digital devices, feel confident in using them, and find them easy to operate.
                       It enables people to navigate through the digital world seamlessly without any stress or anxiety.
                        In today's fast-paced world, digital comfort has become crucial not only for personal well-being but also for professional success.
                    </p>
                </article>
            </div>
        </section>
    </>
)

export default About
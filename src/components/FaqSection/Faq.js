import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Faq = () => {
    const [open, setOpen] = useState('1'); // Default open state for the first question

    const toggle = (id) => {
        setOpen(open === id ? undefined : id);
    };

    // FAQ data
    const faqData = [
        {
            id: '1',
            question: 'Whom to Contact?',
            answer: 'For further clarifications, you can always feel free to reach our Otomatiks Office through Phone: 0416-3554608 / +91-90432 09448 or by Mail at: robotica25@otomatiks.in'
        },
        {
            id: '2',
            question: 'What are the Timings?',
            answer: 'The entire day of competition is split into two phases: the Working Model Competition from 09:00 AM to 01:00 PM, and the Robo-Race Competition from 12:00 PM to 03:00 PM.'
        },
        {
            id: '3',
            question: 'Is Accommodation Provided?',
            answer: 'Accommodation is not part of the registration fees. It will be provided if needed at additional charges. Kindly reach us at Phone: 0416-3554608 / +91-90432 09448 or by Mail at: robotica25@otomatiks.in.'
        },
        {
            id: '4',
            question: 'How to Register?',
            answer: 'Visit the Robotica website for registration details and follow the outlined steps to register your child.'
        },
        {
            id: '5',
            question: 'Benefits of Participation?',
            answer: 'Robotica enhances critical thinking, teamwork, and technical skills while providing real-world challenges and networking opportunities.'
        },
        {
            id: '6',
            question: 'Is Prior Experience Necessary?',
            answer: 'No, Robotica accommodates various experience levels, categorizing events by age or grade.'
        },
        {
            id: '7',
            question: 'Is It Only for Robotics Career?',
            answer: 'Robotica is for all students, fostering interests in technology and problem-solving, not just those pursuing a robotics career.'
        },
        {
            id: '8',
            question: 'Interaction with Professionals?',
            answer: 'Certain Robotica events may include opportunities for students to interact with industry professionals or mentors.'
        },
        {
            id: '9',
            question: 'Parental Involvement?',
            answer: 'Parents can support by attending, volunteering, or joining support groups, staying informed about the competition.'
        },
        {
            id: '10',
            question: 'Safety Measures?',
            answer: 'Robotica prioritizes safety with qualified supervision, strict guidelines, provided safety equipment, and secure venues.'
        }
    ];

    return (
        <section className="service_details_section section_space bg-white">
            <div className="container">
                <h2 className="heading_block text-center text-primary">
                    Frequently Asked Questions
                </h2>
                <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                    {faqData.map(({ id, question, answer }) => (
                        <AccordionItem className="accordion-item" key={id}>
                            <AccordionHeader targetId={id}>
                                {question}
                            </AccordionHeader>
                            <AccordionBody accordionId={id} className='acc_body'>
                                <p className="m-0">{answer}</p>
                            </AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Faq;
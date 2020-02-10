import React from 'react';
import { Timeline } from 'antd';

const { Item } = Timeline;

const experiences = [
    {
        current: true,
        position: 'Senior Software Engineer',
        date: 'December 2019 - now',
        company: 'Elsevier',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n' +
            'beatae vitae dicta sunt explicabo.'
    },
    {
        current: false,
        position: 'Software Engineer III',
        date: 'January 2018 - December 2019',
        company: 'Elsevier',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n' +
            'beatae vitae dicta sunt explicabo.'
    },
    {
        current: false,
        position: 'Junior Software Engineer',
        date: 'April 2016 - December 2017',
        company: 'Workshare',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n' +
            'beatae vitae dicta sunt explicabo.'
    },
    {
        current: false,
        position: 'Front-End and Mobile Developer',
        date: 'November 2012 - June 2014',
        company: 'Playwear - Moovi',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n' +
            'beatae vitae dicta sunt explicabo.'
    }
];

const getWorkExperience = ({ current, position, date, company, description }) => (
    <Item color={current ? "green" : "white"}>
        <div className="work-experience">
            <p
                className="work-title">
                <span className={"position"}>{ position } </span>
                <span className={"company"}>@{ company }</span>
                <br/>
                <span className={"date"}>{ date } </span>
            </p>
            <p className="work-description">
                { description }
            </p>
        </div>
    </Item>
);

export default () => (
    <div className="work-experience-timeline">
        <Timeline>
            { experiences.map(getWorkExperience)}
        </Timeline>
    </div>
)

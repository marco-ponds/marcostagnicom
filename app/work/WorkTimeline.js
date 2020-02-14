import React from 'react';
import { Timeline, Tag, Icon } from 'antd';
import {
    BABEL,
    ROLLUP,
    WEBPACK,
    ES6,
    HAPIJS,
    SASS,
    NODEJS,
    GOCD,
    AWS,
    BACKBONEJS,
    REACT,
    JAVA,
    JENKINS,
    UNITY
} from './constants';

const { Item } = Timeline;

const experiences = [
    {
        current: true,
        position: 'Senior Software Engineer',
        promotion: true,
        date: 'December 2019 - now',
        company: 'Elsevier',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n' +
            'beatae vitae dicta sunt explicabo.',
        technologies: [BABEL, ROLLUP, WEBPACK, REACT, ES6, SASS, NODEJS, JAVA, HAPIJS, AWS, GOCD]
    },
    {
        current: false,
        position: 'Software Engineer III',
        promotion: false,
        date: 'January 2018 - December 2019',
        company: 'Elsevier',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n' +
            'beatae vitae dicta sunt explicabo.',
        technologies: [BABEL, ROLLUP, WEBPACK, REACT, ES6, SASS, NODEJS, JAVA, HAPIJS, AWS, GOCD]
    },
    {
        current: false,
        position: 'Junior Software Engineer',
        promotion: false,
        date: 'April 2016 - December 2017',
        company: 'Workshare',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n' +
            'beatae vitae dicta sunt explicabo.',
        technologies: [BABEL, WEBPACK, ES6, SASS, NODEJS, JAVA, REACT, BACKBONEJS, JENKINS]
    },
    {
        current: false,
        position: 'Front-End Engineer (internship)',
        promotion: false,
        date: 'September 2015 - April 2016',
        company: 'Expert System SPA',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n' +
            'beatae vitae dicta sunt explicabo.',
        technologies: [ES6, SASS, NODEJS]
    },
    {
        current: false,
        position: 'Front-End and Mobile Developer',
        promotion: false,
        date: 'November 2013 - June 2014',
        company: 'Playwear - Moovi',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n' +
            'beatae vitae dicta sunt explicabo.',
        technologies: [ES6, SASS, NODEJS, JAVA, UNITY]
    }
];

const getTechnologiesTags = (technologies) => (
    technologies.map(({ type, name }) => (
        <Tag className={type}>{name}</Tag>
    ))
);

const getWorkExperience = ({ current, position, promotion, date, company, description, technologies}) => (
    <Item color={current ? "green" : "white"}>
        <div className="work-experience">
            <p className="work-title">
                { promotion ? <Icon type="arrow-up" /> : null }
                <span className={"position"}> { position } </span>
                <span className={"company"}>@{ company }</span>
                <br/>
                <span className={"date"}>{ date } </span>
            </p>
            <p className="work-description">
                { description }
            </p>
            <div className='technologies-tags'>
                { getTechnologiesTags(technologies) }
            </div>
        </div>
    </Item>
);

export default () => (
    <div className="work-experience-timeline-container">
        <Timeline>
            { experiences.map(getWorkExperience)}
        </Timeline>
    </div>
)

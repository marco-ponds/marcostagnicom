import React from 'react';
import {Card, Icon, Tag} from 'antd';

const { Meta } = Card;

const getMetaTitle = (title, url) => (
    <a href={url}>{title}</a>
);

const getTechnologiesTags = (technologies) => {
    return <div className="technologies-tags">
        {technologies.map(({ type, name }) => (
            <Tag className={type}>{name}</Tag>
        ))}
    </div>
};

export default ({ name, url, technologies, cover }) => (
    <Card
        style={{ width: 300 }}
        cover={<img alt={name} src={cover}/>}>
        <Meta
            avatar={<Icon type="code"/>}
            title={getMetaTitle(name, url)}
            description={getTechnologiesTags(technologies)}
        />
    </Card>
)

import React from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;

const getMetaTitle = (title, url) => (
    <a href={url}>{title}</a>
)

export default ({ name, url, description, cover }) => (
    <Card
        style={{ width: 300 }}
        cover={<img alt={name} src={cover}/>}>
        <Meta
            avatar={<Icon type="code"/>}
            title={getMetaTitle(name, url)}
            description={description}
        />
    </Card>
)

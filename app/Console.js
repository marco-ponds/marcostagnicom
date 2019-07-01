import React from 'react';
import { Icon } from 'antd';
import Terminal from 'react-console-emulator'

import './console.scss';

const Console = () => {

    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: function () {
                return `${Array.from(arguments).join(' ')}`
            }
        }
    }

    return <div className='console-container'>
        <div className='console'>
            <ul className='toolbar'>
                <li>x</li>
                <li><Icon type="minus" /></li>
                <li><Icon type="plus" /></li>
            </ul>
            <Terminal
                className='console-window'
                contentClassName='console-content'
                inputAreaClassName='console-input'
                commands={commands}
                welcomeMessage={'Welcome!'}
                disableOnProcess
                autoFocus
                promptLabel={'guest@marcostagni.com:~$'}
            />
        </div>
    </div>
};

export default Console;

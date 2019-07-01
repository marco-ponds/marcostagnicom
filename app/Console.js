import React from 'react';
import { Icon } from 'antd';
import Terminal from 'react-console-emulator'

import './console.scss';

class Console extends React.Component {

    constructor(props) {
        super(props);

        this.terminal = undefined;
    }

    commands = () => ({
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: function () {
                return `${Array.from(arguments).join(' ')}`
            }
        },
        whoami: {
            description: 'Who am i?',
            usage: 'whoami',
            fn: () => {
                setTimeout(() => this.terminal.pushToStdout('Hello after 1 second!'), 1500);
                return 'Fetching data, please wait...';
            }
        },
        resume: {
            description: 'Downloads an updated version of my resume.',
            usage: 'resume',
            fn: () => {
                setTimeout(() => this.terminal.pushToStdout('Hello after 1 second!'), 1500);
                return 'Fetching data, please wait...';
            }
        },
        '???': {
            description: '???',
            usage: '???',
            fn: () => {
                return Math.random();
            }
        }
    })

    render() {
        return <div className='console-container'>
            <div className='console'>
                <ul className='toolbar'>
                    <li><Icon type="close" /></li>
                    <li><Icon type="minus" /></li>
                    <li><Icon type="plus" /></li>
                </ul>
                <Terminal
                    ref={(e) => this.terminal = e}
                    className='console-window'
                    contentClassName='console-content'
                    inputAreaClassName='console-input'
                    commands={this.commands()}
                    welcomeMessage={'Welcome!'}
                    disableOnProcess
                    autoFocus
                    promptLabel={'guest@marcostagni.com:~$'}
                />
            </div>
        </div>
    }
}
export default Console;

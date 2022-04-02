import React from 'react';
import calcTimeStamp from '../../../../utils/calcTimeStamp';

import './presents.scss';

const MESSAGES = [
  'Hey, nice to see you friend!',
  'Hi, How can I help you today',
  'How can I be helpful?',
  '🥷 Support is here, it\'s a honor to serve you!'
];

class Welcome extends React.Component<any, { welcomeMessage: string; }> {
  constructor(props) {
    super(props);

    this.state = {
      welcomeMessage: null
    };
  }

  componentDidMount() {
    const welcomeInx = Math.floor(Math.random() * (MESSAGES.length - 0 + 1) + 0);

    this.setState({
      welcomeMessage: MESSAGES[welcomeInx] || MESSAGES[0]
    });
  }

  _renderNinja = () => {
    return (
      <div className='senderBlock'>
        <span className='senderName'>Support</span>
        <img
          src='/assets/support.png' alt=''
          className='agent-img'
        />
      </div>
    );
  };

  _welcomeMessage = (message) => {
    return (
      <div className='rcw-response'>
        <div className='rcw-message-text'>
          <p>{message} See what I&apos;ve prepared for you:</p>
        </div>
        <span className='rcw-timestamp'>{calcTimeStamp(Date.now())}</span>
      </div>
    );
  };

  render() {
    const { welcomeMessage } = this.state;

    return (
      <div className='welcomeWrapper'>
        <div className='rcw-message agent'>
          {this._renderNinja()}
          {this._welcomeMessage(welcomeMessage)}
        </div>
      </div>
    );
  }
}

export default Welcome;

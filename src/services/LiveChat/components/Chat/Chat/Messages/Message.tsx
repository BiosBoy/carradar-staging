import React from 'react';
import calcTimeStamp from '../../../../utils/calcTimeStamp';

import './index.scss';

interface IProps {
  type: 'user' | 'agent';
  timestamp: number;
  text: string;
  error?: boolean;
}

class Message extends React.Component<IProps> {
  _renderSenderBlock = () => {
    const { type } = this.props;

    return (
      <div className='senderBlock'>
        <span className='senderName'>{type === 'user' ? 'You' : 'Support'}</span>
        {type !== 'user' ? <img src='/assets/chat.png' alt='' className='agent-img' /> : null}
      </div>
    );
  };

  render() {
    const { type, text, timestamp, error } = this.props;

    const messageSide = type === 'user' ? 'client' : 'response';

    return (
      <div className={`rcw-message ${type !== 'user' ? 'agent' : 'user'}`}>
        {this._renderSenderBlock()}
        <div className={`rcw-${messageSide}`}>
          <div className={`rcw-message-text ${error ? 'errorMessage' : ''}`}>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <span className='rcw-timestamp'>{calcTimeStamp(timestamp)}</span>
        </div>
      </div>
    );
  }
}

export default Message;

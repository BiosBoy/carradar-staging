import React from 'react';
import { connect } from 'react-redux';
import { SEND_IMG } from '../../../../constants/imgs';

import { sentMessage, writeMessage } from '../../../../controller/actions';
import { addToStore, updateStore } from '../../../../controller/helpers/localStorage';
import scrollToEnd from '../../../../utils/scrollToEnd';

import './index.scss';

interface IProps {
  value: string;
  deployMessage: ({ text, timestamp }: { text: string; timestamp: number; }) => void;
  writtingMessage: (message: string) => void;
}

class Typeform extends React.Component<IProps> {
  private _ref: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this._ref = React.createRef();
  }

  componentDidMount() {
    this._ref && this._ref.current && this._ref.current && this._ref.current.focus();
  }

  _replaceDangerousHTML = (value) => {
    const newValue = value.replace(/[^A-Za-z0-9\s!?.,]/g, '');

    return newValue;
  };

  _handleChange = ({ target }) => {
    const { writtingMessage } = this.props;

    const isDangerValue = target.value === ' ' || /^ *$/gi.test(target.value);

    const currentValue = isDangerValue ? '' : target.value;
    const normalizedValue = this._replaceDangerousHTML(currentValue);

    writtingMessage(normalizedValue);
    updateStore({ storeKey: 'chat-current-input', storeData: normalizedValue });
  };

  _handleKeyDownSentMessage = (e) => {
    if (e.keyDown !== 13) {
      return;
    }

    this._handleSentMessage(e);
  };

  _handleSentMessage = (e) => {
    e.preventDefault();

    const { value, deployMessage } = this.props;

    if (!value || /^ *$/gi.test(value)) {
      return;
    }

    deployMessage({ text: value, timestamp: Date.now() });
    addToStore({ storeKey: 'chat-data', storeData: { type: 'user', text: value, timestamp: Date.now() } });
    scrollToEnd({ withDelay: true });
  };

  render() {
    const { value } = this.props;

    return (
      <form className='rcw-sender'>
        <input
          ref={this._ref}
          value={value}
          type='text'
          id='input'
          className='rcw-new-message'
          name='message'
          placeholder='Type a message...'
          autoComplete='off'
          onChange={this._handleChange}
          onKeyDown={this._handleKeyDownSentMessage}
        />
        <button
          type='submit' className={`rcw-send ${value ? 'active' : ''}`}
          onClick={this._handleSentMessage}
        >
          <img
            src={SEND_IMG} className='rcw-send-icon'
            alt='Send'
          />
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.chat.showChat,
  value: state.chat.currentMessage
});

const mapDispatchToProps = {
  deployMessage: sentMessage,
  writtingMessage: writeMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Typeform);

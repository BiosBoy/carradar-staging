/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';

import { sentMessage } from '../../../../controller/actions';
import { addToStore } from '../../../../controller/helpers/localStorage';
import scrollToEnd from '../../../../utils/scrollToEnd';

import './presents.scss';

interface IProps {
  deployMessage: ({ text, timestamp }: { text: string; timestamp: number; }) => void;
}

const QUESTIONS = ['How do I apply?', 'How do I reapply?', 'How much can I borrow?', 'How do I become eligible?'];

class Presets extends React.Component<IProps> {
  _handleClick = ({ target }) => {
    const { dataset } = target;
    const { deployMessage } = this.props;

    deployMessage({ text: dataset.text, timestamp: Date.now() });
    addToStore({ storeKey: 'chat-data', storeData: { type: 'user', text: dataset.text, timestamp: Date.now() } });
    scrollToEnd({ withDelay: true });
  };

  _renderPresets = () => {
    return QUESTIONS.map((question) => {
      return (
        <div
          tabIndex={0}
          data-text={question}
          aria-label={`button ${question}`}
          key={question}
          className='presetBlock'
          onKeyDown={undefined}
          onClick={this._handleClick}
        >
          {question}
        </div>
      );
    });
  };

  render() {
    return (
      <div className='presetsWrapper'>
        {this._renderPresets()}
        <span className='presetsInfo'>Haven&apos;t found you question? Ask Support directly here!</span>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deployMessage: sentMessage
};

export default connect(null, mapDispatchToProps)(Presets);

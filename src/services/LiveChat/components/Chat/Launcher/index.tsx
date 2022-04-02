import React from 'react';
import { connect } from 'react-redux';

import { toggleChat } from '../../../controller/actions';

import { IMG_CROSS, IMG_QUESTION } from '../../../constants/imgs';

import './index.scss';
interface IProps {
  isOpen?: boolean;
  isMobileLayout: boolean;
  chatToggler: () => void;
}

class Launcher extends React.Component<IProps> {
  _handleClick = (e) => {
    e.preventDefault();

    const { chatToggler } = this.props;

    chatToggler();
  };

  render() {
    const { isOpen = false, isMobileLayout } = this.props;

    if (isOpen && isMobileLayout) {
      return null;
    }

    const type = isOpen ? 'close' : 'open';

    return (
      <button
        type='button' className='rcw-launcher'
        aria-controls='rcw-chat-container' onClick={this._handleClick}
      >
        <img
          src={isOpen ? IMG_CROSS : IMG_QUESTION} className={`rcw-${type}-launcher`}
          alt='Open chat'
        />
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.chat.showChat,
  isMobileLayout: state.browser.is.mobile
});

const mapDispatchToProps = {
  chatToggler: toggleChat
};

export default connect(mapStateToProps, mapDispatchToProps)(Launcher);

import React from 'react';
import { connect } from 'react-redux';

import { toggleChat } from '../../../../controller/actions';

import './index.scss';

interface IProps {
  chatToggler: () => void;
  isMobileLayout: boolean;
}

class Header extends React.Component<IProps> {
  _handleChatToggle = () => {
    const { chatToggler, isMobileLayout } = this.props;

    if (!isMobileLayout) {
      return;
    }

    chatToggler();
  };

  render() {
    const { isMobileLayout } = this.props;

    return (
      <div id='chat-header' className='rcw-header'>
        <div className='avatart-img-wrapper'>
          <img
            alt='' src='/assets/chat.png'
            className='avatar-img'
          />
        </div>
        <div className='rcw-header-wrapper'>
          <h4 className='rcw-title'>Live Support</h4>
          <span>Our operators are busy. Time to answer 5 min</span>
        </div>
        {isMobileLayout && (
          <button
            type='button' className='closeBtn'
            onClick={this._handleChatToggle}
          >
            x
          </button>
        )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

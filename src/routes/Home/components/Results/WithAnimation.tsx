import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ResultsPreloader from './Preloader';

export interface IProps {
  isActiveSearch: boolean;
  isSearchInProgress: boolean;
  isSearchError: boolean;
  children: JSX.Element;
  vinCode: string;
}

const WithAnimation = ({ isActiveSearch, isSearchInProgress, isSearchError, children, vinCode }: IProps) => {
  const getAnimKey = () => {
    const successAnimKey = 1;
    const errorAnimKey = 2;

    if (isSearchError) {
      return errorAnimKey;
    }

    if (isSearchInProgress) {
      return successAnimKey;
    }

    return vinCode;
  };

  return (
    <TransitionGroup className={`anim_container ${(isActiveSearch && 'activeSearch') || ''}`} component='div'>
      <CSSTransition
        classNames={vinCode ? 'car_animation' : 'preloader_animation'}
        key={getAnimKey()}
        timeout={{ enter: 1000, exit: 500 }}
        unmountOnExit={true}
      >
        {isActiveSearch || isSearchError ? <ResultsPreloader isError={isSearchError} /> : children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default WithAnimation;

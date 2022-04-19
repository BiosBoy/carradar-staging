/* eslint-disable max-statements */
import React, { memo, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';

import { loadCarDataAttempt } from '../../modules/actions';
import { IStore } from '../../../../interfaces/IStore';

import LoadIndicator from '../../../../components/LoadIndicator';
import keyDownHandler, { KEY_TYPES } from '../../../../utils/keyDownHandler';

import CarNumberMask from '../../../../utils/CarNumberMask';
import isValidPatternInput from '../../../../utils/isValidPatternInput';
import isSpecialSymbols from '../../../../utils/isSpecialSymbols';
import isDigitInput from '../../../../utils/isDigitInput';
import scrollTo from '../../../../utils/smoothScroll';

import useLocales from './useLocales';

import { MAX_STRING_LENGTH } from './constants';
import isDesktop from '../../../../utils/isDesktop';
import isTablet from '../../../../utils/isTablet';
import translator from '../../../../utils/translator';

export interface IProps {
  carNumberReceived: string;
  searchCarNumber: string;
  isSearchInProgress: boolean;
  isMobileLayout: boolean;
  runLoadData: (e: string) => void;
}

const Search = memo(
  ({ runLoadData, isSearchInProgress, isMobileLayout, carNumberReceived, searchCarNumber }: IProps) => {
    const {
      SECTION_TITLE,
      SECTION_TEXT,
      FETCH_BTN_LABEL,
      FETCH_BTN_LABEL_SHORT,
      BAD_PATTERN_ERROR,
      INPUT_PLACEHOLDER,
      INPUT_PLACEHOLDER_SHORT,
      CYRILLIC_ALPHABET,
      NOT_EMPTY_ERROR,
      NOT_SPECIAL_SYMBOLS
    } = useLocales();

    const inputElement = useRef(null);
    const [inputValue, setValue] = useState('');
    const [isBadPatternError, setInputError] = useState(false);
    const [isNotCyrillicAlphabet, setCyrillicError] = useState(false);
    const [isNotSpecialSymbol, setSpecialSymbolsError] = useState(false);

    useEffect(() => {
      const removeDisabling = ({ target, keyCode }) => {
        if (!target && !keyCode) {
          return;
        }

        const isOutOfSearchField = !['INPUT', 'BUTTON'].includes((target as HTMLElement).tagName);
        const isEscapeFired = keyCode === KEY_TYPES.esc;

        if (isOutOfSearchField || isEscapeFired) {
          setInputError(false);
          setCyrillicError(false);
        }
      };

      // @ts-ignore
      document.addEventListener('click', removeDisabling);
      document.addEventListener('keydown', removeDisabling);

      inputElement?.current.focus();

      return () => {
        // @ts-ignore
        document.removeEventListener('click', removeDisabling);
        document.removeEventListener('keydown', removeDisabling);
      };
    }, []);

    const removeFlagsErrors = () => {
      setSpecialSymbolsError(false);
      setCyrillicError(false);
      setInputError(false);
    };

    const setLastSearchesStorage = (newSearchLabel: string) => {
      const actualSearches = window.localStorage.getItem('last_searches');

      if (actualSearches?.split(',')?.some((label) => label === newSearchLabel)) {
        return;
      }

      window.localStorage.setItem('last_searches', `${actualSearches || ''},${newSearchLabel}`);
    };

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = target as HTMLInputElement;

      if (value.length > MAX_STRING_LENGTH) {
        setValue(value.substr(0, value.length - 1));

        return;
      }

      setValue(value.toUpperCase());
      removeFlagsErrors();

      // checking edge cases
      if (isSpecialSymbols(value)) {
        setSpecialSymbolsError(true);
        setInputError(true);
        setValue(inputValue);
      } else if (isDigitInput(value)) {
        setInputError(true);
        value.length > 1 && setValue(inputValue.substr(0, inputValue.length));
      } else if (!CarNumberMask(value)) {
        setInputError(true);
        value.length > 1 && setValue(inputValue.substr(0, inputValue.length));
      }
    };

    const handleClear = () => {
      setValue('');
      setInputError(false);
    };

    const handleSearch = (incomingValue?: string) => {
      const valueToProcess = typeof incomingValue === 'string' ? incomingValue : inputValue;

      // if we emit the same request in the row
      if (
        valueToProcess === carNumberReceived &&
        carNumberReceived === searchCarNumber &&
        valueToProcess === searchCarNumber
      ) {
        scrollTo({ id: 'results', duration: 1000 });

        return;
      }

      // bad pattern input (e.g. not valid like a AT8760ET sequence)
      if (!isValidPatternInput(valueToProcess)) {
        setInputError(!isBadPatternError);

        return;
      }

      if (!valueToProcess || isSearchInProgress) {
        return;
      }

      setInputError(false);
      runLoadData(translator(valueToProcess));
      scrollTo({ id: 'results', duration: 1000 });
      setLastSearchesStorage(translator(valueToProcess));
    };

    const handleKeyDownChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
      keyDownHandler({
        event: e,
        keysConfig: [
          {
            type: KEY_TYPES.esc,
            onEvent: handleClear
          },
          {
            type: KEY_TYPES.enter,
            onEvent: handleSearch as any
          }
        ]
      });
    };

    const getInputErrorMessage = () => {
      if (!inputValue) {
        return NOT_EMPTY_ERROR;
      }

      if (isNotSpecialSymbol) {
        return NOT_SPECIAL_SYMBOLS;
      }

      if (isNotCyrillicAlphabet) {
        console.log(CYRILLIC_ALPHABET, 'error!');
      }

      if (isBadPatternError) {
        return BAD_PATTERN_ERROR;
      }

      return null;
    };

    const renderInput = () => {
      const isInputError = getInputErrorMessage();

      return (
        <>
          <input
            ref={inputElement}
            name='find-car'
            type='text'
            autoComplete='true'
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDownChange(e)}
            value={inputValue}
            placeholder={isMobileLayout ? INPUT_PLACEHOLDER_SHORT : INPUT_PLACEHOLDER}
            className={`${styles.searchInput} ${isBadPatternError ? styles.error : ''}`}
            disabled={isSearchInProgress}
          />
          {isBadPatternError && <span className={styles.errorMessage}>{isInputError}</span>}
        </>
      );
    };

    const renderClearButton = () => {
      if (!inputValue || isSearchInProgress) {
        return null;
      }

      return (
        <button type='button' aria-label='Clear Search' className={styles.clearButton} onClick={() => handleClear()}>
          <span>x</span>
        </button>
      );
    };

    const getFetchLabel = () => {
      return isMobileLayout ? FETCH_BTN_LABEL_SHORT : FETCH_BTN_LABEL;
    };

    const renderSearchButton = () => {
      return (
        <button
          onClick={() => handleSearch()}
          onBlur={() => setInputError(false)}
          type='button'
          className={styles.searchButton}
          disabled={isSearchInProgress || isBadPatternError}
        >
          {!isSearchInProgress ? getFetchLabel() : <LoadIndicator type='flat' color='white' />}
        </button>
      );
    };

    const renderLastSearches = () => {
      const lastSearches = window.localStorage.getItem('last_searches');
      const popularSearches = ['ВС0240ММ', 'АТ8759ЕТ', 'АТ8760ЕТ'];

      const getLastSearch = (label: string) => {
        if (!label) {
          return null;
        }

        return (
          <button key={label} type='button' className={styles.lastSearch} onClick={() => handleSearch(label)}>
            {label}
          </button>
        );
      };

      const searchesToRender = lastSearches?.split(',') || popularSearches;
      const lastSearchesList = [...new Set(searchesToRender)].map(getLastSearch);

      return (
        <div className={styles.lastSearchesWrap}>
          <span className={styles.label}>{lastSearches ? 'Your Last Searches' : 'Popular Searches'}:</span>
          <div className={styles.lastSearches}>{lastSearchesList}</div>
        </div>
      );
    };

    return (
      <div className={styles.search}>
        <div className={styles.topContainer}>
          <div className={styles.titleSection}>
            <h1>{SECTION_TITLE}</h1>
            <h2>{SECTION_TEXT}</h2>
          </div>
          <div className={styles.inputHelperWrap}>
            <div className={styles.inputContainer}>
              {renderInput()}
              {renderClearButton()}
            </div>
            {renderSearchButton()}
          </div>
        </div>
        <div className={styles.bottomContainer}>{renderLastSearches()}</div>
      </div>
    );
  }
);

Search.displayName = 'Search';

const mapStateToProps = ({ app, home, browser }: IStore) => ({
  language: app.locale,
  isMobileLayout: !(isDesktop(browser) || isTablet(browser)),
  isSearchInProgress: home.statuses.isSearchInProgress,
  searchCarNumber: home.searchCarNumber,
  carNumberReceived: home.carData?.mainData?.number
});

const mapDispatchToState = {
  runLoadData: loadCarDataAttempt
};

export default connect(mapStateToProps, mapDispatchToState)(Search);

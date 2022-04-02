import i18next from 'i18next';
import { LANGUAGE_MAP } from '../../components/Header/constants';

const changeMetaData = (language?, withDir?) => {
  if (withDir) {
    document.body.dir = LANGUAGE_MAP[language].dir;
  }

  document.title = i18next.t('title');
  document.querySelector('meta[name="description"]').setAttribute('content', i18next.t('description'));
  document.querySelector('meta[property="og:title"]').setAttribute('content', i18next.t('title'));
  document.querySelector('meta[property="og:description"]').setAttribute('content', i18next.t('description'));
};

export default changeMetaData;

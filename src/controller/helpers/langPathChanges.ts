import changeMetaData from '../../utils/changeMetaData';

const langPathChanger = ({ label, callback }) => {
  if (['en', 'ru', 'ua'].includes(label)) {
    const prevPath = location.pathname;
    const isLanguageRoot = /^\/(en)|(ru)/i.test(location.pathname);
    const isCoreRoot = label === 'ua';
    const isLeadingSlash = (str) => /^\//i.test(str);

    const pathWithoutPrevLanguage = isLanguageRoot ?
      prevPath.substr(3, prevPath.length) :
      prevPath.substr(1, prevPath.length);
    const newPath = `${!isCoreRoot ? label : ''}${
      isLeadingSlash(pathWithoutPrevLanguage) ? '' : '/'
    }${pathWithoutPrevLanguage}`;
    const newPathOptimized = isCoreRoot && isLeadingSlash(newPath) ? newPath.substr(1, newPath.length) : newPath;
    const newNormalizedPath =
      newPathOptimized[newPathOptimized.length - 1] === '/' ? newPath.substr(0, newPath.length - 1) : newPath;

    callback(newNormalizedPath);
    changeMetaData();
  }
};

export default langPathChanger;

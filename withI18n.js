import { withTranslation } from 'react-i18next';

const withI18n = (Component) => withTranslation()(Component);

export default withI18n;

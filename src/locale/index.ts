import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './en_US.json';
import zhCN from './zh_CN.json';
import zhTW from './zh_TW.json';

const resources = {
	'en-US': {
		translation: enUS,
	},
	'zh-CN': {
		translation: zhCN,
	},
    'zh-TW': {
		translation: zhTW,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'zh-CN',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;

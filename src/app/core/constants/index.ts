const TOKEN_PRE = 'Bearer ';
const TOKEN_KEY = 'Authorization';
const SALT = 'EIpWsyfiy@R@X#qn17!StJNdZK1fFF8iV6ffN!goZkqt#JxO';

const THEME_OPTIONS_KEY = 'ThemeOptionsKey';
const STYLE_THEME_MODEL_KEY = 'StyleThemeModelKey';

const IS_FIRST_LOGIN = 'IsFirstLogin';
const LOCKED_KEY = 'LockedKey';

const LOGIN_TIMEOUT_CODE = 1012;
const TOKEN_ERROR_CODE = 1010;

const SIDE_COLLAPSED_MAX_WIDTH = 700;
const TOP_COLLAPSED_MAX_WIDTH = 1247;
const SIDE_NAV_WIDTH = 208;
const COLLAPSED_NAV_WIDTH = 48;

export const CONSTANTS = {
    TOKEN: {
        TOKEN_PRE,
        TOKEN_KEY,
        SALT,
    },
    THEME: {
        THEME_OPTIONS_KEY,
        STYLE_THEME_MODEL_KEY,
    },
    STATUS: {
        IS_FIRST_LOGIN,
        LOCKED_KEY,
    },
    ERROR_CODES: {
        LOGIN_TIMEOUT_CODE,
        TOKEN_ERROR_CODE,
    },
    LAYOUT: {
        SIDE_COLLAPSED_MAX_WIDTH,
        TOP_COLLAPSED_MAX_WIDTH,
        SIDE_NAV_WIDTH,
        COLLAPSED_NAV_WIDTH,
    },
};

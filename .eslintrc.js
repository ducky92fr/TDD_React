module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb","prettier","prettier/react"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "test":true,
        "expect":true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/jsx-filename-extension":0,
        "react/jsx-indent":0,
        "prettier/prettier": "error",
        "no-console":0
    }
};
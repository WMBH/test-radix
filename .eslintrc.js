module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ["airbnb", "plugin:prettier/recommended"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "implicit-arrow-linebreak": "off",
    "no-shadow": "warn"
  }
};

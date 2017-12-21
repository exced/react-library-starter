# React Library Starter

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/exced/react-library-starter/blob/master/LICENSE)
[![Build](https://travis-ci.org/exced/react-library-starter.svg?branch=master)](https://travis-ci.org/exced/react-library-starter)
[![Npm](https://img.shields.io/npm/v/react-library-starter.svg?style=flat)](https://www.npmjs.com/package/react-library-starter)
[![Npm](https://img.shields.io/coveralls/exced/react-library-starter/master.svg?style=flat)](https://coveralls.io/github/exced/react-library-starter)

React starter to create and publish library. 

What's in :
- React (basically an ejected CRA)
- css modules, sass, less...(see Webpack config in config/)
- Ant Design
- Styled Components
- Travis
- ...

## Usage
Steps : 
1. Clone this repo. 
```bash
git clone https://github.com/exced/react-library-starter.git
```
2. configure TravisCI && Coveralls overriding $github\_token, $coveralls\_repo\_token with your Github and Coveralls tokens
3. Write your code in src/lib
4. export your modules in src/index.js
5. add types in src/index.d.ts (Optional)
6. Add stories in stories/ folder
7. push your code on Github
8. publish
```bash
yarn lib
yarn publish
```

All contributions are welcome.

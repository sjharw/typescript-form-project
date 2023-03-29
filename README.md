# TypeScript form project
Basic mini typescript project that gets input values supplied to a HTML form, validates the input, and saves the information to a text file.

## Tech stack
- [Node.js](https://nodejs.org/en) version 18.15.0
- [TypeScript](https://www.typescriptlang.org/) version 5.0.2
- [Webpack](https://webpack.js.org/) version 5.76.3

## Setup
### Prerequisites
1. Install Webpack from cmd: `npm install webpack webpack-cli ts-loader typescript --save-dev`
2. Install [FileSaver](https://github.com/eligrey/FileSaver.js/) from cmd: 
- `npm install file-saver --save-dev`
- `npm i --save-dev @types/file-saver`
### Run
Download the zipped folder and unzip the downloaded folder.
Run the project by opening the HTML file in chrome.

## Develop
If you want to make changes to the typescript files, remember to compile the changes to a JavaScript bundle with `npx webpack` in powershell terminal.

## Project structure
### App folder structure
```
.
|  .gitignore
|  tsconfig.json
|  webpack.config.js
|  README.md
|              
|---templates
|  |  home.html
|
|---src
|  |  formData.ts
|  |  inputForm.ts
|  |  index.ts
|
|---dist
|  |  bundle.js
```

### src
- `formData.ts` contains a module called FormValidation that contains a class that validates the presence and structure of data supplied via the HTML form.
- `inputForm.ts` retrieves the inputs supplied to the form and uses the FormValidation module to validate the inputs before downloading it as a text document.
- `index.ts` simply logs the inputs supplied to the form to the console. 

## License
[MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) License
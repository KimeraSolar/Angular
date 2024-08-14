# ReactInAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Steps

### Create a new angular project
```bash
$ ng new react-in-angular
```

#### Chrome in WSL
If using the WSL, the tests in angular are going to fail if you don't install an internet browser. To install Chrome:
```bash
#install packages
$ sudo apt-get install -y curl unzip xvfb libxi6 libgconf-2-4 fonts-liberation
#get latest chrome
$ wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

#install it
$ sudo apt install ./google-chrome-stable_current_amd64.deb

#test a screenshot
$ google-chrome --headless --disable-gpu --screenshot https://www.chromestatus.com/
```

### Install React
```bash
$ npm install react react-dom @types/react @types/react-dom
```

### Create de rect component and directive
In this project, the react component is a button with a counter. The props are the counter and the onClick function.

The directive is implemented in a generic way, so any React component can be rendered in the angular project. The properties are the component itself and its props. The components are lazyly loaded in the project.

#### Tutorial
[Using React in Angular Applications](https://netbasal.com/using-react-in-angular-applications-1bb907ecac91)

#### Usage
```jsx
<div [ngReactComponent]="Component" [props]="ComponentProps"/>
```

### Adding Vitest for the React components

Vitest runs in Vite, so is necessary the Vite installation:
```bash
$ npm install -D vite vite-plugin-dts
```

Then, to install Vitest:
```bash
$ npm install -D vitest @testing-library/react jsdom @testing-library/jest-dom
```
Add the tests configurations in the vite.config.ts and create the file setupTest.ts just as in the Testing with Vitest and React-Test-Library section of the tutorial [Building a Component Library with React, Typescript, and Storybook: A Comprehensive Guide](https://medium.com/simform-engineering/building-a-component-library-with-react-typescript-and-storybook-a-comprehensive-guide-ba189accdaf5).

#### Include and excludes tests
The Angular make tests files that can not run in Vitest and vice-versa. So, configure the file names in vitest to differ from the Angular test files. The include in the vite.config.ts test key have to be the same as in the exclude in the angular.json test.
```json
test: {
    include: ["**/*.react.test.?(c|m)[jt]s?(x)"]
}
```

### Adding Storybook
Do not install storybook with the cli, as it will install with the angular version. Make the manual setup following the [Manual setup for a minimal Storybook](https://dev.to/dannyhw/manual-minimal-storybook-8-setup-98j) tutorial.

```bash
$ npm install @storybook/react @storybook/react-vite @storybook/addon-essentials storybook
```
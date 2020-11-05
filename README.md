## Requirements

We will use Open Weather Data to create a single page application that presents a list
of 5 European cities. Your goal is to get the current
weather situation displaying the city name plus average temperature and the wind
strength. Clicking on an item shows the forecast in the next hours.

**Note:- I cound't found any endpoint which will return hourly bases temprarure that's why i haven't implemented that functionality.**


## Getting Started

To get you started you can simply clone the `weather-dashboard` repository and install the dependencies:

### Prerequisites

You need git to clone the `weather-dashboard` repository.

### Clone `weather-dashboard`

Clone the `weather-dashboard` repository using git:

```
git clone https://github.com/shahumang23/weather-dashboard.git
cd weather-dashboard
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the Node package manager.

```
npm install
```

After that, you should find out that you have
below new folders in your project.

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
ng start
```

Now browse to the app at [`http://localhost:4200/`].

***

## Components based architecture

Created components based architecture so in future we can use same components to another application or same application

Here i created 3 components

- City selector
- City's forecast (5 days)
- City's forecast chart
- Weather Overview

And that components used into app.component.html as well as weather-overview.component.html

***

## Useful links
[angular](https://angular.io/)

[jasmine](https://jasmine.github.io/)

[karma](https://karma-runner.github.io/)

[node](https://nodejs.org/)

[npm](https://www.npmjs.org/)

[typescript](https://www.typescriptlang.org/)

[webpack](https://webpack.js.org/)

[bootstrap](https://getbootstrap.com/)

[RxJS](https://angular.io/guide/rx-library)

[OpenWeatherFont](https://websygen.github.io/owfont/#css)

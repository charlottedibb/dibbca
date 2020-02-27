# dibb.ca

dibb.ca is my personal porfolio website. Built with React. Background animation created with Blender. 

<img src="https://github.com/charcharmasonjar/dibbca/blob/master/src/gifs/home_scroll.gif">

## Getting Started

### Installation

Fork and clone the repository

Change to directory 
```
cd dibbca
```

Install dependencies

```
npm install
```

Run the app in development mode
```
npm start
```

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


## Deployment

This project was deployed using [Netlify](https://www.netlify.com/)
* create account
* connect to git provider - authorize netlify to access your github, then select the repository to deploy - Netlify will build and deploy the site each time you push to the repository/specified branch in question
* add environment variables - .env file is ignored when pushing to github, so environment variables need to be declared in Netflify
* from Netlify dashboard 
  * Settings > Build & deploy > Environment > Environment variables
  * add key: GENERATE_SOURCEMAP and value: false
  * more info on adding environment variables in Netlify available [here](https://docs.netlify.com/configure-builds/environment-variables/)

## Built With

* [React](https://reactjs.org/)
* [React Spring](https://www.react-spring.io/) - used for creating cool parallax effect
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start) - used to be able to show different pages and be able to link to them, e.g. can link directly to dibb.ca/resume
* [React-pdf](https://www.npmjs.com/package/react-pdf) - for showing a pdf of resume 
  * resume pdf has links in it - why I used a pdf and not an image

* [React Media](https://github.com/ReactTraining/react-media) - used for showing a different version of the site to mobile/desktop users
* [React Icons](https://react-icons.netlify.com/#/)



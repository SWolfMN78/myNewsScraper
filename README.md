# My News Scrapper
Small project to create an application which will utilize Mongoose & Cheerio to scrape informaton from other sites for the user to be able to leave comments on about whatever latest news they view.  With the information being scrapped from other site(s) it should be noted that none of the articles are written by yours truly.

## Getting Started:
To download a copy of the repo for your own use please access: https://github.com/SWolfMN78/myNewsScrapper.

## Prerequisites: 
You're going to need the following bits of software to operate this.

#### Getting started: 
1. Clone this repo
2. Run `npm install` in the command line.
3. Run `node server.js` in the command line to run the application.

## Install:
The following Node.js NPM's will be needed in order to run this program.  If you've cloned the json file you can also use NPM Install to quickly load up the dependencies.

```
 express
 express-handlebars
 mongoose
 body-parser
 cheerio
 request
```

### File Setup:
├── controllers
|  ├── fetch.js
|  ├── headline.js
|  └── note.js
├── models
|  ├── Headline.js
|  ├── index.js
|  └── Note.js
├── public
|  └── assets
├── routes
|  ├── api
|  ├── index.js
|  └── view
├── scripts
|  └── scrape.js
└── views
|   ├── home.handlebars
|   ├── layouts
|   └── saved.handlebars
├── package-lock.json
├── package.json
└── server.js


## Deployment:
I am using Github & Heroku for deployment.
* [SJWolf78's GitHub](https://swolfmn78.github.io/myNewsScrapper/) 
* [My News Scrapper - Heroku](https://guarded-crag-51081.herokuapp.com/)

## Built With:
* [VS Code](https://code.visualstudio.com)
* HTML
* CSS
* Javascript
* jQuery
* Node.js
* Mongo
* Mongoose
* Cheerio
* Express & Express Handlebars


## Authors:
* Shawn Jonas Wolf @ [SJWolf78's GitHub Repo's](https://github.com/SWolfMN78 "SJWolf78")


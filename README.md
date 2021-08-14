# MERN boilerplate

[Inspired by mc100s boilerplate](https://github.com/mc100s/mern-hooks-boilerplate)

[Demo](https://mern-boilerplate-ojself.herokuapp.com/)

## STACK

MongoDB, Express, Node, React.

### Notable dependencies

React-Redux, Tailwind, Formik, Yup, axios,
Passport, Cors, bcrypt,

## Generate the project

### Option #1

Generate the project with the Github template feature

Click on the button [_Use this template_](https://github.com/Ojself/mern-boilerplate/generate) on this page and create a new GitHub repository.

### Option #2

Clone the project directly and remove the git folder.

```sh
# Clone the project
$ git clone https://github.com/Ojself/mern-boilerplate
$ cd mern-boilerplate

# remove the .git folder
$ rm -rf .git
```

### Enviormental values

Add a `server/.env` file, that looks similar to the following values:

```sh
PORT=5000
SESSION_SECRET=foobar
MONGODB_URI=mongodb://localhost/MERN-BOILERPLATE
NODE_ENV=development
PRODUCTION_URL=https://mern-boilerplate-ojself.herokuapp.com/
```

Ensure to edit the `SESSION_SECRET` to something only you know.
You will obtain the `PRODUCTION_URL` value after deploying to Heroku.

## Useful commands

**To install all the packages**

```sh
# Install server and client packages + build the React application
$ npm install

# OR you can install manually the server and client packages
$ (cd server && npm install)
$ (cd client && npm install)
```

**To run the server and the client**

```sh
$ npm run dev:server
# http://localhost:5000/

$ npm run dev:client
# http://localhost:3000/
```

### Directory structure

```
.vscode/
client/
    build/
    public/
    src/
        components/
            atoms/
            molecules/
            layout/
            screens/
        routing/
        state/
        utils/
        api.js
        App.js
        index.css
        index.js
    package.json
server/
    bin/
    configs/
    middlewares/
    models/
    passport/
    routes/
    seeds/
    app.js
    package.json
.gitignore
package.json
README.md
```

## Deployement on Heroku

### Push to Github

1. Log in to your Github account.
2. Click the new repository button in the top-right. Do _not_ initialize the project with a README.MD
3. Click the “Create repository” button.
4. Now, follow the second set of instructions, “Push an existing repository…”

### To deploy the first time

Go to `Heroku.com` and click `new`, then click `create new app`. Choose a fitting name and chose a region.

When created, go to the `Deploy` tab and connect to Github by clicking `Github`. Search for your repo in the search bar
and click `Connect`. Scroll down and `Enable Automatic Deploys`. When this is enabled, Heroku will deploy the newest version
of your Master branch when you push to Github.

If you don't want to deploy everytime you change your master branch, you can manually `Deploy Branch` at the bottom of the page.

### Set enviormental values in Heroku

Go to `Settings` and click `Reveal Config Vars`.

Here you can add and edit your values. These values should reflect your `server/.env`
Make sure that the `MONGODB_URI` value points to your production database, and not the local one.
`PRODUCTION_URL`should be set to the url of your project,
you can see your project's URL by clicking `Open app` and it should look something like: `https://mern-boilerplate-ojself.herokuapp.com/`

Example env:
![Example env](https://i.imgur.com/J1NxHba.png)

How to create a MongoDB 'production' database in next step

### Add Papertrail Logs

To get logs from your application, add `Papertrail` as an add-on. Click `Resources` and search for it. The free tier should suffice.

## MongoDB Atlas

1. Signup/login to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click `+ Create` in the `Databases` tab (if you can't see this, try creating a team)
3. Choose `Shared` to get the free cluster
4. Skip down to region and choose a region which is closest to where the Heroku-server is located.
   If you're in doubt, just choose the region closest to you.
5. Choose the M0 Cluster Tier, this is the free one.
6. Give your cluster a name and click `Create Cluster`
7. When the cluster is finished deploying, click `Connect` and choose `Connect using MongoDB Compass`
   If you're using something else like Studio3T or Robo (or shell), I will assume you know how to do the rest
8. Copy the URI and replace the `<password>` with the password you signed into `mongodb.com` with
   and replace `myFirstDatabase` with your desired databasename.
9. Open up MongoDB Compass and a prompt should appear where you can paste the URI from your clipboard.
10. Go back to Heroku and paste in the URI in the environmental value-section, as shown in the example image.

### Install Heroku CLI

The Heroku Command Line Interface (CLI) makes it easy to create and manage your Heroku apps directly from the terminal. It’s an essential part of using Heroku.

```sh
$ brew tap heroku/brew && brew install heroku
$ heroku --version # Verifies that Heroku is installed.
$ heroku login # Opens a browser and authorizes the project
```

### To execute a seed

If you want to execute something on the server, for example a seed, you can use `heroku run`.

Example:

```sh
$ heroku run node server/bin/seeds.js
```

### To redeploy

Whenever the master branch is updated on Github, Heroku will automatically deploy your branch.

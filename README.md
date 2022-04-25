[![Nutritionx Logo](https://github.com/destiny0114/nutritionx/blob/media/banner.png?raw=true)](http://nutritionx.vercel.app/)

A Nutrient Monitor Web Application used to tracking what food nutrient that exactly needs on the body.

## Background

This Web Application was used to help people they need to know about knownledge of food thats make life more healthy. You can able to record eaten food by dates and also tracking down how much you have calories, carbs, proteins and fat by day even past week. Besides [Nutritionx](http://nutritionx.vercel.app/) provides autocomplete search to let people find out what nutrients have on that food. Remember to [check it out](http://nutritionx.vercel.app/).

The Application was used Node.js to built it. I used Figma as UI/UX tool and refer some ideas on Dribble or Pinterest to make prototype of design. When prototype have finished, an arduous journey has begin because the developer aka only me must convert design into application that can be used by people. Im using a frontend framework called React to follow up my interface design and styling with Tailwind, as my project was bigger than i thought, the state management became hard maintain thats why i have to use the Redux as my state management, for simple state still using React state. The Dayjs is a great tool to handle somethings about date or time and its smaller library. The user data will be store at indexeddb. Whole project written by typescript and took me about 9 month weekdays 4-5 hour each day.

That's it, im sure it was a great experience for myself!

#### Technology

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [React Router](https://reactrouter.com/)
- [Redux](https://redux.js.org/)
- [day.js](https://day.js.org/)
- [axios](https://axios-http.com/)
- [Tailwind](https://tailwindcss.com/)
- [localforage](https://localforage.github.io/localForage/)
- [immer](https://immerjs.github.io/immer/)
- [craco](https://github.com/gsoft-inc/craco)
- [lottie](https://lottiefiles.com/)
- [Full Calendar](https://fullcalendar.io/)
- [Recharts](https://recharts.org/en-US/)

## Installation

The web application was built with [Node.js](https://nodejs.org/en/) and powered by [Nutritionix](https://www.nutritionix.com/). **Be sure** go check them out if you don't have them.

#### Install Dependencies

After that, you need to install dependencies and the command at below:

###### npm

```sh
$ npm install
```

###### yarn

```sh
$ yarn install
```

#### Enviroment Variables

The web application was powered by [Nutritionix](https://www.nutritionix.com/). Thats mean we need **x-app-id** and **x-app-key** to able request the data and response to our web application.

Follow my step:

1. First go to [Nutritionix](https://developer.nutritionix.com/signup) sign up after that sign in your registered account.
2. After you signed in, click **View API Keys** at your right hand side of navgation.
3. Now you able to saw the **Application ID** and **Application Keys** if keys didnt showed up you can able to click **Create New Key** to generate new key.
4. Create a **.env** file to store the **Application ID** and **Application Keys** at **Root Directory** like below:
   _The project was used create-react-app tool so **Be sure** using prefixed REACT_APP_YOURENVVAR else the env will not working._

```txt
// .env
REACT_APP_NUTRITIONX_APP_ID=<x-app-id>
REACT_APP_NUTRITIONX_APP_KEY=<x-app-key>
```

5. This is our folder structure

```
   .
   ├── public
   ├── src
   ├── .gitignore
   ├── craco.config.js
   ├── package.json
   ├── tailwind.config.js
   ├── tsconfig.json
   ├── .env
   ├── yarn.lock
   ├── LICENSE
   └── README.md
```

For more, please refer their [documentation](https://developer.nutritionix.com/docs/v2).

## Usage

The installation are done now you can run the nutritionx and also modify the project since its open source.

Let's run the Nutritionx locally by typing the command.

###### npm

```sh
$ npm start
```

###### yarn

```sh
$ yarn start
```

View the website at: http://localhost:3000. Thats it!

### Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/destiny0114/nutritionx/graphs/contributors">
<img src="https://contrib.rocks/image?repo=destiny0114/nutritionx" />
</a>

## License

[MIT © Kenna Levine](./LICENSE)
[Powered by Nutritionix](https://www.nutritionix.com/)

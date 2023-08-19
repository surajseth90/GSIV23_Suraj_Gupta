### `Deployed Build URL`

[https://64e07bb044ad10321154a8b3--dashing-lamington-2460cd.netlify.app/](https://64e07bb044ad10321154a8b3--dashing-lamington-2460cd.netlify.app/)

### `To Start the Project`

1. Clone this repository and run `npm install` command
2. Create a personal account at: https://www.themoviedb.org/account/signup
3. Once you have created an account, go to: https://www.themoviedb.org/settings/api to create an API key
4. Add .env.local file in root directory and add the key in a variable named as REACT_APP_API_KEY
5. Run `npm start` command
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `Features`

1. Display a list of upcoming movies sorted by the latest releases.
2. Searching functionality for movies using the TMDB API.
3. View additional details for each movie, including year of release, duration, director, and cast.

### `Working`

- The home page will render the upcoming movies sorted by the latest releases.
- Header includes a search bar and a home button.
- Clicking on any movie will redirect you to the detail page of the movie, then click on the home button to back to the home page.
- Footer includes the previous and next page buttons to change the page and refresh the movies list.
- Additionally, Loaders can be seen till the API responds

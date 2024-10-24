# Create React App:
    npx create-react-app netflixgpt

# Setup Tailwind CSS:
    1. npm i -D tailwindcss
    2. npx tailwindcss init
    3. configure: tailwind.config.js:
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
    4. add below code in App.css (also include App.css in App.js)
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    5. npm run start

# Features:
    Login/Signup Page
        SignUp and SingIn Screen
        redirect to Browse Page after login
    Browse Page: (only come after authentication,)
        Header,
        Main Movie
            Trailer in background
            Movie title, description, play button
        Movies list
            multiple rows of movies..
        Horizontaly Scroller..
    Netflix GPT
        search Bar
        Movie suggestions

rafce: React Arrow Function Component export.

# Setup React Router DOM
    npm i -D react-router-dom

Formik library..

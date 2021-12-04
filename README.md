# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    img TEXT,
    name VARCHAR(40),
    test VARCHAR(40),
    date VARCHAR(40),
    amount VARCHAR(40),
    age VARCHAR(40),
    status VARCHAR(40),
    action VARCHAR(40),
);

INSERT INTO users (img, name, test, date, amount, age, status, action)
    VALUES ('http://1.bp.blogspot.com/-uUhIFpoCfFQ/UznL2o99LyI/AAAAAAAAPCc/oL7mirrs3vI/s1600/fotografia-cara-mujer-joven-rostro.jpg', 'Quang Huy', 'SAT', 'Counseling', '$4000', '1 week ago', 'Draft', 'Edit plan'), ('https://blog.hubspot.es/hubfs/mejoresbancosdeimagenesnegativespace.jpeg', 'Huy Tran', 'TOEFL', 'September 2020', '$4000', '4 days ago', 'Draft', 'Edit plan'), ('https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg', 'Cristian Ferrari', 'SAT', 'September 2020', '$4000', '6 hours ago', 'Pending', 'Send reminder'), ('http://1.bp.blogspot.com/-DLEzvn7DmE0/UV3JNoevsbI/AAAAAAAAJXk/aUnoV0oATS0/s1600/hombre-rostro-fotografia-sin-derechos-autor.jpg', 'Luca Nicolas', 'SAT', 'December 2020', '$4000', '3 days ago', 'Pending', 'Send reminder'), ('https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1', 'John Carraha', 'ACT', 'September 2020', '$4000', '5 min ago', 'Pending', 'Send reminder'), ('http://4.bp.blogspot.com/-vrsBj3YssoM/VO5R0Q0PL3I/AAAAAAAASBM/IcOF9VmaAKA/s1600/retrato-hombre-joven-peque%C3%B1o-rostro-sin-copyright.jpg', 'Nicolas Martignone', 'ACT', 'September 2020', '$4000', '2 days ago', 'Pending', 'Send reminder'), ('https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/hombre-maduro-guapo.jpg?resize=500%2C500&ssl=1', 'Felix Tran', 'TOEFL', 'Octuber 2020', '$4000', '50% (16/32)', 'In progress', 'View plan'), ('http://1.bp.blogspot.com/-uUhIFpoCfFQ/UznL2o99LyI/AAAAAAAAPCc/oL7mirrs3vI/s1600/fotografia-cara-mujer-joven-rostro.jpg', 'Quang Huy', 'SAT', 'Counseling', '$4000', '1 week ago', 'In progress', 'View plan'), ('https://blog.hubspot.es/hubfs/mejoresbancosdeimagenesnegativespace.jpeg', 'Huy Tran', 'TOEFL', 'September 2020', '$4000', '4 days ago', 'In progress', 'View plan'), ('https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg', 'Cristian Ferrari', 'SAT', 'September 2020', '$4000', '6 hours ago', 'In progress', 'View plan'), ('http://1.bp.blogspot.com/-DLEzvn7DmE0/UV3JNoevsbI/AAAAAAAAJXk/aUnoV0oATS0/s1600/hombre-rostro-fotografia-sin-derechos-autor.jpg', 'Luca Nicolas', 'SAT', 'December 2020', '$4000', '3 days ago', 'In progress', 'View plan'), ('https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1', 'John Carraha', 'ACT', 'September 2020', '$4000', '5 min ago', 'In progress', 'View plan'), ('http://4.bp.blogspot.com/-vrsBj3YssoM/VO5R0Q0PL3I/AAAAAAAASBM/IcOF9VmaAKA/s1600/retrato-hombre-joven-peque%C3%B1o-rostro-sin-copyright.jpg', 'Nicolas Martignone', 'ACT', 'September 2020', '$4000', '2 days ago', 'In progress', 'View plan'), ('https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/hombre-maduro-guapo.jpg?resize=500%2C500&ssl=1', 'Felix Tran', 'TOEFL', 'Octuber 2020', '$4000', '50% (16/32)', 'Completed', 'View plan');

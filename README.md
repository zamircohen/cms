## Get started

### `clone repository to your local desk`

- Click “Code” and copy the given URL.
- Open “Git Bash” and change the current working directory to the location where you want the cloned directory.
- Type git clone in the terminal, paste the URL you copied earlier, and press “enter” to create your local clone.

`git clone {repository URL}`

In the project directory, you can run:

### `npm install`

Installs all dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `add an env file with your personal wordpress url (CHECK env-example)` 

Allows you to fetch information from your wordpress account.

### `go to https://www.netlify.com/`

And create a free account on netlify.

### `npm run build` 

Go back to code and run this. Creates a build directory with a production build of your app.

### `npm install netlify-cli -g` 

For deployment on netlify. 

### `netlify deploy` 

Start deploying on netlify. Follow the steps and choose "./build" for your path.
If everything looks good on your draft URL, deploy it to your main site URL with the --prod flag.

### `netlify deploy --prod`

Choose "./build" for your path again and your website is deployed.

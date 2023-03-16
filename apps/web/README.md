
### One-click Deploy with Netlify (recommended)

The one-click deploy button allows you to connect Netlify to your GitHub account to clone this template and automatically deploy it. Be sure to sign up for a Netlify account before clicking the deploy button.

[![Deploy to Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wesbitty/wesbitty/tree/main/apps/web)

Once you click the button, you'll be taken to Netlify’s direct deploy page with the pre-built project’s repository passed as a parameter in the URL. Click the "Connect to GitHub" button to authorize access.

Next, you'll be asked to configure your site variables. For the Secret value, navigate to [https://generate-secret.now.sh/32](https://generate-secret.now.sh/32) to generate a secret and then paste that in. You can leave the Database URL and NextAuth URL values blank for now. Click "Save & Deploy".

Your site will take about a minute to build and then you'll be taken to a settings page. A unique Netlify URL will be generated for the project. You can click that now to see your live site!

**Important:** Once the site is deployed, [follow these steps](https://planetscale.com/docs/tutorials/nextjs-planetscale-netlify-template) to get your PlanetScale database up and running.

> Note: If you do not follow the steps to get your database set up, you will see a 500 error on your live site.

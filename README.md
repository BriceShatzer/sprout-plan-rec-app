



To view, test, or build this project please first make sure you have a recent version of [Node.js](https://nodejs.org/en/)
installed.
Then from the `app` folder in the project directory you can run scripts to perform various tasks. For example the start script which will allow you to view the site locally in the browser
`npm start` (or `yarn start` if you're using that).  The various available scripts are:


### `start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>




## Notes

Minor update to the provided data:
"Cost Per Month" detail for the "Deluxe" plan was provided as `59`. It has been updated to '$59' to match the convention
used by the other plans.

<!--
The [mockup](https://sproutsocial.invisionapp.com/share/9H8G4HC34#/screens/185047942) references "Plan value proposition"
which was absent from the data/content provided in the CodePen. Each plan in this project has been updated using the following
information taken from the [pricing page](https://sproutsocial.com/pricing):

 - "Deluxe": *(Taken from the "Standard" portion of that page)*
    + "For those getting started with social media management we offer Standard at $59 per user per month.Includes all
    standard features including social inbox, publishing and reporting."

 - "Premium":
    + "Complete Social Media Management",
    + "All-in-one Social Inbox",
    + "Monitor Profiles, Keywords & Locations",
    + "Tasking & Social CRM Toolset",
    + "Publish, Schedule, Draft & Queue Posts",
    + "Social Content Calendar",
    + "Group, Profile & Post-Level Reporting",
    + "Includes 10 Social Profiles"

 - "Team": *(Taken from "Corporate" portion of that page)*
    + "Includes all Premium Features and...",
    + "Tag, Categorize & Report on Inbox Messages",
    + "Trends & Engagement Reports",
    + "Team & Productivity Reporting",
    + "Approval Workflow & Audience Targeting",
    + "Campaign Tagging & Reporting",
    + "Competitive Benchmark Reporting",
    + "Includes 15 Social Profiles"

 - "Enterprise":
    + "Includes all Corporate Features and...",
    + "Advanced Customer Care Tools & Reports",
    + "Advanced Keyword Listening",
    + "Build Custom Chatbots with Automation Tools",
    + "Custom URL Tracking",
    + "Store Media in a Shared Asset Library",
    + "Scheduled Report Delivery & Reporting API",
    + "Includes 20 Social Profiles"

-->
This project was bootstrapped with the [Create React App](https://github.com/facebookincubator/create-react-app) which provides stuff like
[Babel](https://babeljs.io), [Webpack](https://webpack.github.io), & [Jest](https://facebook.github.io/jest/) out of the box.

Additionally, [node-sass](https://github.com/sass/node-sass) for CSS preprocessing has been added.


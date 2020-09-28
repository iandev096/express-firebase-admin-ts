# express-firebase-admin-ts
 ExpressJS based boilerplate with firebase admin and typescript integration

## Prerequisites
  - Install dependencies using either `yarn` or `npm i`
  - Create a firebase account
  - Go to project settings
  - Go to the service account tab
  - Generate new private key
  - Download the private key. The private key is a `.json` file.
  - Replace the private key `.json` file in `./firebase-config` with your own private key `.json` file. Update the import of the private key in `firebase.ts` to your private key. 
  - Go to `firebase.ts` and update the `DATABASE_URL` with the url to your firebase realtime db.
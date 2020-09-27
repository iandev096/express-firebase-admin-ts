// firebase admin setup
import admin, { ServiceAccount } from 'firebase-admin';
import serviceAccount from "./firebase-config/my-e2e42-firebase-adminsdk-d9m5v-10ed46808b.json";

const init = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: "https://my-e2e42.firebaseio.com"
});

export default admin;

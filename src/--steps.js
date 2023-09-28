/* 
1. visit: console.firebase.google.com
2. Create project (skip google analytics)
3. register app (create config)
4. install firebase: npm install firebase
5. add config file to your project
6. DENGER: Do not publish or make firbase config to public by pushing those to github
7. Firebase: Goto docs > Build > Aithentication > web > Get Started
8. export app from the firebase.config.js file: export default app
9. Login.jsx: import { getAuth } from "firebase/auth";
10. create const auth=getAuth(app)
11. import googleAuthProvider and create a new provider
12. use signWithPopUp and pass uth and provider
13. activate sign-in methode 9google, facebook, github, etc)


 */
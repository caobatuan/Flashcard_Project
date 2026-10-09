// Mock Firebase - chỉ để build được
const firebaseConfig = {
  apiKey: "demo",
  authDomain: "demo.firebaseapp.com",
  projectId: "demo",
  storageBucket: "demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "demo"
};

const app = { name: "demo-app" };
const db = {};
const auth = {};

// Export cả named và default để khớp mọi cách import
export { app, db, auth };
export default app;

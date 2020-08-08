/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const admin = require('firebase-admin');
const readline = require('readline');

console.log(process.env.FIREBASE_APPLICATION_CREDENTIALS)
console.log(process.env.FIREBASE_APPLICATION_CREDENTIALS)
console.log(process.env.FIREBASE_TEST_ADMIN_USERNAME)
console.log(process.env.FIREBASE_TEST_ADMIN_PASSWORD)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the path to the service account key file: ', path => {
  const serviceAccount = require(path);

  rl.question('Enter database URL: ', databaseURL => {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL
    });

    rl.question('Enter user email: ', email => {
      rl.question('Enter user password: ', async password => {
        console.log('Setting admin account in authentication 🔨');
        const { uid } = await admin.auth().createUser({
          email,
          password,
          emailVerified: true
        });

        await admin.auth().setCustomUserClaims(uid, {
          isAdmin: true
        });

        console.log('Created admin account in authentication');

        console.log('Creating admin account in database');

        await admin
          .database()
          .ref(`users/${uid}`)
          .set({
            isAdmin: true,
            name: 'Test Name',
            location: 'Test Location',
            createdAt: new Date().toDateString(),
            email
          });

        console.log('Created admin account in database');
        rl.close();
        process.exit(0);
      });
      rl.write(process.env.FIREBASE_TEST_ADMIN_PASSWORD);
    });
    rl.write(process.env.FIREBASE_TEST_ADMIN_USERNAME);
  });
  // default answer to database url
  rl.write(process.env.FIREBASE_TEST_DATABASE_URL);

});

// default service account key file
rl.write(process.env.FIREBASE_APPLICATION_CREDENTIALS);

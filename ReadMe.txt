// from the bignning to the end here are what i have been the commands and steps:


// To create a new Nest project called "Dependency-Injection"
nest new Dependency-Injection

// Delete all the app.something i.e.(app.service
    , app.controller...and others related with the appModule) except main.ts


// Start everything from scratch here

// To generate Modules
nest g module computer
nest g module cpu
nest g module power

// To generate Services
nest g service cpu
nest g service power

// To generate Controllers
nest g controller computer
nest g service cpu
nest g service power

// To run the application change dir into dependency-injection>
npm run start:dev
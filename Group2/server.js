// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express"); // the server & middleware

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server

const app = express();

// Set the port number. We'll use this later in our listener

let PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);

// require htmlRoutes, too, using the same pattern
// require("./routes/htmlRoutes")(app);


// =============================================================================
// LISTENER
// This code "starts" our server
// =============================================================================

// create an app listener that logs "App listening on Port: PORT"

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

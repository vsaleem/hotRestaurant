// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData")


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {
    // send json of the table data
    res.json(tableData)
  });

  // another get request that sends back data of the waitlist
  app.get("/api/waitinglist",function(req, res) {
    res.json(waitListData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table 
    // or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    
    // pseudocode:
    // if (< 5 people in the table data)
    // push request.body into the table data array
    // and send back a json response that says "true"
    // else
    // push request.body into the wait list data array
    // and send back a json reponse that says "false"
    if(tableData.length < 5){
      tableData.push(req.body);
    }else{
      waitListData.push(req.body);
      res.json(false);    }
  });

  // ---------------------------------------------------------------------------
  // The code below clears out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of customers
    tableData.length = 0;
    // don't forget to clear the waitinglistData
    waitListData.length = 0;

    res.json({ ok: true }); // send a response letting client know clear was a success
  });
};

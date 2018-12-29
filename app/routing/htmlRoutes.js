// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "..\\public\\home.html"));
  });
  
//   View reservations
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
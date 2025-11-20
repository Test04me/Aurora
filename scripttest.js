// DEMO: Hardkodet API-nøkkel for å trigge scanning
const API_KEY = "AKIA1234567890FAKEKEY";
console.log("Starter Aurora-app med API-nøkkel:", API_KEY);
// DEMO: Usikker HTTP-kall
fetch("http://example.com/api/data")
  .then(response => response.json())
  .then(data => console.log(data));app.get('/user', (req, res) => {
  const username = req.query.username;
  // Sårbar kode – direkte string concatenation
  const query = `SELECT * FROM users WHERE name = '${username}'`;
  db.execute(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// const beauty = require("beauty");
// beauty.beautifyConsole(); //use default theme
const requestIp = require("request-ip");
const geoip = require('geoip-lite');
// const reverse = require('reverse-geocode');
var geocoding = new require('reverse-geocoding');

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBmnATbcsItV07AIzYhG-6E0ZYgZgTkh3w'
  });
// if you want set color and fonts as you like to see

// var theme = {
//     'log': ['blue','underline'],
//     'info': ['cyan','inverse'],
//     'warn': ['yellow','italic'],
//     'error': ['red','bold','underline']
// };
// beauty.setTheme(theme);//set new theme

const app = require("./main");
const port = 3000;

app.use( async (req, res, next) => {
   try {
    // get the ip
    const clientIp = await requestIp.getClientIp(req);
    console.log(clientIp);
    // get the country
    var geo = await geoip.lookup(clientIp);
    console.log(geo);

    let latlng = { lat: 30.0355, lng: 31.223 };

    googleMapsClient.geocode({ 'bounds': latlng }, (results, status) => {
        // console.log(results.status);
        if(status) {
            console.log(status.json.results);
        }
    });

    if (geo !== null) {
        console.log(geo.ll[0]);
        console.log(geo.country);
        console.log(geo.ll[0], geo.ll[1], geo.country.toString().toLowerCase());
        console.log(reverse.lookup(geo.ll[0], geo.ll[1], geo.country.toString().toLowerCase()));
    }
    next();
   } catch(error) {
       console.log(error);
   }
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

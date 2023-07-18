const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const json2csv = require('json2csv').Parser
const unirest = require("unirest")
const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer');
const calenderModel = require('./models/calender')


const PORT = 8000;
const DBURL = "mongodb+srv://kunwar:qwertyuiop@cluster-1.nzisyn1.mongodb.net/?retryWrites=true&w=majority";


const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.connect(DBURL)
    .then((db)=>{
        console.log("Connected to F1-app DB");
    })
    .catch((err)=>{
        console.log("Error Connecting to DB : ", err);
    })

// SET STORAGE
const mstorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/files");

    },
    filename:(req,file,cb)=>{
        console.log(file);
        const ext=file.mimetype.split("/")[1]
        cb(null,file.originalname)
    }
})
 
var upload = multer({ storage: mstorage })



calender = [
    {
        round : "testing",
        name : "FORMULA 1 ARAMCO PRE-SEASON TESTING 2023",
        track : "Sakhir",
        date : "23 FEB",
    },
    {
        round : "1",
        name : "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023",
        track : "Bahrain",
        date : "03 MAR",
    },
    {
        round : "2",
        name : "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2023",
        track : "Saudi Arabia",
        date : "17 MAR",
    },
    {
        round : "3",
        name : "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2023",
        track : "Australia",
        date : "",
    },
    {
        round : "4",
        name : "FORMULA 1 AZERBAIJAN GRAND PRIX 2023",
        track : "Azerbaijan",
        date : "28 APR",
    },
    {
        round : "5",
        name : "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023",
        track : "United States",
        date : "5 MAY",
    },
    {
        round : "6",
        name : "FORMULA 1 QATAR AIRWAYS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2023",
        track : "Itlay",
        date : "19 MAY",
    },
    {
        round : "7",
        name : "FORMULA 1 GRAND PRIX DE MONACO 2023",
        track : "Monaco",
        date : "26 MAY",
    },
    {
        round : "8",
        name : "FORMULA 1 AWS GRAN PREMIO DE ESPAÑA 2023",
        track : "Spain",
        date : "02 JUN",
    },
    {
        round : "9",
        name : "FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2023",
        track : "Canada",
        date : "16 JUN",
    },
    {
        round : "10",
        name : "FORMULA 1 ROLEX GROSSER PREIS VON ÖSTERREICH 2023",
        track : "Austria",
        date : "30 JUN",
    },
    {
        round : "11",
        name : "FORMULA 1 ARAMCO BRITISH GRAND PRIX 2023",
        track : "Great Britain",
        date : "07 JUL",
    },
    {
        round : "12",
        name : "FORMULA 1 QATAR AIRWAYS HUNGARIAN GRAND PRIX 2023",
        track : "Hungary",
        date : "21 JUL",
    },
    {
        round : "13",
        name : "FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
        track : "Belgium",
        date : "28 JUL",
    },
    {
        round : "14",
        name : "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2023",
        track : "Netherlands",
        date : "25 AUG",
    },
    {
        round : "15",
        name : "FORMULA 1 PIRELLI GRAN PREMIO De ITALIA 2023",
        track : "Italy",
        date : "1 SEP",
    },
    {
        round : "16",
        name : "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023",
        track : "Singapore",
        date : "15 SEP",
    },
    {
        round : "17",
        name : "FORMULA 1 LENOVO JAPANESE GRAND PRIX 2023",
        track : "Japan",
        date : "22 SEP",
    },
    {
        round : "18",
        name : "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2023",
        track : "Qatar",
        date : "06 OCT",
    },
    {
        round : "19",
        name : "FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023",
        track : "United States",
        date : "20 OCT",
    },
    {
        round : "20",
        name : "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2023",
        track : "Mexico",
        date : "27 OCT",
    },
    {
        round : "21",
        name : "FORMULA 1 ROLEX GRANDE PRÊMIO DE SÃO PAULO 2023",
        track : "Brazil",
        date : "03 NOV",
    },
    {
        round : "22",
        name : "FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2023",
        track : "United States",
        date : "16 NOV",
    },
    {
        round : "23",
        name : "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023",
        track : "Abu Dhabi",
        date : "24 NOV",
    },
]
function getResults(gp) {
    const url = `https://www.google.com/search?q=f1+result+${gp}`;
    let header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64)  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36 Viewer/96.9.4688.89"
    }
    return unirest.get(url).headers(header).then((response) => {
        let $ = cheerio.load(response.body)
        let rows = $('div[class="tsp-oh"] > div > g-expandable-content > table.tsp-tbl > tbody > tr')
        let results = []

        rows.toArray().forEach(r => {
            let dl = cheerio.load(r)
            let driver_name = dl('td[class="tsp-w"] > div[class="tsp-tln"] > div > span').text()
            let time_stamp = dl('td[class="tsp-cm tsp-mtc"] > div > span').text()
            if (driver_name.length != 0) {
                let driver = {
                    name: driver_name,
                    time: time_stamp
                }
                results.push(driver)
            }
        })
        return results
    })
}
function getStandings() {
    const url = 'https://www.google.com/search?q=f1+standings'
    let header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64)  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36 Viewer/96.9.4688.89"
    }
    return unirest.get(url).headers(header).then((response) => {
        let $ = cheerio.load(response.body)
        let rows = $('table[class="tsp-flr tsp-tpt tsp-tbl"] > tbody > tr')
        let results = []
        rows.toArray().forEach(r => {
            let dl = cheerio.load(r)
            let driver_name = dl('td[class="tsp-w"] > div[class="tsp-tln"] > div > span[class="tsp-w tsp-el tsp-db"]').text()
            let points = dl('td[class="tsp-mspc tsp-cm"] > div > span').text()
            let wins = dl('td[class="tsp-mwc tsp-cm"] > div > span').text()
            let podiums = dl('td[class="tsp-mpdc tsp-cm"] > div > span').text()

            if (driver_name.length != 0) {
                let driver = {
                    name: driver_name,
                    points: points,
                    wins: wins,
                    podiums: podiums
                }
                results.push(driver)
            }
        })
        return results
    })
}




app.get('/', (req,res)=>{
    res.render('home');
})

app.get('/calender', (req,res)=>{
    res.render('calender');
})



app.post('/calenderData',upload.single('trackimg'), (req,res)=>{
    console.log(req.file, req.body);
    
    var newGP = new calenderModel();
    
    newGP.round = req.body.round
    newGP.gpName = req.body.gpname
    newGP.country = req.body.country
    newGP.date = req.body.date
    
   
    var img = fs.readFileSync(req.file.path)
    var encode_img = img.toString('base64');

    // var final_img = {
    //     contentType:req.file.mimetype,
    //     image:new Buffer(encode_img,'base64')
    // };

    newGP.trackImg.data = new Buffer(encode_img,'base64')
    newGP.trackImg.contentType = req.file.mimetype

    newGP.save();

    res.render("calender");
})

app.get("/allGP", async (req, res, next)=>{
    result = await calenderModel.find({});
    //console.log(result)
    console.log('Calender Sent')
    res.send(result)
})


app.get('/getResults', async (req,res)=>{
    result =  await getResults('austrain')
    //console.log(result)
    console.log('Results Sent')
    res.send(result)
})


// (async () => {
//     //let res = await getResults('austrain')
//     //console.log(res)

//     let standings = await getStandings()
//     console.log(standings)
// })()



app.listen(PORT, (err)=>{
    if(err) console.log("Error : ", err)
    else console.log("App running on port : ", PORT);
})
const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express()


//penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
//penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
//penggunaan cors agar end point dapat di akses oleh cross platform
app.use(cors())


//endpoint "/test" dengan method GET
app.get("/test",(req, res)=>{
    // req merupakan variabel yang berisi data request
   // res merupakan variabel yang berisi data response dari end point
 // membuat objek yang berisi data yang akan dijadikan response
 let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode
 }
 //memberikan response dg format json yang berisi objek di atas
 res.json(response)
})


// menjalanjan server pada port 8000
app.listen(2221, () => {
    console.log("Server run on port 2221");
})


//end point "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
    //:name dan :age -> dberikan titik dua didepan menunjukkan "name" dan "age"
    //bersifat dinamis yg dapat diganti nilai nya saat melakukan request

    //menampung data yang dikirimkan
    let name = req.params.name //mengambil nilai pada parameter name
    let age = req.params.age //mengambil nilai pada parameter age

    //membuat objek yg berisi data yg akan dijadikan response
    //response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        nama: name,
        umur: age
    }
    //memberikan response dengan format JSON yg berisi objek di atas
    res.json(response)
})


//end-point "/bujur_sangkar" dgn method post
app.post("/bujur_sangkar", (req, res) => {
    //menampung data yg dikirimkan & mengkonverensi mjd tipe numerik
    let panjang = Number(req.body.panjang) //
    let lebar = Number(req.body.lebar) //
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    //membuat objek yg berisi data yg akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    //memberikan response dg format JSON yg berisi objek di atas
    res.json(response)
})


//no1
//end-point "/kubus" dgn method post
app.post("/kubus", (req, res) => {
    //menampung data yg dikirimkan & mengkonverensi mjd tipe numerik
    let rusuk = Number(req.body.rusuk) //
    let volume = rusuk * rusuk * rusuk
    let luaspermukaan = 6 * rusuk * rusuk

    //membuat objek yg berisi data yg akan dijadikan response
    let response = {
        rusuk: rusuk,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    //memberikan response dg format JSON yg berisi objek di atas
    res.json(response)
})


//end-point "/balok" dgn method post
app.post("/balok", (req, res) => {
    //menampung data yg dikirimkan & mengkonverensi mjd tipe numerik
    let panjang = Number(req.body.panjang) //
    let lebar = Number(req.body.lebar) //
    let tinggi = Number(req.body.tinggi) //
    let volume = panjang * lebar * tinggi
    let luaspermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi  ) )

    //membuat objek yg berisi data yg akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    //memberikan response dg format JSON yg berisi objek di atas
    res.json(response)
})


app.post("/ball", (req, res) => {
    let jari = Number(req. dy.jari) 
    let volume = 4/3 * 3.14 * jari * jari * jari
    let luaspermukaan = 4 * 3.14 * jari * jari
    
    let response = {
        jari: jari,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    //memberikan response dg format JSON yg berisi objek di atas
    res.json(response)
})


app.post("/tabung", (req, res) => {
    let jari = Number(req. body.jari) 
    let tinggi = Number(req. body.tinggi) 
    let volume = 3.14 * jari * jari * tinggi
    let luaspermukaan = 2 * 3.14 * jari * (jari + tinggi)
    
    let response = {
        jari: jari,
        tinggi: tinggi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    //memberikan response dg format JSON yg berisi objek di atas
    res.json(response)
})


//no 2
app.get("/convert/celcius/:c", (req,res) => {
    let c = Number(req.params.c)
    let r = 4/5 * c
    let f = 9/5 * c + 32
    let k = c + 273
    let response = {
        celcius: c,
        result: {
            reamur: r,
            fahrenheit: f,
            kelvin: k
        }
    }
    res.json(response)
})


app.get("/convert/reamur/:r", (req,res) => {
    let r = Number(req.params.r)
    let c = 5/4 * r
    let f = 9/4 * r + 32
    let k = 5/4 * r + 273
    let response = {
        reamur: r,
        result: {
            celcius: c,
            fahrenheit: f,
            kelvin: k
        }
    }
    res.json(response)
})


app.get("/convert/fahrenheit/:f", (req,res) => {
    let f = Number(req.params.f)
    let c = 5/9 * (f - 32)
    let r = 4/9 * (f - 32)
    let k = 5/9 * (f - 32) + 273
    let response = {
        fahrenheit: f,
        result: {
            celcius: c,
            reamur: r,
            kelvin: k
        }
    }
    res.json(response)
})


app.get("/convert/kelvin/:k", (req,res) => {
    let k = Number(req.params.k)
    let c = k - 273
    let r = (k - 273) * 4/5
    let f = 9/5 * (k - 273) + 32
    let response = {
        kelvin: k,
        result: {
            celcius: c,
            reamur: r,
            fahrenheit: f
        }
    }
    res.json(response)
})


            //no 3
app.post("/bujur_sangkar", (req, res) => {
    //menampung data yg dikirimkan & mengkonverensi mjd tipe numerik
    let panjang = Number(req.body.panjang) //
    let lebar = Number(req.body.lebar) //
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    //membuat objek yg berisi data yg akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    //memberikan response dg format JSON yg berisi objek di atas
    res.json(response)
})

//no 3
app.post("/desimal", (req,res) => {
    let d = Number(req.body.d)
    let b = d.toString(2)
    let o = d.toString(8)
    let h = d.toString(16).toUpperCase()
    let response = {
        desimal: d,
        result: {
            biner: b,
            oktal: o,
            hexadesimal: h
        }
    }
    res.json(response)
})

app.post("/biner", (req,res) => {
    let biner = Number(req.body.biner)
    let d = parseInt(biner, 2)
    let o = parseInt(biner, 2).toString(8)
    let h = parseInt(biner, 2).toString(16).toUpperCase()
    let response = {
        biner: biner,
        result: {
            desimal: d,
            oktal: o,
            hexadesimal: h
        }
    }
    res.json(response)
})

app.post("/oktal", (req,res) => {
    let octal = Number(req.body.octal)
    let d = parseInt(octal, 8).toString(10)
    let b = parseInt(octal, 8).toString(2)
    let h = parseInt(octal, 8).toString(16).toUpperCase()
    let response = {
        oktal: octal,
        result: {
            desimal: d,
            biner: b,
            hexadesimal: h
        }
    }
    res.json(response)
})

app.post("/hexadesimal", (req,res) => {
    let hexadecimal = Number(req.body.hexadecimal)
    let d = parseInt(hexadecimal, 16).toString(10)
    let b = parseInt(hexadecimal, 16).toString(2)
    let o = parseInt(hexadecimal, 16).toString(8)
    let response = {
        hexadesimal: hexadecimal,
        result: {
            desimal: d,
            biner: b,
            oktal: o
        }
    }
    res.json(response)
})

// Nomor 4
app.post("/bmi", (req,res) => {
    let bb = req.body.berat
    let tb = req.body.tinggi
    let bmi = bb/(tb)**2
    let status = ''
    if (bmi<18.5) {
        status= "Kekurangan berat badan"
    } else if(bmi>=18.5 && bmi<=24.9){
        status= "Normal (Ideal)"
    } else if(bmi>=25.0 && bmi<=29.9){
        status= "Kelebihan beban"
    } else if(bmi>=30.0){
        status= "Kegemukan (Obesitas)"
    }
    let response = {
        Berat: bb+' kg',
        Tinggi: tb+' cm',
        BMI: bmi,
        Status: status
    }
    res.json(response)
})

//no5
app.post("/bilangan", (req,res) => {
    let nilai = req.body.nilai
    
let status = ''
    if (nilai%2==0) {
        status= "genap"
    } else if(nilai%2==1){
        status= "ganjil"
    } 
    let response = {
        nilai:nilai,
        status:status 
    }
    res.json(response)
})

















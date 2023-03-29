const fs = require('fs');
const path=require('node:path')
const express= require('express')
const app =express();
const cors=require('cors');
app.use(cors())
const concat = require('stream-concat');

app.use(express.json());

port=3080;

app.listen(port,()=> {
  console.log(`Server listening on the port::${port}`)
})

const readableStream = fs.createReadStream("C:\\Users\\ddiaz\\OneDrive\\Escritorio\\UF1_ExamenAaD\\UF1_ExamenAaD\\Imatges\\Imatge1.jpg",{highWaterMark: 16384})
const readableStreamText = fs.createReadStream("C:\\Users\\ddiaz\\OneDrive\\Escritorio\\UF1_ExamenAaD\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt","utf8")
const WriteableStreamText = fs.createWriteStream("C:\\Users\\ddiaz\\OneDrive\\Escritorio\\UF1_ExamenAaD\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesi.txt")
const readableWStreamText = fs.createReadStream("C:\\Users\\ddiaz\\OneDrive\\Escritorio\\UF1_ExamenAaD\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesi.txt","utf8")
/*ex1
app.post('/api/ex1',(req,res)=>{
  fs.readdir("C:\\Users\\ddiaz\\OneDrive\\Escritorio\\UF1_ExamenAaD\\UF1_ExamenAaD\\Imatges",(err, files)=>{
    files.forEach(file=>{
      if (file == "Imatge1.jpg"){
      console.log(file)
      readableStream.on('data',(chunk)=>{
        console.log(chunk);
      })}
    })

  })


  })
*/
/*
combinedStream = new concat([readableStreamText,readableWStreamText]);
app.post('/api/ex1',(req,res)=>{

  fs.appendFile(WriteableStreamText)
  console.log("funca")
  combinedStream.pipe(WriteableStreamText);
  console.log("funca")

})*/

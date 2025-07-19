const express = require("express");
const app = express();
const cors= require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


async function conectDb(){
  try{
    await mongoose.connect("mongodb://localhost:27017/noteDb");
    console.log("database connected succsefully")
  }catch(err){
    console.log("not connect",err)
  }
}

conectDb();


const noteSchema = mongoose.Schema({
  title:String,
  noteBody:String,
},  {
    timestamps: true,
  })

const Note = mongoose.model('Note',noteSchema);



//create notes

app.post('/make', (req, res) => {
  
const{title,noteBody}=req.body;

//console.log(noteBody);

const note = new Note({
  title:title,
  noteBody:noteBody
})

note.save();

  res.json({ message: 'Note received successfully!' });
});


// show made notes
app.get('/notes', async (req,res)=>{
 
    try{
      const NoteData = await Note.find().sort({ createdAt: -1 });
     // console.log(NoteData);
      res.json(NoteData);

    }catch(err){
      console.log(err)
    }
 
})

//delete notes
app.delete('/note/delate/:id', async (req, res) => {
  const noteId = req.params.id;
  //console.log(noteId);
  try {
    await Note.findByIdAndDelete(noteId);
    res.json("delete succesful");
  } catch (err) {
    res.json({ error: "Delete failed" });
  }
});




app.listen("3000",(req,res)=>{
    console.log("app is running port 300");
})

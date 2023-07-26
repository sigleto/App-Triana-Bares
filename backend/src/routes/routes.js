import { Router } from "express";
import Task from '../models/Task.js'
import fs from 'fs'

const router=Router()


router.get('/',(req,res)=>res.send('esperando'))

//solicitud tipo GET (traer datos del backend)
router.get('/formulario',async(req,res)=>{
    const verta=await(Task.find())
    res.send(verta)})


//metodo post para llevar datos a la base de datos
router.post('/formulario',async(req,res)=>{
 const nueva=new Task(req.body) 
await nueva.save()
fs.appendFile('src/notas.txt', JSON.stringify(nueva) + '\n', (err) => {
    if (err) {
      console.error('Error al guardar la nota en el archivo:', err);
    }
  });
res.send(nueva);




} )


// para borrar uno concreto
router.delete("/formulario/:id",async (req,res)=>{
    try{
    const borra=await Task.deleteOne({_id:req.params.id})
    res.send(borra)
    }
    catch{res.send("no  existe archivo")}
})



export default router 
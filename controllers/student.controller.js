

import db from '../models/index.js';

export const addStudent = async(req, res) => {
  try{
    const student = await db.Student.create(req.body);
    res.status(201).josn(student);
  }
  catch(err){
     res.status(500).json({message: 'Error adding student', error: err});
  }
      
}

export const getAllStudents = async(req,res) => {
  try{
     const student =  await db.Student.findAll();
     res.status(200).json(student);
  }catch(err){
     res.status(500).json({message: 'Error fetching students',error: err})
  }
};

export const getStudentById = async(req, res) => {
  
  try{
    const student = await db.Student.findBYpk(req.params.id);
    if(!student){
      return res.status(404).json({message: 'Student not found'});
    }
    res.status(200).json(student);
  }catch(err){
    res.status(500).json({message: 'Error fetching student', error: err})
  }
};

export const deleteStudent = async(req,res)=>{
  try{
    const student = await db.Student.findBYpk(req.params.id);
    if(!student) return res.status(404).json({message: 'Student not found'});
    await student.destroy();
  }catch(err){
    res.status(500).json({message: 'Error deleting student', error: err})
  }
}

export const updateStudent = async(req,res) => {
  try{
    const student = await db.Student.findBYpk(req.params.id);
    if(!student) return res.status(404).json({message: 'Student not found'});
    await student.update(req.body);
    res.status(200).json(student);
  }catch(err){
    res.status(500).json({message: 'Error updating student', error: err})
  }
}
const welcome = async ( req , res ) =>{
    
   try{
       
           res.status(201).json("welcome user v2 ");
       }
   catch(error)
       {  res.status(401).json({ message:error.message })  };
}

module.exports ={welcome};
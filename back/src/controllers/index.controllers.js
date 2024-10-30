import {pool} from '../config/dbConnect.js'


// GET
export const get = async(req,res)=>{
      try {
        const [rows] = await pool.query("SELECT * FROM empleado");
        res.json(rows);
        
      } catch (error) {
        return res.status(500).json({message:"algo fue mal"})
      }

}

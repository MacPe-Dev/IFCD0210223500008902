import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/UserModel';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({ where: { email: email } });

    if(user) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${email}`
        })
    } 
 
    const hashedPassword = await bcrypt.hash(password, 8);
    
    try {
        // Guardarmos usuario en la base de datos
        await User.create({
            email: email,
            password: hashedPassword
        })
    
        res.json({
            msg: `Usuario ${email} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

export const loginUser = async (req: Request, res: Response) => {

    const { email, password } = req.body;

   // Validamos si el usuario existe en la base de datos
   const user: any = await User.findOne({ where: { email: email } });

   if(!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${email} en la base datos`
        })
   }

   // Validamos password
   const passwordValid = await bcrypt.compare(password, user.password)
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   // Generamos token
   const token = jwt.sign({
    email: email
   }, process.env.SECRET_KEY || 'pepito123');
   
   res.json(token);
}
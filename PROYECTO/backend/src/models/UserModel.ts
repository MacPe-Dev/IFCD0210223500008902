import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const User = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    Fnacimiento: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
}
 )
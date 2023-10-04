import { Sequelize } from "sequelize";


const sequelize = new Sequelize('appweb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;
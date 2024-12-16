import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'picpay-challenge',
    'postgres',
    'api-picpay-challenge',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
)


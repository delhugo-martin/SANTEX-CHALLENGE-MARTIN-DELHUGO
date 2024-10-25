import {createPoolool} from 'mysql2/promise'

export const poolConect = createPoolool({
    port:3000,
    host:'localhost',
    user:'root',
    password:'1317',
    database:'db_challenge'
}) 
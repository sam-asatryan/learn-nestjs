import { TypeOrmModuleOptions } from '@nestjs/typeorm'

// export const typeOrmConfig: TypeOrmModuleOptions = {
//     type       : 'postgres',
//     host       : 'localhost',
//     port       : 5432,
//     username   : 'postgres',
//     password   : 'postgres',
//     database   : 'taskmanagement',
//     entities   : [
//         __dirname + '/../**/*.entity.{ts,js}',
//     ],
//     synchronize: true,
// }

export const typeOrmConfig: TypeOrmModuleOptions = {
    type       : 'mysql',
    host       : 'localhost',
    port       : 3336,
    username   : 'root',
    password   : 'rootPassword',
    database   : 'taskmanagement',
    entities   : [
        __dirname + '/../**/*.entity.{ts,js}',
    ],
    synchronize: true,
}
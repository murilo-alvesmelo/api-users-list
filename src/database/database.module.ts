import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'ec2-3-213-228-206.compute-1.amazonaws.com',
            port: 5432,
            username: 'yrgamatheyqqvq',
            password: '3c8ddc7051ef5164a73acc2967c8dbc3867395a41fa533fd944c6a7a20f1c646',
            autoLoadEntities: true,
            synchronize: true,
        }),
    ],
})

export class DataBaseModule {}

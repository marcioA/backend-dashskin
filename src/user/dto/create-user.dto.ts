import { IsEmail, IsNotEmpty, IsNumber, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty({
        message: 'O email não pode estar vazio',
    })
    name: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty({
        message: 'O documento não pode estar vazio',
    })
    age: number;

    @ApiProperty()
    @IsEmail({}, { message: 'Invalid email message' })
    @IsNotEmpty({
        message: 'O email não pode estar vazio',
    })
    email: string;

    @ApiProperty()
    @IsNotEmpty({
        message: 'O avatar não pode estar vazio',
    })
    avatar: string;

    @ApiProperty()
    @IsNotEmpty({
        message: 'A senha não pode estar vazia',
    })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&@#!_])[0-9a-zA-Z$&@#!_]{8,}$/, {
        message: 'A senha deve conter 1 letra maiúscula, 1 letra minúscula, 1 caractere especial, 1 número e 8 digitos ou mais',
    })
    password: string;
}

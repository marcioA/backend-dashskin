import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional()
    name?: string;

    @ApiPropertyOptional()
    age?: number;

    @ApiPropertyOptional()
    avatar?: string;

    @ApiPropertyOptional()
    email?: string;

    @ApiPropertyOptional()
    password?: string;
}

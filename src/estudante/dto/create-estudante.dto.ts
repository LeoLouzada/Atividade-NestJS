import { IsEmail, IsInt, IsNumber, IsString, Min } from "class-validator";

export class CreateEstudanteDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(1)
  idade: number;

  @IsInt()
  cidadeId: number;
  }
  
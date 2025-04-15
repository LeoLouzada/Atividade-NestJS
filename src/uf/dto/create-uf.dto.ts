import { IsString } from "class-validator";

export class CreateUfDto {
    @IsString()
    sigla: string;
    
    @IsString()
    nome: string;
}

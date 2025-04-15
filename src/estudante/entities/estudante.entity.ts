import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("estudantes")
export class Estudante {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;
    
    @Column()
    email: string;
    
    @Column()
    idade: number;
    
    @Column()
    cidadeId: number;
}

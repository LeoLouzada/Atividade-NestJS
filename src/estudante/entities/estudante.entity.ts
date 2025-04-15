import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const { nanoid } = require("nanoid")

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

    @BeforeInsert()
    generateId(){
        this.id = `estu_${nanoid()}`
    }
}

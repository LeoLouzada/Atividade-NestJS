import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const { nanoid } = require("nanoid")

@Entity("ufs")
export class Uf {
    @PrimaryColumn()
    id: string;

    @Column()
    sigla: string;
        
    @Column()
    nome: string;

    @BeforeInsert()
    generateId(){
        this.id = `uf_${nanoid()}`
    }
}

import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const { nanoid } = require("nanoid")

@Entity("cidades")
export class Cidade {
    @PrimaryColumn()
    id:string;

    @Column()
    nome: string;
    
    @Column()
    estado: string;

    @BeforeInsert()
    generateId(){
        this.id = `cid_${nanoid()}`
    }
}

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("cidades")
export class Cidade {
    @PrimaryColumn()
    id:string;

    @Column()
    nome: string;
    
    @Column()
    estado: string;
}

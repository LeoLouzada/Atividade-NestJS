import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("ufs")
export class Uf {
    @PrimaryColumn()
    id: string;

    @Column()
    sigla: string;
        
    @Column()
    nome: string;
}

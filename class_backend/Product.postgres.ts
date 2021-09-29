import {BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Product extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    number!: number;

    @Column({ type: "text"})
    writer!: string;

    @Column({ type: "text"})
    title!: string;

    @Column({ type: "text"})
    contents!: string;

    @Column({ type: "timestamp", default: null, nullable: true})
    deletedAt?: Date;
}
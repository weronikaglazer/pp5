import { Client } from "./client"

export class Supplier extends Client {
    accountNumber: string
    invoices: never[]
    

    constructor(accountNumber: string) {
        super()
        this.accountNumber = accountNumber
        this.invoices = []
    }
}

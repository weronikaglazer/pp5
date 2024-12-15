export class Client {
    company: string
    nip: string
    city: string
    street: string
    comments: string
    industry: string
    active: boolean
    
    constructor(company: string = '', nip: string = '', city: string = '', street: string = '', comments: string = '', industry: string = '', active: boolean = true) {
        this.company = company
        this.nip = nip
        this.city = city
        this.street = street
        this.comments = comments
        this.industry = industry
        this.active = active
    }

    

    getData(): string {
        return `${this.company} (${this.nip})`
    }
    
    getAddress(): string {
        return `${this.city}, ${this.street}`
    }
}

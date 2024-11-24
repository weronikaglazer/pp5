

class Client {
    constructor(company: string, nip: string, city: string, street: string, comments: string, industry: string, active: boolean) {
        this.company = company
        this.nip = nip
        this.city = city
        this.street = street
        this.comments = comments
        this.industry = industry
        this.active = active
    }

    company: string
    nip: string
    city: string
    street: string
    comments: string
    industry: string
    active: boolean

    getData(): string {
        return `${this.name} (${this.nip})`
    }
    
    getAddress(): string {
        return `${this.city}, ${this.street}`
    }


}





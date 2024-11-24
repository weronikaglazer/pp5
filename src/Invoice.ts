import { Tax } from "models/Tax.ts"
import { Unit } from "models/Unit.ts"

class Invoice {
    constructor() {
    }

    name: string
    qunatity: number
    unit?: Unit
    netto?: number
    tax?: Tax
    brutto?: number
}
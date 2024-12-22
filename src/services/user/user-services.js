export class CreateUserService {
    constructor() {}

    async execute(type, name, email, CPF) {
        console.log({
            type,
            name,
            email,
            CPF
        })
    }
}
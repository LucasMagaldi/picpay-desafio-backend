export class UserService {
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
class AppError {
    public readonly message: string;
    public readonly statusCode: number;

//facilita o gerenciamento de erros na aplicação.

    constructor(message: string, statusCode: number){
        this.message = message;
        this.statusCode = statusCode;
    }

}

export default AppError;
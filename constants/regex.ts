export const MindfulRegex = {
    password: {
        errorMessage: 'Паролата ви трябва да съдържа поне 8 символа, една главна буква и една цифра',
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/  
    }
}
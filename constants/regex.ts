export const MindfulRegex = {
    password: {
        errorMessage: 'Паролата ви трябва да съдържа поне 8 символа, една главна буква и една цифра',
        regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])$/  
    }
}
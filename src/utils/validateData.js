export const validateData = (email,password) =>{

    const isValidEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email)
    const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

    if(!isValidEmail) return "Email is not valid"
    if(!isValidPassword) return "Password is not valid"

    return null;

}
export const validateInput = (isSignIn, email, password, name=null) =>{

    if(name !==null) {
        if(name.trim() === ""){
            return "Name is required"
        }
    }
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!emailRegex) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid"
    
    return null
}
export const Validate = data=>{

    const errors = {};

    if(!data.name.trim()){
        errors.name="Name Required"
    }else {
        delete errors.name
    }

    if(!data.email){
        errors.email="Email Required"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email="Email address is invalid"
    }

    if (!data.password){
        errors.password="Password Required"
    }else if (data.password.length <6){
        errors.password="Password need to be 6 character or more"
    } else {
        delete errors.password
    }

    if(!data.confirmPassword){
        errors.confirmPassword="Confirm the Password"
    }else if (data.confirmPassword!==data.password){
        errors.confirmPassword="Password do not match"
    }else {
        delete errors.confirmPassword
    }

    if (data.isAccepted){
        delete errors.isAccepted
    }else {
        errors.isAccepted="Accept our regulation"
    }


    return errors;

}
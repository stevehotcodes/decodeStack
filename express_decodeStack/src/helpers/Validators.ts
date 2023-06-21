import joi from 'joi'

export const registrationSchema =joi.object({
    firstName:joi.string().required().min(3),
    lastName:joi.string().required().min(3),
    userName:joi.string().required().min(3),
    email:joi.string().email().required(),
    password:joi.string().pattern(new  RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`)

    ),
    github:joi.string().required().min(3)
})
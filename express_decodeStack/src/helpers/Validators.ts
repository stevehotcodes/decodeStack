import joi from 'joi'

export let registrationSchema =joi.object({
    firstName:joi.string().required().min(3),
    lastName:joi.string().required().min(3),
    userName:joi.string().required().min(3),
    email:joi.string().email().required(),
    password:joi.string().pattern(new  RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`)

    ),
    github:joi.string().required().min(3)
})

export let questionInputValidators =joi.object({
    questionTitle:joi.string().required(),
    questionDescription:joi.string().required(),
    questionTag:joi.string().required()
})

export const signInValidator =joi.object({
    email:joi.string().email().required(),
    password:joi.string().pattern(new  RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`))
})

export let answersInputValidators =joi.object({

    answerDescription:joi.string().required().min(3)
    
})

export let commentInputValidators =joi.object({

    commentDescription:joi.string().required().min(1)
    
})

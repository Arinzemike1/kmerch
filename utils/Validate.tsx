
// import { errorMessages } from "../components/ErrorMessages";
// interface Values extends Object {
//     email: string,
//     emailError: string,
//     isLoading: boolean

// }
interface validateProps {
    e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
    values: object
    setValues: React.Dispatch<React.SetStateAction<any>>
}

export const validate = {
    // const errors: validateProps = {
    //     email: ""
    // }
    // const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if (!email || email.trim() === '') {
    //     errors.email = "Email is required!";
    // }
    // else if (!email.match(validEmail)) {
    //     errors.email = "Email is invalid!";
    // }
    // return errors;

    email:
    function validateEmail({e, values, setValues}: validateProps) {
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const target = e.target as HTMLInputElement;
        const name = target.name;
        const value = target.value;

        setValues({ ...values, [name + 'Error']: false })
        if (value == "") {
            setValues({ ...values, [name + 'Error']: 'Email is required!' })
        }

        setValues({ ...values, [name + 'Error']: false })
        if (!value.match(validEmail)) {
            setValues({ ...values, [name + 'Error']: 'Please enter a valid email' })
            return;
        }
    }

}

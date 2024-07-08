import { InputContainer } from "./style";

const InputField = ({ value }) => {
    return (
        <InputContainer>
            <input disabled value={value}/>
        </InputContainer>
    );
}

export default InputField; 
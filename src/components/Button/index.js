import { ButtonContainer } from "./style";

const ButtonComponent = ({ label, onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

export default ButtonComponent;
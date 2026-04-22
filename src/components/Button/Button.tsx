import "./Button.css"

type ButtonProps = {
    content: string;
    isSelected: boolean;
    leftEdge: boolean;
    rightEdge: boolean;
    onClick: () => void;
}

export const Button = ({content, isSelected, leftEdge, rightEdge, onClick}: ButtonProps) => {
    let cn = "button"
    cn += isSelected ? " selected" : "";
    cn += leftEdge ? " left-edge" : rightEdge ? " right-edge" : "";

    return (
        <button className={cn} onClick={onClick} type="button">{content}</button>
    );
}
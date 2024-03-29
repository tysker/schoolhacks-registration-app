type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    handler?: () => void;
    disabled?: boolean;
    color?: string;
    text?: string;
};

function Button({type = "button", handler = () => {}, disabled = false, color = "bg-stone-500", text = "Button"}: ButtonProps) {

    const number = Number(color?.slice(color.length - 3, color.length)) - 100;
    const hooverColor = color?.slice(0, color.length - 3) + number.toString();

    return (
        <button
            type={type}
            onClick={handler}
            disabled={disabled}
            className={`rounded-full ${color} p-3 font-extrabold hover:${hooverColor} active:${hooverColor} dark:text-stone-900`}
        >
            {text}
        </button>
    );
}

export default Button;

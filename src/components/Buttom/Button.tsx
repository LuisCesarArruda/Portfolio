import "./Style.css"

type ButtonProps = {
    text: string;
    onClick: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="btn btn--bg"
        >
            {text}
        </button>
    );
}
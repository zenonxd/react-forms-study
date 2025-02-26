
const Input = ({
                   id,
                   label,
                   type,
                   placeholder,
                    //tudo isso vem do custom hook ⬇️
                   onChange,
                   value,
                   onBlur,
                   error }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                placeholder={placeholder}
                type={type}

                //props do custom hook
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            {error && <p>{error}</p>}
        </>
    );
};

export default Input;


import { useCallback, useState } from "react";

export function Form() {
    const [value, setValue] = useState("Change me");

    // const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    //     setValue(event.currentTarget.value);
    // }, [setValue])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value)
    }

    return (
        <div>
            <input value={value} onChange={handleChange} />
            <p>Value: {value}</p>
        </div>
    )
}

export default Form;
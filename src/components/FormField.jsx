const FormField = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isRandomDescription,
    handleRandomDescription,
}) => {
    return (
        <div>
            <div className="mb-2 flex items-center gap-2">
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-900"
                >
                    {labelName}
                </label>
                {isRandomDescription && (
                    <button
                        type="button"
                        onClick={handleRandomDescription}
                        className="rounded-[5px] bg-[#ececf1] px-2 py-1 text-xs font-semibold"
                    >
                        Überrasche mich!
                    </button>
                )}
            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className="block w-full rounded-lg bg-gray-50 p-3 text-sm text-gray-900 outline-none ring-2 ring-offset-2 focus:ring-[#4649ff]"
            />
        </div>
    );
};
export default FormField;

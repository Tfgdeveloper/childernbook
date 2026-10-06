const InputField = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    id,
    required = false,
    disabled = false,
    error,
    helperText,
    className = "",
  }) => {
    const inputId = id || name;
  
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="font-body text-sm font-semibold text-neutral-900"
          >
            {label}
          </label>
        )}
  
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`h-12 w-full rounded-xl border bg-white px-4 font-body text-sm outline-none transition-all placeholder:text-neutral-400 ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-neutral-300 focus:border-black focus:ring-2 focus:ring-neutral-200"
          } disabled:cursor-not-allowed disabled:bg-neutral-100`}
        />
  
        {error && (
          <p className="font-body text-xs text-red-500">
            {error}
          </p>
        )}
  
        {!error && helperText && (
          <p className="font-body text-xs text-neutral-500">
            {helperText}
          </p>
        )}
      </div>
    );
  };
  
  export default InputField;
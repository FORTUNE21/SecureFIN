import "./Textarea.scss";

interface TextareaTypes {
  textareaClass?: string;
  labelClass?: string;
  label?: string;
  placeholder?: string;
  onChange?: Function;
  value?: string;
  cols?: number;
  rows?: number;
  id?: string;
  name?: string;
  invertStyle?: boolean;
  hasError?: boolean;
  errorMsg?: string;
  className?: string;
}

const Textarea = (props: TextareaTypes) => {
  const {
    textareaClass,
    labelClass,
    placeholder,
    label,
    onChange,
    value,
    cols,
    rows,
    id,
    name,
    invertStyle,
    errorMsg,
    hasError,
    className,
  } = props;
  return (
    <>
      <div className={`textarea-input ${className}`}>
        <label className={`label ${labelClass}`}>{label}</label>
        <textarea
          className={`textarea  ${
            invertStyle ? "textarea-invert" : ""
          } ${textareaClass} ${hasError ? "textarea-error-input" : ""}`}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
          cols={cols}
          rows={rows}
          id={id}
          name={name}
        />
        {hasError && (
          <span className="textarea-error">
            {errorMsg ? errorMsg : `${label} is required.`}
          </span>
        )}
      </div>
    </>
  );
};

export default Textarea;

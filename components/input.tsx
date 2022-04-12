import { HTMLInputTypeAttribute, useState } from "react";

const unfocusInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") event.currentTarget.blur();
};

type TextFieldProps = {
    name?: string;
    type?: HTMLInputTypeAttribute;
    updateEveryChange?: boolean;
    autoFocus?: boolean;
    value: string;
    onChange: (value: string) => Promise<boolean>;
};

export function TextField(props: TextFieldProps): JSX.Element {
    const { name, type = "text", updateEveryChange = false, autoFocus, value, onChange } = props;
    const [currentValue, setCurrentValue] = useState<string | undefined>();

    const onSubmit = async () => {
        if (currentValue == null) return;

        const result = await onChange(currentValue);
        if (!result) {
            console.error("Input value requirements not met.");
            return;
        }

        setCurrentValue(undefined);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {name != null && (
                <div style={{
                    fontSize: "10pt",
                    marginBottom: "0.5rem"
                }}>
                    {name}
                </div>
            )}
            <input
                type={type}
                name=""
                id=""
                style={{
                    backgroundColor: "#edf2f7",
                    color: "#4a5568",
                    padding: "0.25rem 0.5rem",
                    width: "100%",
                    fontSize: "14pt",
                    border: "none",
                    borderRadius: "0.25rem",
                    boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
                    pointerEvents: "auto"
                }}
                autoFocus={autoFocus}
                value={currentValue ?? value}
                onChange={async (event) => {
                    const val = event.target.value;
                    if (updateEveryChange) {
                        await onChange(val);
                        return;
                    }

                    setCurrentValue(val);
                }}
                onKeyDown={unfocusInput}
                onBlur={onSubmit}
            />
        </div>
    );
}

type TextAreaFieldProps = {
    name?: string;
    maxHeight?: string;
    value: string;
    onChange: (value: string) => Promise<boolean>;
}

export function TextAreaField(props: TextAreaFieldProps): JSX.Element {
    const { name, maxHeight, value, onChange } = props;
    const [currentValue, setCurrentValue] = useState<string | undefined>();

    const onSubmit = async () => {
        if (currentValue == null)
            return;

        const result = await onChange(currentValue);
        if (!result) {
            console.error("Input value requirements not met.");
            return;
        }

        setCurrentValue(undefined);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {name != null && (
                <div style={{
                    fontSize: "10pt",
                    marginBottom: "0.5rem"
                }}>
                    {name}
                </div>
            )}
            <textarea name="" id="" 
                style={{
                    backgroundColor: "#edf2f7",
                    color: "#4a5568",
                    padding: "0.25rem 0.5rem",
                    width: "100%",
                    fontSize: "14pt",
                    border: "none",
                    borderRadius: "0.25rem",
                    boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
                    pointerEvents: "auto",
                    resize: "vertical",
                    maxHeight
                }}
                rows={3}
                value={currentValue ?? value} 
                onChange={event => {
                    const val = event.target.value;
                    setCurrentValue(val);
                }}
                onBlur={onSubmit} />
        </div>
    );
}

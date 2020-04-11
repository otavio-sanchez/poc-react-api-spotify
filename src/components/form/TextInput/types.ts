export interface Props {
    onKeyDown?: (evento: React.SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (name: string, value: string) => void;
    placeholder?: string;
    name: string;
    label?: string;
    type?: string;
}

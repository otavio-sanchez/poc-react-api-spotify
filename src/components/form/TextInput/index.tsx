import * as React from 'react';
import { Input, Line, InputWrapper } from './style';
import { useSpring } from 'react-spring';
import { Props } from './types';
import { Label } from '../../texts';

const TextInput = ({ label, placeholder, onChange, name, type }: Props): JSX.Element => {
    const [focused, setFocused] = React.useState(false);
    const propsStyle = useSpring({
        from: { width: 0 },
        width: focused ? 100 : 0,
        config: { duration: 400 },
    });

    return (
        <InputWrapper>
            <Label>
                <>{label}</>
            </Label>
            <Input
                focused={focused}
                placeholder={placeholder ? placeholder : 'Digite aqui...'}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                    return onChange && onChange(name, event.target.value);
                }}
                onFocus={(): void => {
                    setFocused(true);
                }}
                onBlur={(): void => {
                    setFocused(false);
                }}
                type={type ? type : 'text'}
            />

            <Line style={{ width: propsStyle.width.interpolate((x) => `${x}%`) }} />
        </InputWrapper>
    );
};

export default TextInput;

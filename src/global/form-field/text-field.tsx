import React from 'react';
import { SxProps, TextField, TextFieldProps, TextFieldVariants } from '@mui/material';

interface StandardTextFieldProps {
    field: TextFieldProps;
    size?: 'small' | 'medium';
    type?: string
    variant?: TextFieldVariants | undefined;
    label: string;
    autoComplete: string;
    error?: boolean;
    helperText: string;
    sx?: SxProps
}

export const StandardTextField: React.FC<StandardTextFieldProps> = ({ field,
    type,
    size = 'small',
    variant = 'outlined',
    label,
    autoComplete,
    error,
    helperText,
    sx = {} }) => {
    return (
        <TextField
            {...field}
            fullWidth
            size={size}
            variant={variant}
            label={label}
            type={type}
            autoComplete={autoComplete}
            error={error}
            helperText={helperText}
            sx={{ ...sx }}
        />
    );
};

import { FC } from 'react';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: size === 'small' ? '8px 12px' : size === 'large' ? '16px 24px' : '12px 16px',
        fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
        width: fullWidth ? '100%' : 'auto',
        backgroundColor:
          variant === 'secondary'
            ? '#dc004e'
            : variant === 'outlined'
            ? 'transparent'
            : '#1976d2',
        color: variant === 'outlined' ? '#1976d2' : 'white',
        border: variant === 'outlined' ? '2px solid #1976d2' : 'none',
        borderRadius: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        fontWeight: 500,
      }}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
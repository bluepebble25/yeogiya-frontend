import React from 'react';
import { Button, Typography } from '@mui/material';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ padding: '12px', borderRadius: '8px' }}
      onClick={onClick}
    >
      <Typography color={'white'} fontSize={'18px'}>
        {children}
      </Typography>
    </Button>
  );
}

export default PrimaryButton;

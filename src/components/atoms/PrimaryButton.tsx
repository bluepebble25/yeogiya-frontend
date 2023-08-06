import React from 'react';
import { Button, Typography } from '@mui/material';
import { isDisabled } from '@testing-library/user-event/dist/utils';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

function PrimaryButton({
  children,
  onClick,
  isDisabled = false,
}: PrimaryButtonProps) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ padding: '12px', borderRadius: '8px' }}
      onClick={onClick}
      disabled={isDisabled}
    >
      <Typography color={'white'} fontSize={'18px'}>
        {children}
      </Typography>
    </Button>
  );
}

export default PrimaryButton;

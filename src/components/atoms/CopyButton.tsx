import React, { useState } from 'react';
import { Fade, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface CopyButtonProps {
  text: string;
}

function CopyButton({ text }: CopyButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyClipBoard = async (text: string) => {
    try {
      if (text) await navigator.clipboard.writeText(text);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 1500);
    } catch (error) {
      alert('복사 실패!');
    }
  };

  return (
    <Tooltip
      title="클립보드에 복사됨"
      open={showTooltip}
      placement="bottom"
      disableFocusListener
      disableHoverListener
      disableTouchListener
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 700 }}
    >
      <IconButton
        size="small"
        onClick={() => {
          handleCopyClipBoard(text);
        }}
      >
        <ContentCopyIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

export default CopyButton;

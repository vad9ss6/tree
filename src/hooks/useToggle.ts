import { useState } from 'react';

type ReturnValue = {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  toggle: () => void;
};

export function useToggle(initial = false): ReturnValue {
  const [open, setOpen] = useState(initial);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);
  const toggle = () => setOpen((o) => !o);

  return { open, onOpen, onClose, toggle };
}

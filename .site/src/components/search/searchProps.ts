import { useCallback, useRef, useState, type ComponentRef } from 'react';

export function useSearchProps() {
  let buttonRef = useRef<ComponentRef<'button'>>(null);
  let [open, setOpen] = useState(false);

  return {
    buttonProps: {
      ref: buttonRef,
      onClick() {
        setOpen(true);
      },
    },
    dialogProps: {
      open,
      setOpen: useCallback(
        (open: boolean) => {
          let { width = 0, height = 0 } =
            buttonRef.current?.getBoundingClientRect() ?? {};
          if (!open || (width !== 0 && height !== 0)) {
            setOpen(open);
          }
        },
        [setOpen],
      ),
    },
  };
}

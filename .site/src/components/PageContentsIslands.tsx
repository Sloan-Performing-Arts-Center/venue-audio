import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';
import clsx from 'clsx';

const isOpenStore = atom(false);
const setIsOpen = isOpenStore.set;

export function ContentsFrame({ children }: { children?: React.ReactNode }) {
  const isOpen = useStore(isOpenStore);

  return (
    <>
      <div className={clsx('md:visible', isOpen ? 'visible' : 'invisible')}>
        {/*  */}
        {children}
      </div>
    </>
  );
}

export function ContentsToggleButton({
  action,
  ...props
}: { action: 'OPEN' | 'CLOSE' } & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <>
      <button
        {...props}
        onClick={() => setIsOpen(action === 'OPEN' ? true : false)}
      />
    </>
  );
}

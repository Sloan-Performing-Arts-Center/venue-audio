import { useSearchProps } from './searchProps';
import SearchDialog from './Search';
import { SearchIcon } from './SearchIcons';

export default function SearchButton() {
  let { buttonProps, dialogProps } = useSearchProps();

  return (
    <div className="max-xs:pr-3 absolute inset-y-0 right-0 flex flex-row items-center pr-4">
      <button
        type="button"
        className="relative flex items-center justify-center rounded-md bg-zinc-700/60 transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        aria-label="Find something..."
        {...buttonProps}
      >
        <span className="absolute size-12" />
        <SearchIcon className="max-xs:size-5.5 size-6 stroke-zinc-900 dark:stroke-zinc-100" />
      </button>
      <SearchDialog {...dialogProps} />
    </div>
  );
}

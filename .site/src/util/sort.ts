export type SortInput = { [key: string]: unknown };

/** sorts a set of objects in alphabetical order. pass a `getString` function to choose the correct object parameter to compare. */
export function sortAlphabetical<T extends SortInput>(
  arr: T[],
  getString: (object: T) => string,
) {
  return arr.sort(alphabetical(getString));
}

export function alphabetical<T extends SortInput>(
  getString: (object: T) => string,
): (a: T, b: T) => number {
  return (a, b) => {
    if (getString(a).toLowerCase() < getString(b).toLowerCase()) return -1;
    if (getString(a).toLowerCase() > getString(b).toLowerCase()) return 1;
    return 0;
  };
}

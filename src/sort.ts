export function simpleSort<T extends number | string>(
  arr: T[],
  order: 'asc' | 'desc' = 'asc'
): T[] {
  const copy = [...arr];

  copy.sort((a, b) => {
    let cmp: number;

    if (typeof a === 'number' && typeof b === 'number') {
      cmp = a - b;
    } else {
      cmp = String(a).localeCompare(String(b));
    }

    return order === 'asc' ? cmp : -cmp;
  });

  return copy;
}

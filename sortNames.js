function sortNames(names, order = 'asc') {
  return names.sort((a, b) => {
    if (order === 'asc') return a.localeCompare(b);
    else return b.localeCompare(a);
  });
}

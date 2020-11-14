const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const sortData = (data) => [...data].sort((a, b) => a.cases > b.cases ? -1 : 1);
// can have more private function here.
// only export we need
export { sortData, swap }


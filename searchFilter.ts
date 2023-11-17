import { Some } from "helpers";

// Helper function to search `searchText` against `terms`
// Usage:
// searchFilter("pete", "Peter", "Stewie", "Brian") //=> true
// searchFilter("chris", "Peter", "Stewie", "Brian") //=> false
function searchFilter(searchText: string, ...terms: Array<string>): boolean {
  return terms
    .map((t) => Some.String(t).toLowerCase())
    .some((term) => term.includes(Some.String(searchText).toLowerCase()));
}

export default searchFilter;

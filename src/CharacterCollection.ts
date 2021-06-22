import { Sorter } from "./Sorter";

export class CharacterCollecion extends Sorter {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftI: number, rightI: number): boolean {
    return this.data[leftI].toLowerCase() > this.data[rightI].toLowerCase()
  }

  swap(leftI: number, rightI: number): void {
    const item = this.data.split('')
    const leftRef = item[leftI];
    item[leftI] = item[rightI];
    item[rightI] = leftRef;

    this.data = item.join('');
  }
}
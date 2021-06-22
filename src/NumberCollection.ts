import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super()
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftI: number, rightI: number): boolean {
    return this.data[leftI] > this.data[rightI];
  }

  swap(leftI: number, rightI: number): void {
    const leftRef = this.data[leftI];
    this.data[leftI] = this.data[rightI]
    this.data[rightI] = leftRef
  }
}
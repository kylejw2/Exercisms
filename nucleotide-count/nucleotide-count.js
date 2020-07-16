//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(str) {
    if (/[^ACGT]/.test(str)) {throw new Error("Invalid nucleotide in strand");}
    const nucleotideBank = {
      'A': 0,
      'C': 0,
      'G': 0,
      'T': 0
    }
    for (let i = 0; i < str.length; i++) {
      nucleotideBank[str[i]]++;
    }
    return `${nucleotideBank.A} ${nucleotideBank.C} ${nucleotideBank.G} ${nucleotideBank.T}`;
  }
}

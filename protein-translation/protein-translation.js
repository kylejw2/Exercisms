//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (RNA) => {
  if (RNA === undefined || RNA === '') {return [];}
  const codons = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  }
  const sequence = RNA.match(/.{1,3}/g);
  const proteins = [];
  for (let i = 0; i < sequence.length; i++) {
    if (codons[sequence[i]] === 'STOP') {break;}
    else if (!codons.hasOwnProperty(sequence[i])) {throw 'Invalid codon'}
    else {proteins.push(codons[sequence[i]])}
  }
  return proteins;
};

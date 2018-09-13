const translate = str => {
  let proteinArr = [];
  if (!str) {
    return proteinArr
  };
  for (let i = 0; i < str.length; i += 3) {
    let codon = str.slice(i, i + 3);
    if (codon === 'UAA' || codon === 'UAG' || codon === 'UGA') {
      return proteinArr
    } else if (codon === 'AUG') {
      proteinArr.push('Methionine')
    } else if (codon === 'UUU' || codon === 'UUC') {
      proteinArr.push('Phenylalanine')
    } else if (codon === 'UUA' || codon === 'UUG') {
      proteinArr.push('Leucine')
    } else if (codon === 'UCU' || codon === 'UCC' || codon === 'UCA' || codon === 'UCG') {
      proteinArr.push('Serine')
    } else if (codon === 'UAU' || codon === 'UAC') {
      proteinArr.push('Tyrosine')
    } else if (codon === 'UGU' || codon === 'UGC') {
      proteinArr.push('Cysteine')
    } else if (codon === 'UGG') {
      proteinArr.push('Tryptophan')
    } else throw new Error('Invalid codon')
  }
  return proteinArr;
}

export default translate;
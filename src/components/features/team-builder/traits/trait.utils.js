export const findMatchingTrait = (traits, traitName) => {
  return traits.find((trait) => trait.name === traitName);
};

export const additionalTraits = (entry, traits) => ({
  ...entry,
  traits: { ...entry.traits, ...traits },
});

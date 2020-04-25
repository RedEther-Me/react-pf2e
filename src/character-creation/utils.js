export const counterSelectionHelper = ({
  itemName,
  group = {},
  currentFree = 0,
  fillValue,
}) => {
  const { [itemName]: currentSkill, ...selectedSkills } = group;

  const isSelected = !!currentSkill;

  const nextFree = isSelected ? currentFree + 1 : currentFree - 1;
  const value = {
    ...selectedSkills,
    ...(isSelected ? {} : { [itemName]: fillValue }),
  };

  return { isSelected, nextFree, value };
};

import {useSelect} from "downshift";

import {
  SelectContainer,
  SelectButton,
  ButtonText,
  Menu,
  ItemsContainer,
  Item,
  Label,
  SelectButtonIconContainer,
  SelectButtonIcon,
  SelectWrapper,
  SelectTriggerContainer
} from "./utils";

export default function Select(props) {
  const {onChange, value, items, label, error, direction} = props;
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    items,
    initialSelectedItem: value,
    itemToString: item => (item ? item.name : ""),
    onSelectedItemChange: change => onChange(change.selectedItem)
  });
  return (
    <SelectContainer>
      <SelectWrapper direction={direction}>
        <Label {...getLabelProps()}>{label}</Label>
        <SelectTriggerContainer>
          <SelectButton {...getToggleButtonProps({error})} type="button">
            <ButtonText>{selectedItem ? selectedItem.name : ""}</ButtonText>
            <SelectButtonIconContainer>
              <SelectButtonIcon isOpen={isOpen} />
            </SelectButtonIconContainer>
          </SelectButton>
          <Menu {...getMenuProps()}>
            <ItemsContainer>
              {isOpen &&
                items.map((item, index) => (
                  <Item
                    isSelected={highlightedIndex === index}
                    key={[item.name, index].join("-")}
                    {...getItemProps({item, index})}
                  >
                    {item.name}
                  </Item>
                ))}
            </ItemsContainer>
          </Menu>
        </SelectTriggerContainer>
      </SelectWrapper>
    </SelectContainer>
  );
}

import React, { Component } from 'react';
import { arrayOf, func, node, oneOf, shape, string, bool } from 'prop-types';
import Downshift from 'downshift';
import styled, { css, withTheme } from 'styled-components';

import noop from 'utils/noop';
import DropdownButton from './components/DropdownButton';
import DropdownList from './components/DropdownList';
import ExpandButton from './components/ExpandButton';

const validIndex = /(\d+)_(-?\d+)/;
let setHighlightedIndex;
let toggleMenu;
let closeMenu;
let selectHighlightedItem;

const Container = styled.div`
  position: relative;
  display: inline-block;
  ${({ theme: { rtl } }) =>
    rtl &&
    css`
      direction: rtl;
    `}
  ${({ block }) =>
    block &&
    css`
      display: block;
    `};
`;

/* eslint-disable react/destructuring-assignment */
class Dropdown extends Component {
  static propTypes = {
    /** Fit the width to its parent width when it is `true`.
     * For Dropdown with cascading menu, `block` is only applied to the top-level menu.
     * See **Block with cascading menu** example below.
     */
    block: bool,
    /** Pop menu items */
    items: arrayOf(shape({})).isRequired,
    /** The currently selected item */
    selectedItem: shape({}),
    /** Callback function, to be executed when user selected an item and it has changed */
    onChange: func,
    /** Callback function, to be executed when user selected an item */
    onSelect: func,
    /** Callback function, to be executed when user clicked outside of pop menu */
    onOuterClick: func,
    /** Label of the component, will be shown before user selected option */
    defaultLabel: string,
    /** Open direction of pop menu */
    direction: oneOf(['left', 'right', 'auto']),
    /** Variant of component, `default` is the component with standard select button,
     * `compact` is the component with icon-only button */
    variant: oneOf(['default', 'compact']),
    /** Custom icon for the Dropdown button, if not supplied default icon will be used:
     * (`v`) icon on `default` variant and (**⋮**) icon on `compact` variant */
    icon: node,
    /** A boolean which, if true, disables the Dropdown */
    disabled: bool,
    /** injected by with theme, used to handle key down for auto direction and rtl */
    theme: shape({
      rtl: bool,
    }),
  };

  static defaultProps = {
    block: false,
    selectedItem: undefined,
    onChange: noop,
    onOuterClick: noop,
    onSelect: noop,
    defaultLabel: 'Options',
    direction: 'auto',
    variant: 'default',
    icon: undefined,
    disabled: false,
    theme: {
      rtl: false,
    },
  };

  state = {
    depthLevel: 0,
    highlightedIndexes: [],
    listCounts: [this.props.items.length],
  };

  // sync highlighted indexes in state and Downshift
  setHighlightedIndexes = (index, depthLevel) => {
    setHighlightedIndex(index); // method in Downshift
    this.handleHighlightedIndexes(index, depthLevel);
  };

  handleDepthLevel = level => {
    const { depthLevel } = this.state;
    if (depthLevel === level) return;
    this.setState({ depthLevel: level });
  };

  handleHighlightedIndexes = (index, depthLevel) => {
    const { highlightedIndexes } = this.state;
    const expectedCount = depthLevel + 1;
    if (
      highlightedIndexes[depthLevel] === index &&
      highlightedIndexes.length === expectedCount
    )
      return;
    const updatedArray = [...highlightedIndexes].slice(0, expectedCount);
    updatedArray[depthLevel] = index;
    this.setState({ highlightedIndexes: updatedArray });
  };

  handleListCounts = (count, depthLevel) => {
    const { listCounts } = this.state;
    const expectedCount = depthLevel + 1;
    if (listCounts[depthLevel] === count && listCounts.length === expectedCount)
      return;
    const updatedArray = [...listCounts].slice(0, expectedCount);
    updatedArray[depthLevel] = count;
    this.setState({ listCounts: updatedArray });
  };

  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        if (changes.selectedItem.options) return state;
        return changes;
      default:
        return changes;
    }
  };

  // override method defined in Downshift to support sub-options
  moveHighlightedIndex = (moveAmount = 1) => {
    const { highlightedIndexes, depthLevel, listCounts } = this.state;
    // get highlightedIndex in state
    const baseId = highlightedIndexes[depthLevel] || '0_-1';
    // get current list count
    const count = listCounts[depthLevel];
    const lastIndex = count - 1;
    // new index
    const [, , subIndex] = validIndex.exec(baseId);
    let updatedSubIndex = parseInt(subIndex, 10) + moveAmount;
    if (updatedSubIndex < 0) {
      updatedSubIndex = lastIndex;
    } else if (updatedSubIndex > lastIndex) {
      updatedSubIndex = 0;
    }
    // set updated highlightedIndexes
    const updatedIndex = `${depthLevel}_${updatedSubIndex}`;
    this.setHighlightedIndexes(updatedIndex, depthLevel);
  };

  triggerSubOptions = (open = true) => {
    const { highlightedIndexes, depthLevel, listCounts } = this.state;
    const updatedDepthLevel = open ? depthLevel + 1 : depthLevel - 1;
    if (updatedDepthLevel < 0) return;
    // get highlightedIndex in state
    const baseId = highlightedIndexes[depthLevel];
    if (baseId === null) return;
    // prevent update if listCounts length === updatedDepthLevel
    if (listCounts.length === updatedDepthLevel) return;
    // new index
    const updatedIndex = open
      ? `${updatedDepthLevel}_0`
      : highlightedIndexes[updatedDepthLevel];
    // set updated highlightedIndexes and updated depthLevel
    this.handleDepthLevel(updatedDepthLevel);
    this.setHighlightedIndexes(updatedIndex, updatedDepthLevel);
  };

  selectHighlightedItem = () => {
    const { depthLevel, listCounts } = this.state;
    const subOptionsAvailable = listCounts.length - 1 > depthLevel;
    if (!subOptionsAvailable) {
      selectHighlightedItem();
    }
  };

  handleKeyDown = (e, isOpen) => {
    const moveAmount = e.shiftKey ? 5 : 1;
    let arrowRightToOpenSubOptions = true;
    const {
      theme: { rtl },
    } = this.props;
    switch (this.props.direction) {
      case 'right':
        arrowRightToOpenSubOptions = true;
        break;
      case 'left':
        arrowRightToOpenSubOptions = false;
        break;
      default:
        arrowRightToOpenSubOptions = !rtl;
    }

    switch (e.key) {
      case 'ArrowDown':
        // eslint-disable-next-line no-param-reassign
        e.nativeEvent.preventDownshiftDefault = true;
        this.moveHighlightedIndex(moveAmount);
        break;
      case 'ArrowUp':
        // eslint-disable-next-line no-param-reassign
        e.nativeEvent.preventDownshiftDefault = true;
        this.moveHighlightedIndex(-moveAmount);
        break;
      case 'ArrowRight':
        this.triggerSubOptions(arrowRightToOpenSubOptions);
        break;
      case 'ArrowLeft':
        this.triggerSubOptions(!arrowRightToOpenSubOptions);
        break;
      case 'Escape':
        e.nativeEvent.preventDownshiftDefault = true;
        closeMenu();
        break;
      case ' ':
        if (!isOpen) {
          toggleMenu();
        } else {
          // do not select if item is disabled:
          const { depthLevel, highlightedIndexes } = this.state;
          const getItemIndex = depth => highlightedIndexes[depth].split('_')[1];
          let depth = 0;
          let item = this.props.items[getItemIndex(depth)];
          while (depth < depthLevel) {
            depth += 1;
            item = item.options[getItemIndex(depth)];
          }
          if (!item.disabled) this.selectHighlightedItem();
          // TODO: maybe skip disabled items when navigating with arrow keys
        }
        break;
      default:
        break;
    }
  };

  handleChange = selection => {
    this.setState({ highlightedIndexes: [] });
    this.props.onChange(selection);
  };

  handleOuterClick = stateAndHelpers => {
    this.setState({ highlightedIndexes: [] });
    this.props.onOuterClick(stateAndHelpers);
  };

  handleSelect = selectedItem => {
    if (selectedItem && selectedItem.onSelect) {
      selectedItem.onSelect(selectedItem);
    }
    this.props.onSelect(selectedItem);
  };

  render() {
    const {
      block,
      items,
      selectedItem,
      defaultLabel,
      onChange,
      onOuterClick,
      direction,
      variant,
      icon,
      disabled,
      ...remainProps
    } = this.props;
    const { highlightedIndexes } = this.state;
    return (
      <Downshift
        onChange={this.handleChange}
        onOuterClick={this.handleOuterClick}
        onSelect={this.handleSelect}
        selectedItem={selectedItem}
        itemToString={item => (item ? item.value : '')}
        stateReducer={this.stateReducer}
      >
        {({
          getInputProps,
          getItemProps,
          getToggleButtonProps,
          getRootProps,
          isOpen,
          highlightedIndex,
          selectHighlightedItem: dsSelectHighlightedItem,
          selectedItem: dsSelectedItem,
          setHighlightedIndex: dsSetHighlightedIndex,
          toggleMenu: dsToggleMenu,
          closeMenu: dsCloseMenu,
        }) => {
          selectHighlightedItem = dsSelectHighlightedItem;
          setHighlightedIndex = dsSetHighlightedIndex;
          toggleMenu = dsToggleMenu;
          closeMenu = dsCloseMenu;
          return (
            <Container {...getRootProps({ ...remainProps, block })}>
              {variant === 'compact' && (
                <ExpandButton
                  icon={icon}
                  disabled={disabled}
                  {...getToggleButtonProps()}
                  {...getInputProps({
                    onKeyDown: e => this.handleKeyDown(e),
                  })}
                />
              )}
              {variant !== 'compact' && (
                <DropdownButton
                  itemIcon={
                    (selectedItem && selectedItem.icon) ||
                    (dsSelectedItem && dsSelectedItem.icon)
                  }
                  label={
                    (selectedItem && selectedItem.label) ||
                    (dsSelectedItem && dsSelectedItem.label) ||
                    defaultLabel
                  }
                  icon={icon}
                  disabled={disabled}
                  isMenuOpen={isOpen}
                  {...getToggleButtonProps()}
                  {...getInputProps({
                    onKeyDown: e => this.handleKeyDown(e, isOpen),
                  })}
                />
              )}
              {isOpen && (
                <DropdownList
                  block={block}
                  direction={direction}
                  items={items}
                  highlightedIndex={highlightedIndex}
                  highlightedIndexes={highlightedIndexes}
                  getItemProps={getItemProps}
                  handleDepthLevel={this.handleDepthLevel}
                  handleHighlightedIndexes={this.handleHighlightedIndexes}
                  handleListCounts={this.handleListCounts}
                />
              )}
            </Container>
          );
        }}
      </Downshift>
    );
  }
}

export default withTheme(Dropdown);

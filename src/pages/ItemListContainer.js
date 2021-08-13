import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items , cartItems , setCartItems}) {
  const handleClick = (e, itemId) => {
    let checkItem = cartItems.find(item => itemId === item.itemId );
    if (checkItem === undefined) {
      checkItem = {itemId : itemId , quantity : 1}
      cartItems.push(checkItem);
    } else {
      checkItem.quantity++;
    }
  
    setCartItems([...cartItems]);
  };

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;

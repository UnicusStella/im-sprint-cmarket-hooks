import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items , cartItems , setCartItems}) {
  const handleClick = (e, itemId) => {

    let filterItem = cartItems.filter(el => el.itemId === itemId);
    if(filterItem.length === 0){
      filterItem = {itemId : itemId, quantity : 1}
      cartItems.push(filterItem);
    }else{
      cartItems.map(el => el.quantity++)
    }
    setCartItems([...cartItems])
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

import "./ListingItem.css";

const ListingItem = (props) => {
  return (
    <div className="listingItem">
      <div className="left-lt">
        <img className="icon" src={require(`${props.itemInfo.img}`)}></img>
      </div>
      <div className="mid-lt">
        <div className="item-info-lt">
          <span className="item-info-p" style={{ fontStyle: "bold" }}>
            {props.itemInfo.Name}
          </span>
          <span className="item-info-p"> Quality : {props.itemInfo.QLT}</span>
          <span className="item-info-p"> Weight : {props.itemInfo.Weight}</span>
          <span className="item-info-p"> Cal : {props.itemInfo.Cal}</span>
        </div>
      </div>
      <div className="right-lt">
        <span className="Quantity-lt">x{props.itemInfo.QTY}</span>
      </div>
    </div>
  );
};

export default ListingItem;

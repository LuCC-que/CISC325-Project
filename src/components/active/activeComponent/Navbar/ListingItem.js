import "./ListingItem.css";

const ListingItem = (props) => {
  return (
    <div className="listingItem">
      <div className="left-lt">
        <img className="icon" src={require(`${props.itemInfo.img}`)}></img>
      </div>
      <div className="mid-lt">
        <div className="item-info-lt">
          <span className="item-info-p" style={{ fontWeight: "bold" }}>
            {props.itemInfo.Name}
          </span>
          <span
            className="item-info-p"
            style={{
              backgroundColor:
                props.itemInfo.QLT == "Bad" && "rgb(284, 186, 193)",
            }}
          >
            Quality : {props.itemInfo.QLT}
          </span>
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

import "./ListingItem.css";

const ListingItem = (props) => {
  return (
    <div className="listingItem">
      <div className="left-lt">
        <img className="icon" src={require(`${props.itemInfo.img}`)}></img>
      </div>
      <p className="name-lt">{props.itemInfo.Name}</p>
      <div className="right-lt">
        <div className="item-info-lt">
          <span className="item-info-p"> QLT : {props.itemInfo.QLT}</span>
          <span className="item-info-p"> QTY : {props.itemInfo.QTY}</span>
          <span className="item-info-p"> Weight : {props.itemInfo.Weight}</span>
          <span className="item-info-p"> Cal : {props.itemInfo.Cal}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;

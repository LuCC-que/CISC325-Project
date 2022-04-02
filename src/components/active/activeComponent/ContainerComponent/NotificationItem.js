import "./NotificationExpand.css";

const NotificationItem = (props) => {
  return (
    <div className={props.itemInfo.type}>
      <div className="icon-noti">
        <img
          src={require(`${props.itemInfo.img}`)}
          height="90%"
          width="90%"
          alt="hell"
        />
      </div>
      <div className="msg-noti">
        <h1>{props.itemInfo.msg}</h1>
      </div>
    </div>
  );
};

export default NotificationItem;

import "./TempertureExpand.css";
import "./FoodRec.css";

const FoodrecExpand = (props) => {
  return (
    <div
      className="frame"
      style={{
        backgroundColor: props.isDark && "#B9B9B9",
        boxShadow: props.isDark && "none",
      }}
    >
      <div className="header">
        <h1>Recipes</h1>
      </div>
      <div className="otherRecipe">
        <h1>Other Recipes</h1>
      </div>
      <div className="step1Image"></div>
      <div className="step2Image"></div>
      <div className="step3Image"></div>
      <div className="recipe1"></div>
      <div className="otherRecipe1"></div>
      <div className="otherRecipe2"></div>
      <div className="salmon"></div>

      <div className="step1">
        <strong>
          Bake 250g salmon in oven for
          <br />
          10 to 20 minutes at 400 F
        </strong>
      </div>
      <div className="step2">
        <strong>Add salt, pepper and some fruits</strong>
      </div>
      <div className="step3">
        <strong>Mix them, and drink 300ml water</strong>
      </div>
    </div>
  );
};

export default FoodrecExpand;

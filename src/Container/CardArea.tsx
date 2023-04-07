import { ProductObject } from "../data/dummyData";

type Props = {
  productArray: ProductObject[];
  handleRender: (productArray: Array<ProductObject>) => JSX.Element;
};

const CardArea: React.FC<Props> = (props) => {
  return (
    <div className="card-area">
      {props.handleRender(props.productArray)}
    </div>
  );
};

export default CardArea;

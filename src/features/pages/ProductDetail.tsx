import { useParams } from "react-router-dom";
import { Card } from "antd";
import { useGetProductByIdQuery } from "../../api/product";
// import { Header } from 'antd/es/layout/layout';

const ProductDetail = () => {
  const { idProduct } = useParams<{ idProduct: string }>();
  console.log(idProduct);

  const { data: productData } = useGetProductByIdQuery(idProduct || "");

  if (!productData) {
    return <div>Sản phẩm không tồn tại.</div>;
  }

  return (
    <div>
      <Card>
        <div className="flex">
          <img className="w-[100px]" src={productData.img} alt="" />
          <div className="ml-2">
            <h2>{productData.name}</h2>
            <p>Giá: {productData.price}đ</p>
            <p>Thông tin sản phẩm: Hương nước hoa hoàn hảo với hương thơm thuần khiết <br />
                 nhưng cũng rất sâu sắc, thể hiện sự nam tính, mạnh mẽ và tự tin.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetail;

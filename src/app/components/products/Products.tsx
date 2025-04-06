import Image from "next/image";
import Button from "../button/Button";
import InvertedCorner from "../invertedCorner/InvertedCorner";
import styles from "./Products.module.css";

const productData = [
  { sku: "SKU001", image: { src: "./product-1.jpg", width: 676, height: 1012, objectPosition: "top" }, title: "Training Equipment Starter pack", price: "49" },
  { sku: "SKU002", image: { src: "./product-2.jpg", width: 676, height: 1013, objectPosition: "bottom" }, title: "Set of candles", price: "19" },
  { sku: "SKU003", image: { src: "./product-3.jpg", width: 676, height: 448 }, title: "Yoga mat - 3mm", price: "39" }
];

const Products = () => {
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Handcrafted with Soulful Energy!</h2>
      <div className={styles.filters}>
        <Button>Mats</Button>
        <Button>Blocks</Button>
        <Button>Weights</Button>
        <Button>Candles</Button>
        <Button>Incense</Button>
      </div>
      <div className={styles.grid}>
        {productData.map((product) => (
          <ProductItem
            key={product.sku}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

function ProductItem({ image, title, price }: ProductItemProps) {
  return (
    <div className={styles.productItem}>
      <div className={styles.imageWrapper}>
        <Image src={image.src} alt={title} className={styles.img} style={{ objectPosition: image.objectPosition }} width={image.width} height={image.height} />
        <InvertedCorner circleAt="top left" size="1rem" bottom="100%" right="0">
          <InvertedCorner circleAt="top left" size="1rem" bottom="0" right="100%">
            <span className={styles.spacer}>
              <Button buttonType="square" filled><ShoppingIcon /></Button>
            </span>
          </InvertedCorner>
        </InvertedCorner>
      </div>
      <h3 className={styles.h3}>{title}</h3>
      <p>{price}$</p>
    </div>
  );

}

const ShoppingIcon = ({ width = "1.5em", height = "1.5em" }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 1024 1024"><path fill="currentColor" d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32m-208 0H400v-16c0-61.9 50.1-112 112-112s112 50.1 112 112z" /></svg>
}

export default Products;

type ProductItemProps = {
  image: {
    src: string,
    objectPosition?: string,
    width: number,
    height: number
  }
  title: string,
  price: string
}
import styles from '../../styles/product.module.scss';
import db from '../../utils/db';
import Product from '../../models/Product';

export default function ProductSlug({ product }) {
  console.log(product);
  return <div>1</div>;
}

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  // console.log(slug, style, size);

  db.connectDb();
  //------------
  let product = await Product.findOne({ slug }).lean();
  // console.log(product);
  let subProduct = product.subProducts[style];
  let prices = subProduct.sizes
    .map((s) => {
      return s.price;
    })
    .sort((a, b) => {
      return a - b;
    });
  // console.log(prices);

  let newProduct = {
    ...product,
    images: subProduct.images,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    sku: subProduct.sku,
    colors: product.subProducts.map((p) => {
      return p.color;
    }),
    priceRange:
      prices.length > 1
        ? `From ${prices[0]}$ to ${prices[prices.length - 1]}$`
        : '',
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
  };
  console.log('newProduct', newProduct);
  //------------
  db.disconnectDb();

  return {
    props: {
      product: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}

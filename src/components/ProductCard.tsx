type ProductCardProps = {
  title: string;
  price: number;
  imgSrc: string;
  id?: number;
};

export default function ProductCard({
  title,
  price,
  imgSrc,
}: ProductCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <img src={imgSrc} alt={title} />
      <span>${price}</span>
      <button>Add to Cart</button>
    </section>
  );
}

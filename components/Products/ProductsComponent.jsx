const ProductsComponent = () => {
  const { data, error, isLoading } = useFetchProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {data?.data?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
          <p>{product.price} gold</p>
        </div>
      ))}
    </div>
  );
};

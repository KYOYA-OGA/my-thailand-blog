export default function Categories({ categories }) {
  return (
    <span className="bg-gray-300 text-gray-800 text-base font-medium mr-2 px-4 py-2 rounded-md">
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index}>{category.node.name}</span>
        ))
      ) : (
        <span>{categories.edges.node.name}</span>
      )}
    </span>
  );
}

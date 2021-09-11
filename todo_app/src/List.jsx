import "./List.css";

function List({ items }) {
  return (
    <ul className="List">
      {items.map((item, index) => (
        <li key={index}>
          <span>{item.title}</span>
          <button disabled={item.completed}>
            {item.completed ? "Completed" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;

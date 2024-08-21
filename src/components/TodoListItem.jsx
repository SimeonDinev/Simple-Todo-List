export function TodoListItem({ text, isCompleted, onClick, id }) {
  return (
    <li
      style={{
        textDecoration: isCompleted ? "line-through" : "none",
        listStyleType: "none",
      }}
      onClick={() => onClick(id)}
    >
      {text}
    </li>
  );
}

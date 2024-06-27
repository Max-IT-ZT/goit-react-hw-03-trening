export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p>Search fo Name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

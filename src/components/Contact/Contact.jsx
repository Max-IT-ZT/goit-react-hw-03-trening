import css from "./Contact.module.css";

export default function Contact({ name, number, onDelete, id }) {
  return (
    <li className={css.item}>
      <div className={css.textContent}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

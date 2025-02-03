import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (topic.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSubmit(topic);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <button className={s.btn} type="submit">
            <IoIosSearch />
          </button>
          <input
            className={s.input}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;

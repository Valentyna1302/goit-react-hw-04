import toast from "react-hot-toast";

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

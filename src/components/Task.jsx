import PropTypes from "prop-types";

function Task({
  name,
  completionDate = null,
  category = null,
  tags = [],
  priorityLevel = null,
  isCompleted = false,
}) {
  const tagsListDisplay =
    tags.length > 0 ? "Tags: " + tags.join(", ") : "Click to apply tags";

  const completionDateDisplay = completionDate
    ? "Expected: " + completionDate.toDateString()
    : "Click to add a completion date";

  const categoryDisplay = category ? "Category: " + category : "Click to add a category";

  const priorityLevelDisplay = priorityLevel
    ? "Priority: " + priorityLevel
    : "Click to add a priority level";

  const taskClass = isCompleted ? "text-muted" : "";

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Tag clicked");
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="pb-3">
            <h5 className={`card-title ${taskClass}`}>{name}</h5>
          </div>

          <a
            href="#"
            className={`card-link ${taskClass}`}
            onClick={handleClick}
          >
            {completionDateDisplay}
          </a>

          <a
            href="#"
            className={`card-link ${taskClass}`}
            onClick={handleClick}
          >
            {priorityLevelDisplay}
          </a>

          <a
            href="#"
            className={`card-link ${taskClass}`}
            onClick={handleClick}
          >
            {categoryDisplay}
          </a>

          <a
            href="#"
            className={`card-link ${taskClass}`}
            onClick={handleClick}
          >
            {tagsListDisplay}
          </a>

          <button
            className="btn btn-primary position-absolute top-50 end-0 translate-middle-y me-3"
            onClick={handleClick}
          >
            Edit
          </button>

        </div>
      </div>
    </>
  );
}

export default Task;

Task.propTypes = {
  name: PropTypes.string.isRequired,
  completionDate: PropTypes.instanceOf(Date),
  category: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  priorityLevel: PropTypes.number,
  isCompleted: PropTypes.bool,
};

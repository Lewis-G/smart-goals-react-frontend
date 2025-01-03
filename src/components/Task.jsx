import PropTypes from "prop-types";

function Task({
  name,
  description = null,
  completionDate = null,
  tags = [],
  priorityLevel = null,
  isCompleted = false,
}) {
  const tagsListDisplay = tags.length > 0 ? "Tags: " + tags.join(", ") : "Click to apply tags";

  const completionDateDisplay = completionDate ? completionDate.toDateString() : "Click to add a completion date";

  const priorityLevelDisplay = priorityLevel ? "Priority: " + priorityLevel : "Click to add a priority level";

  const taskClass = isCompleted ? "text-muted" : "";

  const handleTagClick = (e) => {
    e.preventDefault();
    console.log("Tag clicked");
  };
  

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className={`card-title ${taskClass}`}>{name}</h5>

          {description && <p className={`card-text ${taskClass}`}>{description}</p>}
          
          <a href="#" className={`card-link ${taskClass}`} onClick={handleTagClick}>
            {completionDateDisplay}
          </a>
          
          <a href="#" className={`card-link ${taskClass}`} onClick={handleTagClick}>
            {priorityLevelDisplay}
          </a>
          
          <a href="#" className={`card-link ${taskClass}`} onClick={handleTagClick}>
            {tagsListDisplay}
          </a>
        </div>
      </div>
    </>
  );
}

export default Task;

Task.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  completionDate: PropTypes.instanceOf(Date),
  tags: PropTypes.arrayOf(PropTypes.string),
  priorityLevel: PropTypes.number,
  isCompleted: PropTypes.bool,
};

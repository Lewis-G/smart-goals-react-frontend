import Task from "../components/Task";

function TodayPage() {
  const newDate = new Date("2025-01-01");

  return (
    <>
      <h1 className="text-primary">Today!</h1>
      <Task name="Laundry" description="test" completionDate={newDate} tags={["hello", "world"]} priorityLevel={1} isCompleted={true} />
    </>
  );
}

export default TodayPage;

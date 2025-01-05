import Task from "../components/Task";
import NavBar from "../components/NavBar";

function TodayPage() {
  const newDate = new Date("2025-01-01");

  return (
    <>
      <div className="d-flex">
        <NavBar />

        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            height: "100vh",
          }} className="ps-3 py-3"
        >
          <h1 className="text-primary">Today!</h1>
          <Task
            name="Laundry"
            description="test"
            completionDate={newDate}
            tags={["hello", "world"]}
            priorityLevel={1}
            isCompleted={true}
          />
        </div>
      </div>
    </>
  );
}

export default TodayPage;

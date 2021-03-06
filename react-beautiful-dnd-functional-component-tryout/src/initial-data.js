let initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "column-1",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "column-2",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "column-3",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "column-4",
      taskIds: [],
    },
    "column-5": {
      id: "column-5",
      title: "column-5",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"],
};

let array_length = Array(99).fill(null);

array_length.forEach((_, idx) => {
  initialData.tasks[`task-${idx}`] = {
    id: `task-${idx}`,
    content: `task-${idx}-content`,
  };
});

array_length.forEach((_, idx) => {
  initialData.tasks[`task-2-${idx}`] = {
    id: `task-2-${idx}`,
    content: `task-2-${idx}-content`,
  };
});

array_length.forEach((_, idx) => {
  initialData.tasks[`task-3-${idx}`] = {
    id: `task-3-${idx}`,
    content: `task-3-${idx}-content`,
  };
});

initialData.columns["column-1"].taskIds = array_length.map(
  (_, idx) => `task-${idx}`
);

initialData.columns["column-2"].taskIds = array_length.map(
  (_, idx) => `task-2-${idx}`
);

initialData.columns["column-3"].taskIds = array_length.map(
  (_, idx) => `task-3-${idx}`
);

export default initialData;

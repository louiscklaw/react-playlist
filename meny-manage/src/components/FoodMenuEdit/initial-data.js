const initialData = {
  tasks: {
    "food-01": {
      id: "food-01",
      content: "food-01",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-02": {
      id: "food-02",
      content: "food-02",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-03": {
      id: "food-03",
      content: "food-03",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-04": {
      id: "food-04",
      content: "food-04",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-11": {
      id: "food-11",
      content: "food-11",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-12": {
      id: "food-12",
      content: "food-12",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-13": {
      id: "food-13",
      content: "food-13",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-14": {
      id: "food-14",
      content: "food-14",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-21": {
      id: "food-21",
      content: "food-21",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-22": {
      id: "food-22",
      content: "food-22",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-23": {
      id: "food-23",
      content: "food-23",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-24": {
      id: "food-24",
      content: "food-24",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-31": {
      id: "food-31",
      content: "food-31",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-32": {
      id: "food-32",
      content: "food-32",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-33": {
      id: "food-33",
      content: "food-33",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-34": {
      id: "food-34",
      content: "food-34",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  columns: {
    "cat-0": {
      id: "cat-0",
      title: "LUNCH",
      taskIds: ["food-01"],
    },
    "cat-1": {
      id: "cat-1",
      title: "DINNER",
      taskIds: ["food-11", "food-12"],
    },

    "cat-2": {
      id: "cat-2",
      title: "DRINKS",
      taskIds: ["food-21", "food-22", "food-23"],
    },
    "cat-3": {
      id: "cat-3",
      title: "DESERT",
      taskIds: ["food-31", "food-32", "food-33", "food-34"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: [
    "cat-0",
    "cat-1",
    "cat-2",
    "cat-3",
    // , "cat-1", "cat-2", "cat-3"
  ],
  // columnOrder: [ 'cat-1', 'cat-2']
};

export default initialData;

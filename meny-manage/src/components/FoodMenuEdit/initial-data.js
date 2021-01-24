const initialData = {
  tasks: {
    "food-01": {
      id: "food-01",
      content: "そば粉のガレットと魚",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-02": {
      id: "food-02",
      content: "そば粉のガレットと魚",
      description:
        "カヱル念選もべゆ金覧レ子関メヘ著済フウヒ芸真践降セマ者訴ユスノ材大がす認迷景ほ調著しだざ館態こぎほ塔挑音...",
      price: "¥3,000",
      img_src:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    "food-03": { id: "food-03", content: "ラダ仕立て紫芋の" },
    "food-04": { id: "food-04", content: "安納芋のフラン" },
    "food-11": { id: "food-11", content: "そば粉のガレットと魚" },
    "food-12": { id: "food-12", content: "魚介マリネのサ" },
    "food-13": { id: "food-13", content: "ラダ仕立て紫芋の" },
    "food-14": { id: "food-14", content: "安納芋のフラン" },
    "food-21": { id: "food-21", content: "そば粉のガレットと魚" },
    "food-22": { id: "food-22", content: "魚介マリネのサ" },
    "food-23": { id: "food-23", content: "ラダ仕立て紫芋の" },
    "food-24": { id: "food-24", content: "安納芋のフラン" },
    "food-31": { id: "food-31", content: "そば粉のガレットと魚" },
    "food-32": { id: "food-32", content: "魚介マリネのサ" },
    "food-33": { id: "food-33", content: "ラダ仕立て紫芋の" },
    "food-34": { id: "food-34", content: "安納芋のフラン" },
  },
  columns: {
    "cat-0": {
      id: "cat-0",
      title: "LUNCH",
      taskIds: ["food-01", "food-02"],
    },
    // "cat-1": {
    //   id: "cat-1",
    //   title: "DINNER",
    //   taskIds: ["food-11", "food-14"],
    // },
    // "cat-2": {
    //   id: "cat-2",
    //   title: "DRINKS",
    //   taskIds: ["food-21", "food-24", "food-23"],
    // },
    // "cat-3": {
    //   id: "cat-3",
    //   title: "DESERT",
    //   taskIds: ["food-31", "food-33", "food-34", "food-32"],
    // },
  },
  // Facilitate reordering of the columns
  columnOrder: [
    "cat-0",
    // , "cat-1", "cat-2", "cat-3"
  ],
  // columnOrder: [ 'cat-1', 'cat-2']
};

export default initialData;

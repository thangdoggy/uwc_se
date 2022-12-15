export const vehiclesDecember = [
  {
    id: "AE35436",
    type: "Xe Hooklift",
    capacity: "500",
    status: "Nghỉ",
    collector: "Nguyễn Văn A",
  },
  {
    id: "FH6457",
    type: "Xe ép chở rác Hino FC",
    capacity: "500",
    status: "Đang hoạt động",
    collector: "Nguyễn Văn B",
  },
];

export const vehiclesNovember = [
  {
    id: "JH9873",
    type: "Xe chở rác thùng rời Hooklift",
    capacity: "80",
    status: "Nghỉ",
    collector: "Nguyễn Văn D",
  },
  {
    id: "FH6457",
    type: "Xe ép chở rác Hino FC",
    capacity: "60",
    status: "Đang hoạt động",
    collector: "Nguyễn Văn B",
  },
  {
    id: "AE35436",
    type: "Xe Hooklift",
    capacity: "50",
    status: "Nghỉ",
    collector: "Nguyễn Văn A",
  },
  {
    id: "FG4575",
    type: "Xe chở rác Thaco",
    capacity: "100",
    status: "Xe chở rác Thaco",
    collector: "Nguyễn Văn C",
  },
];

export const AllVehicles = [
  {
    id: "JH9873",
    type: "Xe chở rác thùng rời Hooklift",
    capacity: "800",
  },
  {
    id: "FG4575",
    type: "Xe chở rác Thaco",
    capacity: "1000",
  },
];

export let unUseVehicle = [
  {
    id: "AE35436",
    type: "Xe Hooklift",
    capacity: "500",
    status: "Nghỉ",
    collector: "Nguyễn Văn A",
  },
  {
    id: "FH6457",
    type: "Xe ép chở rác Hino FC",
    capacity: "500",
    status: "Đang hoạt động",
    collector: "Nguyễn Văn B",
  },
];

export const changeVehicle = (del, add) => {
  unUseVehicle = unUseVehicle.filter((item) => item.id !== del);
  for (let index = 0; index < vehiclesDecember.length; index++) {
    if (vehiclesDecember[index].id === add) {
      return unUseVehicle.push(vehiclesDecember[index]);
    }
  }
};

// localStorage.setItem("vehiclesDecember", JSON.stringify(vehiclesDecember));
// localStorage.setItem("vehiclesNovember", JSON.stringify(vehiclesNovember));

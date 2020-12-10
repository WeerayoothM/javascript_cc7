const bills = [
  {
    id: "1",
    transactionDate: "2020-08-01",
    total: 12345,
    location: "Chonburi",
    paymentType: "Cash",
    member: {
      name: "Tle",
      age: "26",
    },
    pointRate: 0.01,
  },
  {
    id: "2",
    transactionDate: "2020-08-01",
    total: 12298,
    location: "Chonburi",
    paymentType: "Cash",
    member: {
      name: "Tle",
      age: "26",
    },
    pointRate: 0.01,
  },
  {
    id: "3",
    transactionDate: "2020-08-01",
    total: 41012,
    location: "Suphanburi",
    paymentType: "Mastercard",
    member: {
      name: "Peter",
      age: 33,
    },
    pointRate: 0.01,
  },
  {
    id: "4",
    transactionDate: "2020-08-02",
    total: 24826,
    location: "Trang",
    paymentType: "MasterCard",
    member: {
      name: "Ball",
      age: 31,
    },
    pointRate: 0.01,
  },
  {
    id: "5",
    transactionDate: "2020-08-21",
    total: 47202,
    location: "Trat",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "6",
    transactionDate: "2020-08-15",
    total: 29815,
    location: "Lopburi",
    paymentType: "VISA",
    member: {
      name: "Tle",
      age: 26,
    },
    pointRate: 0.01,
  },
  {
    id: "7",
    transactionDate: "2020-08-14",
    total: 28375,
    location: "Chonburi",
    paymentType: "VISA",
    member: {
      name: "Jak",
      age: 36,
    },
    pointRate: 0.01,
  },
  {
    id: "8",
    transactionDate: "2020-08-19",
    total: 26923,
    location: "Chiang Mai",
    paymentType: "QR",
    member: null,
  },
  {
    id: "9",
    transactionDate: "2020-08-11",
    total: 12545,
    location: "Lampang",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "10",
    transactionDate: "2020-08-07",
    total: 46169,
    location: "Phuket",
    paymentType: "Mastercard",
    member: {
      name: "Por",
      age: 28,
    },
    pointRate: 0.01,
  },
  {
    id: "11",
    transactionDate: "2020-08-11",
    total: 23655,
    location: "Saraburi",
    paymentType: "AliPay",
    member: {
      name: "Jit",
      age: 32,
    },
    pointRate: 0.01,
  },
  {
    id: "12",
    transactionDate: "2020-08-03",
    total: 42505,
    location: "Phuket",
    paymentType: "QR",
    member: {
      name: "Jit",
      age: 32,
    },
    pointRate: 0.01,
  },
  {
    id: "13",
    transactionDate: "2020-08-03",
    total: 15678,
    location: "Phrae",
    paymentType: "Cash",
    member: {
      name: "Ball",
      age: 31,
    },
    pointRate: 0.01,
  },
  {
    id: "14",
    transactionDate: "2020-08-26",
    total: 53209,
    location: "Loei",
    paymentType: "MasterCard",
    member: {
      name: "Jak",
      age: 36,
    },
    pointRate: 0.01,
  },
  {
    id: "15",
    transactionDate: "2020-08-23",
    total: 11230,
    location: "Chiang Rai",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "16",
    transactionDate: "2020-08-26",
    total: 26748,
    location: "Nakhon Pathom",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "17",
    transactionDate: "2020-08-28",
    total: 15885,
    location: "Bangkok",
    paymentType: "MasterCard",
    member: {
      name: "Tawan",
      age: 29,
    },
    pointRate: 0.01,
  },
  {
    id: "18",
    transactionDate: "2020-08-02",
    total: 38590,
    location: "Samut Prakan",
    paymentType: "AliPay",
    member: {
      name: "Pup",
      age: 38,
    },
    pointRate: 0.01,
  },
  {
    id: "19",
    transactionDate: "2020-08-17",
    total: 35786,
    location: "Bangkok",
    paymentType: "VISA",
    member: {
      name: "Ohm",
      age: 21,
    },
    pointRate: 0.01,
  },
  {
    id: "20",
    transactionDate: "2020-08-04",
    total: 23085,
    location: "Bangkok",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "21",
    transactionDate: "2020-08-03",
    total: 49957,
    location: "Nakhon Pathom",
    paymentType: "MasterCard",
    member: null,
  },
  {
    id: "22",
    transactionDate: "2020-08-18",
    total: 38872,
    location: "Chonburi",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "23",
    transactionDate: "2020-08-29",
    total: 127142,
    location: "Chonburi",
    paymentType: "Cash",
    member: {
      name: "Prince",
      age: 27,
    },
    pointRate: 0.01,
  },
  {
    id: "24",
    transactionDate: "2020-08-05",
    total: 40543,
    location: "Rayong",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "25",
    transactionDate: "2020-08-21",
    total: 11315,
    location: "Yala",
    paymentType: "VISA",
    member: {
      name: "Bank",
      age: 40,
    },
    pointRate: 0.01,
  },
  {
    id: "26",
    transactionDate: "2020-08-08",
    total: 42612,
    location: "Ranong",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "27",
    transactionDate: "2020-08-11",
    total: 21988,
    location: "Chiang Mai",
    paymentType: "AliPay",
    member: null,
  },
  {
    id: "28",
    transactionDate: "2020-08-13",
    total: 48147,
    location: "Phayao",
    paymentType: "AliPay",
    member: null,
  },
  {
    id: "29",
    transactionDate: "2020-08-23",
    total: 23548,
    location: "Loei",
    paymentType: "MasterCard",
    member: null,
  },
  {
    id: "30",
    transactionDate: "2020-08-27",
    total: 23218,
    location: "Khonkaen",
    paymentType: "VISA",
    member: null,
  },
  {
    id: "31",
    transactionDate: "2020-08-24",
    total: 37463,
    location: "Nan",
    paymentType: "AliPay",
    member: {
      name: "Tle",
      age: 26,
    },
    pointRate: 0.01,
  },
  {
    id: "32",
    transactionDate: "2020-08-06",
    total: 27477,
    location: "Bangkok",
    paymentType: "MasterCard",
    member: {
      name: "P",
      age: 49,
    },
    pointRate: 0.01,
  },
  {
    id: "33",
    transactionDate: "2020-08-22",
    total: 109872,
    location: "Bangkok",
    paymentType: "VISA",
    member: {
      name: "Tle",
      age: 26,
    },
    pointRate: 0.02,
  },
  {
    id: "34",
    transactionDate: "2020-08-06",
    total: 37786,
    location: "Bangkok",
    paymentType: "Cash",
    member: null,
  },
  {
    id: "35",
    transactionDate: "2020-08-10",
    total: 120286,
    location: "Bangkok",
    paymentType: "VISA",
    member: {
      name: "Ball",
      age: 31,
    },
    pointRate: 0.02,
  },
  {
    id: "36",
    transactionDate: "2020-08-25",
    total: 74321,
    location: "Nakhon Sawan",
    paymentType: "QR",
    member: {
      name: "Tle",
      age: 26,
    },
    pointRate: 0.01,
  },
];

// ข้อ 1 มีทั้งหมด กี่บิล
// console.log(bills.length);

// ข้อ 2 หายอดรวม total
// let total = bills.reduce((acc, bill) => (bill.total += acc), 0);
// console.log(total);

// ข้อ 3 หาค่าเฉลี่ย total
// let count = bills.filter((bill) => bill.total);
// let avg = total / count.length;
// console.log(avg);

// ข้อ 4 หาจำนวน member ว่ามีทั้งหมดกี่คน
let listMember = bills
  .filter((bill) => bill.member !== null)
  .map((bill) => {
    return bill.member.name;
  });
let allMember = listMember.filter(
  (name, index) => listMember.indexOf(name) === index
);
// console.log(allMember);

// ข้อ 5 หาจำนวน total ในแต่ละ location
// let total_location = bills.map((bill) => {
//   return { location: bill.location, total: bill.total };
// });
let total_location = bills.reduce((acc, item) => {
  if (!(item.location in acc)) acc[item.location] = 0;
  acc[item.location] += item.total;
  return acc;
}, {});
// console.log(total_location);

// ข้อ 6 หาจำนวน total ในแต่ละ patment
let total_payment = bills.reduce((acc, item) => {
  if (!(item.paymentType in acc)) acc[item.paymentType] = 0;
  acc[item.paymentType] += item.total;
  return acc;
}, {});
// console.log(total_payment);

// ข้อ 7 หายอด total ของ member แต่ละคน
// let total_member = {};
// for (let list of bills) {
//   if (list.member === null) continue;
//   if (list.member.name in total_member) {
//     total_member[list.member.name] += list.total;
//   } else {
//     total_member[list.member.name] = 0;
//     total_member[list.member.name] += list.total;
//   }
// }

let total_member = bills.reduce((acc, item) => {
  if (item.member === null) return acc;
  if (!(item.member.name in acc)) acc[item.member.name] = 0;
  acc[item.member.name] += item.total;
  return acc;
}, {});

// console.log(total_member);

// ข้อ 8 หา total รวมในแต่ละวัน
let total_date = {};
for (let list of bills) {
  if (list.transactionDate in total_date) {
    // console.log(list.transactionDate);
    total_date[list.transactionDate] += list.total;
  } else {
    total_date[list.transactionDate] = 0;
    total_date[list.transactionDate] += list.total;
  }
}
// console.log(total_date);

// ข้อ 9  ในแต่ละ location หา total sale, bill, average total จำแนกตาม transaction type
// let locationInfo = {};
// for (let list of bills) {
//   if (!(list.location in locationInfo)) {
//     locationInfo[list.location] = {};
//   }
//   if (!(list.paymentType in locationInfo[list.location])) {
//     locationInfo[list.location][list.paymentType] = {};
//     locationInfo[list.location][list.paymentType].total_sale = 0;
//     locationInfo[list.location][list.paymentType].total_bill = 0;
//   }
//   locationInfo[list.location][list.paymentType].total_sale += list.total;
//   locationInfo[list.location][list.paymentType].total_bill += 1;
//   locationInfo[list.location][list.paymentType].average_total =
//     locationInfo[list.location][list.paymentType].total_sale /
//     locationInfo[list.location][list.paymentType].total_bill;
// }

let locationInfo = bills.reduce((acc, bill) => {
  if (!acc[bill.location]) {
    acc[bill.location] = {};
  }
  if (!acc[bill.location][bill.paymentType]) {
    acc[bill.location][bill.paymentType] = {};
    acc[bill.location][bill.paymentType].total_sale = 0;
    acc[bill.location][bill.paymentType].total_bill = 0;
  }
  acc[bill.location][bill.paymentType].total_sale += bill.total;
  acc[bill.location][bill.paymentType].total_bill += 1;
  acc[bill.location][bill.paymentType].average_total =
    acc[bill.location][bill.paymentType].total_sale /
    acc[bill.location][bill.paymentType].total_bill;

  return acc;
}, {});

console.log(locationInfo);

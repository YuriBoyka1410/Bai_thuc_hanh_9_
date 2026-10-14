// Dữ liệu giao dịch
const transactions = [150, -50, 200, -10, 500, 15000, -200, 300];

// =================================
// NHIỆM VỤ 1: FOR
// Tính tổng tiền nhận vào
// =================================

let totalIncome = 0;

for (let i = 0; i < transactions.length; i++) {
  if (transactions[i] > 0) {
    totalIncome += transactions[i];
  }
}

console.log("Tổng tiền nhận vào:", totalIncome);

// =================================
// NHIỆM VỤ 2: WHILE
// Tìm giao dịch đáng ngờ đầu tiên
// =================================

let hasFraud = false;
let index = 0;

while (index < transactions.length) {
  if (transactions[index] > 10000) {
    hasFraud = true;
    break;
  }

  index++;
}

console.log("Có giao dịch đáng ngờ:", hasFraud);

// =================================
// NHIỆM VỤ 3: DO-WHILE
// Thử kết nối tối đa 3 lần
// =================================

let attempts = 0;
let isSuccess = false;

do {
  attempts++;

  isSuccess = Math.random() > 0.8;

  console.log(`Lần thử ${attempts}: ${isSuccess ? "Thành công" : "Thất bại"}`);
} while (!isSuccess && attempts < 3);

console.log("Tổng số lần thử:", attempts);

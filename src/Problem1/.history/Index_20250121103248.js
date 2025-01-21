var sum_to_n_e = function(n, acc = 0) {
    if (n === 0) return acc; // Điều kiện dừng
    return sum_to_n_e(n - 1, acc + n); // Tích lũy giá trị
};

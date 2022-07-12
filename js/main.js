
/**
 * ?Khối 1:
 * n, count
 * 
 * ?Khối 2:
 * function isPrime(n)
 *      *Nếu n < 2 
 *          return false
 *      *Ngược lại
 *          for (let i = 2; i <= Math.sqrt(n); i++)
 *          Nếu n % i == 0
 *              return false
 * return true     
 * 
 * while(count <= n)
 *      *Nếu isPrime(n)
 *          result += count + " ";
 *      count++
 * 
 * Thông báo kết quả ra màn hình
 * 
 * ?Khối 3:
 * Dãy nguyên tố
 * 
 */
function showPrime() {
    var n = document.getElementById("ipNumber").value;
    var count = 1;
    var result = "";
    while (count <= n) {
        if (isPrime(count)) {
            result += count + " ";
        }
        count++;
    }
    if (result === "") {
        document.getElementById("txtResult").innerHTML =
            "Không có số nguyên tố nào trong khoảng từ 1 đến " + n;
    } else {
        document.getElementById("txtResult").innerHTML =
            "Dãy nguyên tố: " + result;
    }
}

function isPrime(n) {
    if (n < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;
}
document.getElementById("btnShowResult").onclick = showPrime;

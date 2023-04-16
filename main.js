// BAi TAP 1
/** Mô hình 3 khối
 * tính tiền lương nhân viên
    * Đầu vào
        - tạo biến Luong 1 ngày
        - tạo biến số ngày làm
    * Xử Lí
        -  lương 1 ngày * số ngày làm
        - format thành tiền vnd
    * Đầu ra
        - tổng số tiền lương * số ngày làm
*/

    // Dom toi cac the input de lay value
document.getElementById("tinhtien").onclick = function () {

    var luong = document.getElementById("luong").value;
    var ngay = document.getElementById("ngay").value;

    // Xử Lí
    var total = luong * ngay;

    // clear
    document.getElementById("Sotien").innerHTML = "";

    //Format VND
    var currentFormat = new Intl.NumberFormat("vn-VN");

    // Đầu ra
    var result = document.createElement("p");

    result.innerHTML = "Số Tiền Của Bạn Là : " + currentFormat.format (total);

    document.getElementById("Sotien").appendChild(result);
};


//BÀI TẠP 2
/**
 * Đầu vào
    * Tạo biến số thực 1 đến 5
 * Xử lí
    *   tổng số thực 1 đến 5 / 5
 * Đầu ra
    *  Giá trị trung bình người dùng nhập
 */

document.getElementById("btngiatri").onclick = function(){

// Dom toi cac the input de lay value
var sothuc1 = document.getElementById("sothuc1").value * 1;
var sothuc2 = document.getElementById("sothuc2").value * 1;
var sothuc3 = document.getElementById("sothuc3").value * 1;
var sothuc4 = document.getElementById("sothuc4").value * 1;
var sothuc5 = document.getElementById("sothuc5").value * 1;
// Xu Li

var total = (sothuc1 + sothuc2 + sothuc3 + sothuc4 + sothuc5) / 5;

// Show ket qua

var result = "<p>Giá trị trung bình là : " + total + "</p>";

document.getElementById("trungbinh").innerHTML = result;

};

// BÀI TẬP 3
/**
 * Đầu vào
    * tạo biến cho đồng việt nam và Usd
 * Xử lí
    *  USD * viet nam đồng
    * format thành tiền vnd
 * Đầu ra
    * Số tiền đổi từ usd ra việt nam đồng
 */

// Dom toi cac the input de lay value
document.getElementById("btnbamdoi").onclick = function(){
    var vietnam = document.getElementById("vietnam").value;
    var USD = document.getElementById("USD").value;
 // Xu Li
    var total = USD * vietnam;
//Format VND
    var currentFormat = new Intl.NumberFormat("vn-VN");
// Show ket qua
var result = "<p>Số tiền quy đổi được là : " + currentFormat.format (total) + "</p>"
document.getElementById("bamdoi").innerHTML = result;

};

// BÀI TẬP 4
/* Đầu vào
    * tạo biến chiều dài và chiều rộng
 * Xử lí
    *  Tinh diện tích dài * rộng
    * Tính chu vi  dài cộng rộng * 2
 * Đầu ra
    * Diện tích và chu vi hình chữ nhật
 */

// Dom toi cac the input de lay value
document.getElementById("btndientich").onclick = function(){
    var chieudai = document.getElementById("chieudai").value * 1;
    var chieurong = document.getElementById("chieurong").value * 1;
// Xu Li
var dientich =  chieudai * chieurong;
var chuvi = (chieudai + chieurong ) * 2 ;
// Show ket qua
var result = "";
result += "<p>Diện tích là : " + dientich + "</p>";

result += "<p>Chu vi là : " + chuvi + "</p>";

document.getElementById("chuvi").innerHTML = result;

};


// BÀI TẬP 5
/* Đầu vào
    * tạo biến nhập số
 * Xử lí
    * tao biến hàng dv
    * tạo biến hàng chuc
    * cộng hàng đơn vị và hàng chục
 * Đầu ra
    Tổng 2 ký số mà người dùng nhập số
 */

 // Dom toi cac the input de lay value
document.getElementById("btnnhapso").onclick = function (){

    var nhapso = document.getElementById("nhapso").value;
   
// Xử Lí

var so_hang_dv = Math.floor(nhapso % 10) ;
var so_hang_chuc = Math.floor( nhapso / 10);
var total = so_hang_dv + so_hang_chuc

// Show ket qua
var result = "<p>Tổng 2 ký số là : " + total + "</p>"
document.getElementById("kyso").innerHTML = result;

};


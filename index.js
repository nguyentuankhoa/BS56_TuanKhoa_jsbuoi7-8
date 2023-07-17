var arr = [];
var mangSoThuc = [];

//arr

function ketQua () {
    var nhapSo = document.querySelector('#nhapSo').value * 1;
    arr.push(nhapSo);
    document.querySelector('#baiTap').innerHTML = arr;
  
}

// 1. Tổng các số dương trong mảng
function tongSoDuong() {
    var tongCacSoDuong =0;
    for (var i = 0; i <arr.length; i++) {
        if (arr[i] >0) {
            tongCacSoDuong += arr[i]
        }
    }
    document.querySelector('#ketQuaBai1').innerHTML = tongCacSoDuong;
}
// 2. Đếm số dương trong mảng

function demSoDuong () {
    var demSo = 0;
    for (var i = 0; i <arr.length; i++) {
        if (arr[i]>0) {
            demSo ++;
        }
    }
    document.querySelector('#ketQuaBai2').innerHTML = demSo;
}

// 3. Tìm số nhỏ nhất trong mảng

function timSoNhoNhat () {
    var timSoNho = arr[0];
    for (var i = 0; i <arr.length; i++) {
        var timSoNhoNhat = arr[i];
        if (timSoNhoNhat <timSoNho ) {
            timSoNho = timSoNhoNhat
        }
    }
    document.querySelector('#ketQuaBai3').innerHTML = timSoNho;
}


// 4. Tìm số dương nhỏ nhất trong mảng 

function timSoDuongNhoNhat () {
    arrSoDuong = [];
    for (var a =0; a<arr.length; a++) {
        if (arr[a] >=0) {
            arrSoDuong.push(arr[a]);
            console.log(arrSoDuong)
        }
    }
    var soDuongNhoNhat = arrSoDuong[0];
    for(var i =0 ; i <= arrSoDuong.length; i++) {
        var timSoDuongNhoNhat = arrSoDuong[i];
        if (timSoDuongNhoNhat >=0 && timSoDuongNhoNhat < soDuongNhoNhat) {
            soDuongNhoNhat = timSoDuongNhoNhat;
        }
    }
    document.querySelector('#ketQuaBai4').innerHTML =soDuongNhoNhat;
}

// 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
 function timSoChanCuoiCung() {
    var soChanCuoiCung =-1;
    for (var i = arr.length - 1; i >= 0; i--) {
        if(arr[i]% 2===0) {
            soChanCuoiCung = arr[i];
            break;
        }
    }
    document.querySelector('#ketQuaBai5').innerHTML = soChanCuoiCung;

 }

 //  6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)

 function doiViTri() {
    var so1 = document.querySelector('#so1').value *1;
    var so2 = document.querySelector('#so2').value *1;

    var hoanDoi = arr[so1 -1];
    arr[so1 -1] = arr[so2 -1];
    arr[so2 -1] = arr[so2 -1]; 
    arr[so2 -1] =hoanDoi;
    document.querySelector('#ketQuaBai6').innerHTML = arr;
 }

//  7. Sắp xếp mảng theo thứ tự tăng dần.
 function mangTangDan () {
    arr.sort( function mangTangDan(a,b){
        a = +a;
        b = +b;
        return a - b;
    });
    document.querySelector('#ketQuaBai7').innerHTML = arr; 
 }


//  8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố
//  thì trả về - 1.
 function timSoNguyen () {
    for( var i=0; i < arr.length; i++) {
        var soNguyen = arr[i];
        var mangSoNguyen = true;

        if ( soNguyen <= 1) {
            continue;
        }

        for ( var j= 2; j <= Math.sqrt(soNguyen);i++) {
            if (soNguyen %j ===0) {
                mangSoNguyen =false;
                break;
            }
        }
        if (mangSoNguyen) {
            return soNguyen; 
        }
      
    }
    return -1;
   
 }
 document.querySelector('#ketQuaBai8').innerHTML = -1;

//  9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên? 

function themMang() {
    var themMangMoi = document.getElementById("themMangMoi").value * 1;
    mangSoThuc.push(themMangMoi);
    document.querySelector("#hienThiMangVuaTHem").innerHTML = mangSoThuc;
  }
  function demSoNguyen() {
    var demSoNguyenTrongMang = 0;
    for (var i = 0; i <= mangSoThuc.length; i++) {
      if (typeof mangSoThuc[i] == "number") {
        demSoNguyenTrongMang++;
      }
    }
    document.querySelector("#hienThiSoNguyen").innerHTML = demSoNguyenTrongMang;
  }
  
  //   10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function soSanh() {
    var soDuong = 0;
    for (var i = 0; i <= arr.length; i++) {
      if (arr[i] > 0) {
        soDuong++;
        console.log(soDuong);
      }
    }
    var soAm = 0;
    for (var i = 0; i <= arr.length; i++) {
      if (arr[i] < 0) {
        soAm++;
        console.log(soAm);
      }
    }
  
    if (soDuong > soAm) {
      document.getElementById("ketQuaBai0").innerHTML = "số dương > số âm";
    } else if (countPositive < countNegative) {
      document.getElementById("ketQuaBai0").innerHTML = "số dương < số âm";
    } else {
      document.getElementById("ketQuaBai0").innerHTML = "số dương = số âm";
    }
  }
  function isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for (var i = 2; i < sqrtnum + 1; i++) {
      // sqrtnum+1
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }
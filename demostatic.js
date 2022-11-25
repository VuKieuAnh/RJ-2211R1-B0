class Notification{
    static p = "Thong bao"
    // method static
    // trong TH dung static tuỳ tiện.
    // -> không tạo đối tượng mà gọi thuộc tính và phương thức.
    // -> hạn chế dùng -> phá vỡ quy tắc lập trình hướng đối tượng.
    static getMessage(){
        return "Xin chao lop React Js";
    }
    // method non static
    m1(){
        return "Tao la m1 day";
    }
}
alert(Notification.getMessage());
alert(Notification.m1());


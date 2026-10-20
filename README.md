# Ha An Ngo — Asian Regionalism & Global Business

Website cá nhân (HTML/CSS thuần, không cần build) cho bài blog INB20012, Swinburne University of Technology.

## Cấu trúc

```
index.html                  Trang chủ + giới thiệu tác giả
hedging-not-hugging.html    Bài viết đầy đủ
assets/css/style.css        Giao diện
assets/js/main.js           Menu mobile, thanh tiến độ đọc, mục lục tự sáng, hiệu ứng hiện dần
assets/img/                 Logo và hình ảnh
.nojekyll                   Báo GitHub Pages phục vụ file nguyên trạng
```

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub, ví dụ `asian-regionalism-blog` (Public).
2. Tải toàn bộ file trong thư mục này lên repository (nút **Add file → Upload files**), hoặc dùng git:
   ```bash
   git init
   git add .
   git commit -m "Add personal blog site"
   git branch -M main
   git remote add origin https://github.com/<tên-tài-khoản>/asian-regionalism-blog.git
   git push -u origin main
   ```
3. Vào **Settings → Pages**, mục *Build and deployment*: chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, bấm **Save**.
4. Sau 1–2 phút, trang sẽ có địa chỉ `https://<tên-tài-khoản>.github.io/asian-regionalism-blog/`.

Nếu đặt tên repository là `<tên-tài-khoản>.github.io` thì địa chỉ sẽ là `https://<tên-tài-khoản>.github.io/`.

## Chỉnh sửa nhanh

- **Ngày nộp**: tìm `13 / 10 / 2026` trong `hedging-not-hugging.html`.
- **Danh sách tài liệu tham khảo**: mục *Reference list* ở cuối `hedging-not-hugging.html`, thay bằng danh sách đầy đủ nếu cần.
- **Mã số sinh viên**: nằm trong thẻ thông tin ở `index.html`; xoá dòng đó nếu không muốn công khai.
- **Màu chủ đạo**: biến `--accent` và `--navy` ở đầu `assets/css/style.css`.

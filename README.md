# NodeJS-Training

1. Tạo sever nodejs với express sử dụng database mySQL.
- Khởi tạo thư mục Project nodejs và cài đặt các dependency:
 + Express, TypeScrpit
 + typeorm: Khởi tạo relationship giữa các entity thông qua model.	

2. Cấu trúc project:
 + tsconfig.json để config typescript
 + ormconfig.json để config database.
 + package.json để quản lý dependencies.
 + app.ts => config app
 + controller: Lưu trữ file xử lí logic ( query database, handle logic ...)
 + routes: Chứa các router xử lí request người dùng
 + entity: Chứa các model liên kết với database. Xử lý các query...
 + Middleware: bodyParser


3. Database basic (Quản lý nhân viên và dự án):
 + Sẽ có 4 đối tượng : User ( Người dùng trong công ty ), Project (Dự án công ty ) Division( Phòng ban trong công ty ) và Customer (Khách hàng theo dự án)
 + Mỗi division sẽ có nhiều user và mỗi user cũng có thể ở trong nhiều division (quản lý có thể quản lý nhiều division)
 + Mỗi Project sẽ có nhiều user tham gia và ngược lại mỗi User có thể tham gia nhiều Project
 + Mỗi Project sẽ có nhiều customer và ngược lại mỗi Customer có thể là kh của nh Project


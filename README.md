# Rikai Slide Maker

## Tổng quan
Dự án này tự động hóa việc tạo các bài thuyết trình PowerPoint sử dụng LLM.
Quy trình bao gồm ba bước chính:
1.  **Tạo cấu trúc (Structure Generation)**: Tạo cấu trúc JSON của bài thuyết trình dựa trên yêu cầu người dùng (sử dụng Gradio).
2.  **Tạo nội dung (Content Generation)**: Tạo nội dung chi tiết cho từng slide (sử dụng LLM).
3.  **Tạo PPTX (PPTX Generation)**: Tạo file .pptx cuối cùng (sử dụng PptxGenJS).

## Cài đặt môi trường
### Cấu hình ENV:
Cấu hình Google API Key
Để sử dụng ứng dụng, bạn cần có Google API Key (Gemini).
-  Truy cập [Google AI Studio](https://aistudio.google.com/app/apikey) để tạo API Key.
-  Tạo file `.env` trong thư mục gốc của dự án (bạn có thể copy từ `.env.example`). 
- Thêm dòng sau vào file `.env`:
```env
GOOGLE_API_KEY=your_api_key_here
```
(Thay thế `your_api_key_here` bằng API Key bạn vừa tạo)

** Lưu ý **:
- Sau khi tạo GOOGLE_API_KEY để có thể sử dụng được thì bạn cần thiết lập thanh toán cho api key mới có thể dùng được tool
- Ở cột Quota tier của record API KEY vừa tạo click vào Set up billing, sau đó làm theo hướng dẫn add thẻ tín dụng của bạn vào
- Do tool sử dụng model Gemini 3.0 của google nên bạn cần thanh toán chi phí khi sử dụng model.
- Chi phí mỗi lần sử dụng sẽ được hiển thị đầy đủ
### Cài đặt tự động dành cho người None Technical:

**Trên Windows:**
1.  Chạy script cài đặt (chỉ cần chạy lần đầu):
    Tại thư mục của project click chuột phải chọn "Open In Terminal"
2.  Cài đặt thư viện cho Tool:
    Trong cửa sổ terminal hiện lên gõ:
```cmd
.\setup.ps1
```
nhấn Enter để thực thi, sau đó chờ script tự động cài đặt.


3.  Sau khi cài đặt hoàn tất gõ lệnh sau để chạy tool
```cmd
uv run app.py 
```
Khi tool chạy, giữ nguyên terminal, mở trình duyệt và truy cập `http://localhost:7860`
để sử dụng

**Trên Linux:**
1.  Chạy script cài đặt (chỉ cần chạy lần đầu):
```bash
chmod +x setup.sh
./setup.sh
```
2.  Chạy ứng dụng:
```bash
uv run app.py 
```

### Dành cho lập trình viên:
Đảm bảo hệ thống của bạn đã cài đặt:
- **Python 3.12**
- **Node.js 20**

### 2. Cài đặt dependencies

**Cài đặt các thư viện Python (sử dụng uv):**
Nếu chưa có `uv`, bạn có thể cài đặt theo hướng dẫn tại [https://github.com/astral-sh/uv](https://github.com/astral-sh/uv).

Sau đó chạy lệnh để đồng bộ dependencies:
```bash
uv sync
```

**Cài đặt các thư viện Node.js (sử dụng npm):**
```bash
npm install
```

### 3. Cấu hình Google API Key
Để sử dụng ứng dụng, bạn cần có Google API Key (Gemini).

1.  Truy cập [Google AI Studio](https://aistudio.google.com/app/apikey) để tạo API Key.
2.  Tạo file `.env` trong thư mục gốc của dự án (bạn có thể copy từ `.env.example`).
3.  Thêm dòng sau vào file `.env`:
    ```env
    GOOGLE_API_KEY=your_api_key_here
    ```
    (Thay thế `your_api_key_here` bằng API Key bạn vừa tạo)


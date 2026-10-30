// Service worker tối thiểu: chỉ để trình duyệt cho phép "Cài đặt". KHÔNG lưu cache -> dữ liệu luôn lấy mới từ máy chủ.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* để trình duyệt tự xử lý (không can thiệp) */ });

# 🎮 Tank Rescue - Game Giải Cứu Xe Tăng

Game hành động 2D được phát triển bằng Vue 3 + TypeScript + Canvas API. Điều khiển xe tăng, tiêu diệt kẻ địch và giải cứu công chúa!

![Tank Rescue Game](https://img.shields.io/badge/Game-Tank%20Rescue-red)
![Vue 3](https://img.shields.io/badge/Vue-3.5-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)

## ✨ Tính năng

- 🎯 **3 Màn chơi** với độ khó tăng dần
- 🤖 **3 Loại địch thủ** với AI thông minh:
  - 🔴 **Trinh sát**: Di chuyển nhanh, tấn công liên tục
  - 🟠 **Hạng nặng**: Chậm nhưng máu dày (3+ HP)
  - 🟣 **Bắn tỉa**: Tốc độ trung bình, bắn chính xác
- ⚡ **Power-ups**:
  - 💚 Hồi máu
  - 💛 Bắn nhanh (Rapid Fire)
  - 💙 Khiên bảo vệ (Shield)
- 🎨 Đồ họa pixel art với hiệu ứng particles
- 📱 Hỗ trợ cả desktop và mobile
- 🏆 Lưu điểm cao (High Score)

## 🎮 Cách chơi

### Điều khiển Desktop
- **Di chuyển**: `W` `A` `S` `D` hoặc `↑` `←` `↓` `→`
- **Bắn**: `SPACE`
- **Tạm dừng**: `ESC` hoặc `P`

### Điều khiển Mobile
- Sử dụng D-Pad ảo để di chuyển
- Nút SHOOT để bắn

## 🚀 Cài đặt và chạy

### Yêu cầu
- Node.js >= 20.19.0 hoặc >= 22.12.0
- npm

### Cài đặt

```bash
# Clone repository
git clone https://github.com/Erik9910x/tank-rescue.git
cd tank-rescue

# Cài đặt dependencies
npm install

# Chạy dev server
npm run dev
```

Mở trình duyệt và truy cập: `http://localhost:5173`

### Build production

```bash
npm run build
```

## 🛠️ Công nghệ sử dụng

- **Vue 3** - Progressive JavaScript Framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next Generation Frontend Tooling
- **Canvas API** - Rendering 2D graphics
- **Vue Router** - Official Router

## 📁 Cấu trúc project

```
tank-rescue/
├── src/
│   ├── views/
│   │   └── tank-rescue/
│   │       ├── index.vue          # Main game component
│   │       ├── useGameEngine.ts   # Game logic & engine
│   │       ├── types.ts           # TypeScript types
│   │       ├── levels.ts          # Level configurations
│   │       ├── mapGenerator.ts    # Map generation logic
│   │       └── meta.ts            # Page metadata
│   ├── App.vue                    # Root component
│   └── main.ts                    # Entry point
├── public/                        # Static assets
├── index.html                     # HTML template
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies
```

## 🎯 Gameplay

1. **Mục tiêu**: Tiêu diệt tất cả kẻ địch và đến vị trí công chúa để hoàn thành màn
2. **Chiến thuật**: 
   - Thu thập power-ups để tăng sức mạnh
   - Sử dụng tường làm chướng ngại vật
   - Né tránh đạn địch
   - Tấn công từ xa với các loại địch nguy hiểm
3. **Điểm số**:
   - Tiêu diệt địch: +100 điểm
   - Hoàn thành màn: +500 điểm
   - Hoàn thành game: +1000 điểm

## 🎨 Screenshots

### Menu Screen
Giao diện menu với hướng dẫn chi tiết về cách chơi, loại địch và power-ups.

### Gameplay
Điều khiển xe tăng xanh, tiêu diệt xe tăng địch (đỏ, cam, tím) và giải cứu công chúa (hồng).

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

## 📝 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 👨‍💻 Tác giả

**Erik**
- Facebook: [Erik](https://www.facebook.com/erik9910/)
- Project: Lab36 Room

## 🙏 Cảm ơn

Cảm ơn bạn đã quan tâm đến Tank Rescue! Chúc bạn chơi game vui vẻ! 🎮

---

Made with ❤️ by Erik | Lab36 Room

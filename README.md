# AI 影片生成研討會｜名單收集網站（GitHub Pages 版）

此專案為 **P1 推廣頁 → P2 表單頁 → P3 影片頁** 的三頁式行銷漏斗，並含 **資料後台（前端示範）**。

> 🔐 無伺服器版本：資料暫存在瀏覽器 `localStorage`，僅供示範。若需真正跨裝置集中管理，請在 `assets/script.js` 的 `CONFIG.sheetWebhook` 連接 Google Apps Script 或後端 API。

## 結構
- `index.html`：P1 首頁（介紹 + CTA）  
- `form.html`：P2 表單（姓名 + 信箱 → 儲存後導向 P3）  
- `thankyou.html`：P3 影片（右上角有「資料後台連結」）  
- `admin.html`：資料後台（帳號：`ueue31@gmail.com`／密碼：`12345678`，可於 `assets/script.js` 調整）  
- `assets/styles.css`：樣式  
- `assets/script.js`：共用邏輯（localStorage、匯出CSV、可選 Webhook）  
- `assets/images/banner.jpg`、`assets/images/teacher.jpg`：你提供的課程／講師素材

## 本地開發
直接用瀏覽器打開 `index.html`。

## 部署到 GitHub Pages
1. 新建 GitHub repo（例如 `ai-video-signup-site`）。  
2. 上傳所有檔案至 repo 根目錄。  
3. Settings → Pages → Source 選擇 `Deploy from a branch`，Branch 選 `main` 和 `/root`。  
4. 約一分鐘後即可於 `https://你的帳號.github.io/ai-video-signup-site/` 瀏覽。

## 連接 Google 試算表（選用）
1. 建立 Google Apps Script（Web App），接收 JSON 並寫入試算表。  
2. 把 Web App URL 填入 `assets/script.js` 的 `CONFIG.sheetWebhook`。  
3. 之後每次提交都會同時送到試算表。

## 版權
- 圖片素材由你提供並保留權利。
- 本範例可自由調整字體、顏色與內容以符合品牌。

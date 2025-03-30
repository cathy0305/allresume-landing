import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App" // ✅ 이제 App 전체를 불러옴

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

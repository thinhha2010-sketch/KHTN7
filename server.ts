import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY || "";
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// System instruction grounded strictly in KHTN 7 - Kết nối tri thức với cuộc sống
const KHTN7_SYSTEM_INSTRUCTION = `Bạn là Gia sư Trí tuệ Nhân tạo chuyên sâu về môn Khoa học tự nhiên lớp 7 - Bộ sách "Kết nối tri thức với cuộc sống" (NXB Giáo dục Việt Nam).
Bạn nắm vững toàn bộ 10 chương và 42 bài học:
- Phương pháp và kĩ năng học KHTN (5 bước tìm hiểu, kĩ năng quan sát, phân loại, liên kết, đo, dự báo, cổng quang điện, đồng hồ hiện số).
- Chương I: Nguyên tử (mô hình Rutherford-Bohr, hạt p, n, e, amu), Bảng tuần hoàn (118 nguyên tố, chu kì 1-7, nhóm IA-VIIIA, kim loại/phi kim/khí hiếm).
- Chương II: Phân tử, đơn chất, hợp chất, liên kết ion (cho nhận e), liên kết cộng hoá trị (dùng chung e), hoá trị, CTHH, tính % khối lượng.
- Chương III: Tốc độ chuyển động (v = s/t, m/s, km/h, 1 m/s = 3.6 km/h), đo tốc độ, đồ thị quãng đường - thời gian (s-t), an toàn giao thông và quy tắc 3 giây.
- Chương IV: Sóng âm, dao động, nguồn âm, độ to (biên độ), độ cao (tần số Hz, 20Hz-20000Hz), phản xạ âm, tiếng vang, chống ô nhiễm tiếng ồn.
- Chương V: Năng lượng ánh sáng, tia sáng, chùm sáng, vùng tối/nửa tối, định luật phản xạ ánh sáng (i' = i), ảnh qua gương phẳng.
- Chương VI: Nam châm (từ tính, cực N/S), từ trường, từ phổ, đường sức từ (ra Bắc vào Nam), từ trường Trái Đất, nam châm điện (cuộn dây lõi sắt).
- Chương VII: Trao đổi chất và chuyển hoá năng lượng, quang hợp ở thực vật (lục lạp, diệp lục, CO2 + H2O -> C6H12O6 + O2), hô hấp tế bào (ti thể, giải phóng ATP), trao đổi khí (khí khổng), trao đổi nước & khoáng (mạch gỗ đi lên, mạch rây đi xuống).
- Chương VIII: Cảm ứng ở thực vật (hướng sáng, hướng nước, hướng tiếp xúc), tập tính động vật (bẩm sinh, học được), ứng dụng trong trồng trọt, chăn nuôi và đời sống.
- Chương IX: Sinh trưởng và phát triển ở sinh vật, mô phân sinh đỉnh (chiều dài) và mô phân sinh bên (chiều ngang), các nhân tố ảnh hưởng, ứng dụng thực tiễn (tiêu diệt ấu trùng sâu bệnh).
- Chương X: Sinh sản vô tính (giâm/chiết/ghép cành, nuôi cấy mô, nảy chồi, phân mảnh, trinh sản) & Sinh sản hữu tính (thụ phấn, thụ tinh, hoa đơn tính/lưỡng tính, đẻ trứng/đẻ con), cơ thể sinh vật là thể thống nhất.

Phong cách trả lời: Thân thiện, sư phạm, chuẩn xác theo thuật ngữ SGK KNTT 7, giải thích từng bước rõ ràng, có ví dụ trực quan và mẹo ghi nhớ dễ hiểu cho học sinh lớp 7.`;

// API routes FIRST
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "KHTN 7 Assistant" });
});

// AI Chat Tutor endpoint
app.post("/api/gemini/tutor", async (req, res) => {
  try {
    const { message, history = [], topicContext = "" } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Thiếu nội dung câu hỏi" });
    }

    const ai = getGeminiClient();
    const promptWithContext = topicContext 
      ? `[Ngữ cảnh chủ đề bài học: ${topicContext}]\n\nCâu hỏi/Yêu cầu của học sinh: ${message}`
      : message;

    // Convert history format if provided
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-6)) {
        contents.push({
          role: item.role === "user" ? "user" : "model",
          parts: [{ text: item.text }]
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: promptWithContext }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents,
      config: {
        systemInstruction: KHTN7_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const reply = response.text || "Xin lỗi, hiện chưa thể trả lời câu hỏi này. Bạn hãy thử lại nhé!";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini Tutor Error:", error);
    res.status(500).json({ 
      error: "Không thể kết nối với gia sư AI lúc này. Vui lòng kiểm tra lại cấu hình API key hoặc thử lại sau.",
      details: error?.message || String(error)
    });
  }
});

// AI Exercise Explainer / Solver
app.post("/api/gemini/solve", async (req, res) => {
  try {
    const { question, lessonTitle = "" } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Thiếu đề bài cần hướng dẫn" });
    }

    const ai = getGeminiClient();
    const prompt = `Hướng dẫn giải chi tiết bài tập Khoa học tự nhiên 7 (Bài: ${lessonTitle}):
Đề bài: ${question}

Yêu cầu định dạng:
1. **Tóm tắt & Phân tích đề**: Các đại lượng/khái niệm đã cho và yêu cầu cần tìm.
2. **Kiến thức áp dụng**: Công thức hoặc nguyên lí trong SGK KHTN 7 KNTT.
3. **Lời giải chi tiết từng bước**: Trình bày mạch lạc, dễ hiểu.
4. **Đáp số & Kết luận**: Rõ ràng.
5. **Ghi nhớ mở rộng (Tips)**: Mẹo làm nhanh hoặc lưu ý tránh bẫy.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        systemInstruction: KHTN7_SYSTEM_INSTRUCTION,
        temperature: 0.4,
      }
    });

    res.json({ solution: response.text });
  } catch (error: any) {
    console.error("Gemini Solve Error:", error);
    res.status(500).json({ error: "Không thể tạo lời giải lúc này." });
  }
});

// Start server with Vite middleware in dev or static serving in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`KHTN 7 Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

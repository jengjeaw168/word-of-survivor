# 🎮 Word of Survivor: Arcade IT English Survival

[![Play Online](https://img.shields.io/badge/Play_Game-GitHub_Pages-2ecc71?style=for-the-badge&logo=github)](https://jengjeaw168.github.io/word-of-survivor/)
[![GitHub Repo](https://img.shields.io/badge/Source_Code-Repository-00e5ff?style=for-the-badge&logo=github)](https://github.com/jengjeaw168/word-of-survivor)

An interactive 2D cartoon arcade survival game designed for practicing real-world Computer Science and Information Technology English vocabulary in context.

---

## 📄 1-Page Game Document (Project Submission)

### 1. Game Title
**Word of Survivor: Arcade IT English Survival**

### 2. Target Learners
- **Primary Audience:** Undergraduate Computer Science, Information Technology, and Software Engineering students.
- **Secondary Audience:** Junior developers and tech enthusiasts preparing for English-speaking workplace communications and technical interviews (CEFR B1–B2).

### 3. Language Learning Objectives
- **Contextual Deduction:** Shift learners from rote memorization to identifying technical terms through real-world sentence scenarios.
- **Collocation Mastery:** Internalize high-frequency natural word partnerships in IT (e.g., *infinite loop*, *two-factor authentication*, *packet latency*, *continuous deployment*).
- **Domain Retention:** Reinforce 30 essential IT concepts spanning hardware components, software engineering, and cybersecurity.

### 4. How to Play (Gameplay Mechanics)
1. **Choose a Server:** Select from 3 distinct IT domain maps: **Hardware Base**, **Coding Matrix**, or **Cyber Cloud** (10 steps each).
2. **Analyze the Scenario:** Read the on-screen technical problem or description with a highlighted missing term (`[ ??? ]`).
3. **Action Choice:** Tap the correct green arcade action button from two competing choices.
4. **Combat Feedback:**
   - **Correct:** The Survivor fires a blaster laser bolt, destroying the monster, awarding points, and revealing an instant knowledge capsule.
   - **Incorrect:** The monster lunges forward, inflicting damage (-1 heart) and setting the player back 1–2 steps.
5. **Survival Progression:** Progress through 3 tiers (Easy: Steps 1–3, Medium: Steps 4–7, Hard: Steps 8–10) with 3 hearts to survive all 10 steps.
6. **In-Game Menu (☰):** Access `Resume`, `Restart`, or `Quit Game` anytime.

### 5. Core Loop Description

```
┌─────────────────────────────────────────────────────────────┐
│                       THE CORE LOOP                         │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
     ┌───────────────────────────────────────────────────┐
     │ 1. Challenge Encounter                            │
     │    Read context-rich IT workplace scenario        │
     └───────────────────────────────────────────────────┘
                               │
                               ▼
     ┌───────────────────────────────────────────────────┐
     │ 2. Term Selection                                 │
     │    Analyze distractors & select target vocabulary │
     └───────────────────────────────────────────────────┘
                               │
                               ▼
     ┌───────────────────────────────────────────────────┐
     │ 3. Immediate Combat Feedback                      │
     │    Laser blast & score UP  OR  Damage & setback   │
     └───────────────────────────────────────────────────┘
                               │
                               ▼
     ┌───────────────────────────────────────────────────┐
     │ 4. Knowledge Reinforcement                        │
     │    Review definition & collocation in Capsule/Book│
     └───────────────────────────────────────────────────┘
                               │
                               ▼
     ┌───────────────────────────────────────────────────┐
     │ 5. Difficulty Progression                         │
     │    Step up tiers (Easy -> Med -> Hard) to Clear   │
     └───────────────────────────────────────────────────┘
```

### 6. List of AI Tools Used
- **Google DeepMind Antigravity AI:** Pair programming agent used for full-stack frontend architecture, CSS 2D cartoon arcade styling, SVG vector character design, and game state management.
- **Generative AI (Large Language Models):** Utilized for pedagogical domain analysis, IT collocation extraction, and sentence scenario calibration.

---

## 👥 Team Members & Contributions (รายชื่อสมาชิกและบทบาทหน้าที่ 9 ตำแหน่ง)

| No. | Student ID (รหัสนักศึกษา) | Full Name (ชื่อ - สกุล) | Project Role (ตำแหน่งภาษาอังกฤษ) | Key Responsibilities (หน้าที่และความรับผิดชอบ) |
| :---: | :---: | :--- | :--- | :--- |
| 1 | `[Student ID]` | `[Full Name]` | **Project Manager & Game Producer** | วางแผนภาพรวมโปรเจกต์ บริหารจัดการเวลาและลำดับงาน (Roadmap) ประสานงานสมาชิกในทีม และควบคุมการส่งมอบงานบน MS Teams |
| 2 | `[Student ID]` | `[Full Name]` | **Lead Game Designer & Systems Architect** | ออกแบบระบบเกมและกติกาการเล่น กฎการเอาชีวิตรอด 10 ขั้นตอน ระบบความยาก 3 ระดับ (ง่าย/กลาง/ยาก) และระบบคำนวณคะแนน |
| 3 | `[Student ID]` | `[Full Name]` | **Lead Frontend & Gameplay Programmer** | พัฒนาระบบการทำงานของเกมด้วย JavaScript ควบคุมลูปของเกม (Game Loop), ระบบสุ่มคำศัพท์ไม่ซ้ำ และระบบปุ่มเมนู Pause |
| 4 | `[Student ID]` | `[Full Name]` | **UI/UX & 2D Vector Artist** | ออกแบบส่วนติดต่อผู้ใช้ (UI/UX) ธีมเกมตู้ 2D Action Arcade จัดวาง Layout หน้าจอมือถือ และวาดภาพเวกเตอร์ตัวละคร SVG (ฮีโร่และมอนสเตอร์) |
| 5 | `[Student ID]` | `[Full Name]` | **IT Curriculum & Vocabulary Specialist** | คัดเลือกและจัดหมวดหมู่คำศัพท์ไอที 30 คำ (Hardware, Coding, Cyber Cloud) พร้อมเขียนคำอธิบายเกร็ดความรู้ทางเทคนิค (Pro Tip) |
| 6 | `[Student ID]` | `[Full Name]` | **Contextual Scenario & Dialogue Writer** | แต่งประโยคสถานการณ์จำลองปัญหาไอทีในชีวิตการทำงานจริง และคัดกรองวลีที่พบบ่อย (Collocations) เพื่อฝึกฝนความเข้าใจจากบริบท |
| 7 | `[Student ID]` | `[Full Name]` | **Animation & Visual FX Engineer** | พัฒนาระบบอนิเมชัน CSS Keyframes เอฟเฟกต์ยิงกระสุนเลเซอร์ ลำแสง แสงวาบปลายกระบอกปืน ประกายไฟกระแทก และหน้าจอสั่นเมื่อตอบผิด |
| 8 | `[Student ID]` | `[Full Name]` | **Lead QA Engineer & Playtester** | ทดสอบการเล่นจริง (Playtesting) ตรวจสอบความสมดุลของเกม ค้นหาและรายงานข้อผิดพลาด (Bugs) รวมถึงทดสอบการแสดงผลบนเบราว์เซอร์ต่างๆ |
| 9 | `[Student ID]` | `[Full Name]` | **DevOps Engineer & Technical Writer** | ดูแลระบบเวอร์ชันคอนโทรล (Git) นำตัวเกมขึ้นออนไลน์ผ่าน GitHub Pages และจัดทำเอกสารประกอบโครงงาน (Game Document) 1 หน้า |

---

## 🚀 Playable Links & Deployment

- **Live Playable Game (GitHub Pages):** [https://jengjeaw168.github.io/word-of-survivor/](https://jengjeaw168.github.io/word-of-survivor/)
- **Source Code Repository:** [https://github.com/jengjeaw168/word-of-survivor](https://github.com/jengjeaw168/word-of-survivor)

---

## 📂 Project Structure

```
Word-of-Survivor/
├── index.html     # Main HTML game container, HUD, and dialogs
├── style.css      # 2D Cartoon Arcade stylesheet & responsive layouts
├── script.js      # Game engine, animations, and 30-word IT database
└── README.md      # 1-Page Game Document & Submission Overview
```

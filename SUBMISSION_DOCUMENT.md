# Course Assignment Submission: Educational Language Game

**Platform:** MS Teams Assignment Submission  
**Course Project:** English for Specific Purposes / IT Language Learning Game  

---

## Part 1: Cover Page & Team Contributions (หน้าปกและรายชื่อสมาชิก)

### Project Title:
**Word of Survivor: Arcade IT English Survival**

### Group Members:

| No. | Student ID (รหัสนักศึกษา) | Name - Surname (ชื่อ - สกุล) | Role & Contribution (หน้าที่และบทบาทในโปรเจกต์) |
|:---:|:---:|:---|:---|
| 1 | `[ใส่รหัสนักศึกษา]` | `[ใส่ชื่อ-นามสกุล]` | **Project Lead & Core Game Design:** ออกแบบตรรกะเกม, ระบบความยาก 3 ระดับ และ Core Loop |
| 2 | `[ใส่รหัสนักศึกษา]` | `[ใส่ชื่อ-นามสกุล]` | **Content & Pedagogical Design:** คัดเลือกและเรียบเรียงคำศัพท์ไอที 30 คำ ประโยคบริบทจริง และ Collocations |
| 3 | `[ใส่รหัสนักศึกษา]` | `[ใส่ชื่อ-นามสกุล]` | **UI/UX & Frontend Development:** ออกแบบธีม 2D Action Arcade, วาดตัวละคร SVG และพัฒนา Responsive Web |
| 4 | `[ใส่รหัสนักศึกษา]` | `[ใส่ชื่อ-นามสกุล]` | **QA Testing, Deployment & Documentation:** ทดสอบเกม (Playtesting), ขึ้นระบบ GitHub Pages และจัดทำเอกสารประกอบ |

---

## Part 2: Playable Game Links (ลิงก์สำหรับเข้าเล่นเกม)

- **Live Playable Link (GitHub Pages):**  
  👉 **https://jengjeaw168.github.io/word-of-survivor/**  
  *(สามารถเปิดเล่นได้ทันทีบนคอมพิวเตอร์และสมาร์ตโฟนผ่านเว็บเบราว์เซอร์ ไม่ต้องติดตั้งโปรแกรมเพิ่มเติม)*

- **GitHub Repository Source Code:**  
  👉 **https://github.com/jengjeaw168/word-of-survivor**

---

## Part 3: 1-Page Game Document (เอกสารประกอบภาษาอังกฤษ 1 หน้า)

### 1. Game Title
**Word of Survivor: Arcade IT English Survival**

### 2. Target Learners
- **Target Audience:** Undergraduate students in Computer Science, Information Technology, and Software Engineering.
- **Proficiency Level:** Intermediate English learners (CEFR B1–B2) seeking practical technical English vocabulary for software development, IT operations, and corporate technical communication.

### 3. Language Learning Objectives
1. **Contextual Recognition:** Enable learners to identify and deduce technical IT terms within authentic workplace scenarios rather than relying on rote memorization.
2. **Collocation Mastery:** Foster natural workplace language fluency by teaching high-frequency technical collocations (e.g., *infinite loop*, *two-factor authentication*, *packet latency*, *automated deployment*).
3. **Active Technical Vocabulary Retention:** Reinforce 30 high-priority industry-standard terms across three core computer science disciplines: Hardware Infrastructure, Software Development, and Cybersecurity.

### 4. How to Play (Gameplay Mechanics)
- **Server Selection:** The player chooses from 3 distinct domain challenges: *Hardware Base*, *Coding Matrix*, or *Cyber Cloud* (10 questions each).
- **Survival Rules & Step Progression:**
  - Each run consists of 10 progressive steps.
  - **Steps 1–3 (Easy):** Foundational terms (+500 PTS).
  - **Steps 4–7 (Medium):** Real-world workplace problem scenarios (+1,000 PTS).
  - **Steps 8–10 (Hard/Boss):** Complex technical concepts (+2,000 PTS).
- **Combat Mechanics:** The player reads a scenario sentence with a blank `[ ??? ]` and chooses between two arcade buttons.
  - Selecting the correct word triggers a blaster laser that eliminates the monster, yields score, and reveals a learning capsule.
  - Selecting an incorrect word causes the monster to attack, reducing 1 life (out of 3 hearts) and incurring a 1–2 step setback.
- **In-Game Menu (☰):** Players can pause the game at any moment to `Resume`, `Restart` the stage, or `Quit Game` to the main menu.

### 5. Core Loop Description
The game utilizes a fast-paced **Encounter -> Deduction -> Action -> Feedback -> Mastery** cycle:
1. **Challenge Encounter:** The player is presented with a context-rich IT workplace problem statement with a missing key term.
2. **Cognitive Deduction & Selection:** The player evaluates two competing technical terms based on contextual clues.
3. **Instant Action & Consequence:** Tactile input immediately executes an in-game combat action (laser blast vs. monster attack).
4. **Knowledge Reinforcement:** An immediate Knowledge Capsule displays the term's phonetic spelling, correct usage in context, collocation, and technical pro-tip. Words are automatically recorded in the persistent *Vocab Notebook*.
5. **Tier Advancement:** Shuffled non-repeating decks escalate difficulty from easy to boss levels until the 10-step survival mission is cleared.

### 6. List of AI Tools Used
- **Google DeepMind Antigravity AI:** Employed as an autonomous pair-programming assistant to build the entire web architecture, implement the 2D action cartoon arcade CSS aesthetics, design responsive SVG vector characters (Survivor Hero and Glitch Monsters), and construct the interactive state engine.
- **Generative Language Model (LLM):** Utilized for pedagogical analysis, technical collocation extraction from IT corpora, and authentic scenario sentence formulation.

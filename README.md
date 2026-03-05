# ☕ Code Café: ArrayList Adventures
### AP CSA Interactive Web Game · Java ArrayLists

> A story-based, level-unlock browser game teaching **AP Computer Science A** students how to master **Java ArrayLists** through interactive missions at a virtual coffee shop.

---

## 🎯 Learning Objectives

Students who complete this game will be able to:

| Level | Concept | AP CSA Skill |
|-------|---------|-------------|
| 1 | ArrayList declaration with generics | `ArrayList<String> list = new ArrayList<>();` |
| 2 | `add(E)` and `add(int, E)` | Append vs. index insertion |
| 3 | `get(index)` and `set(index, value)` | Read & update with `IndexOutOfBoundsException` |
| 4 | `size()` and loops | `for` loop + enhanced `for-each` |
| 5 | `remove(int)` vs `remove(Object)` | Overload disambiguation (AP exam trap!) |
| 6 | `indexOf(value)` and `contains(value)` | Searching; `-1` sentinel value |
| 7 | Safe traversal during removal | Backwards iteration fix |
| 8 | Boss Assessment (10 questions) | All concepts; 80% to pass |

---

## 🚀 Quick Start (Run Locally)

```bash
# 1. Clone or download the repository
git clone https://github.com/YOUR_USERNAME/code-cafe-arraylist.git
cd code-cafe-arraylist

# 2. Open directly in a browser (no server needed!)
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

> ✅ **No build step, no npm, no dependencies.** Pure HTML + CSS + JS.

---

## 🌐 Deploy to GitHub Pages

```bash
# 1. Create a new GitHub repository (public)
# 2. Push the project files:
git init
git add .
git commit -m "Initial: Code Café ArrayList Adventures"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/code-cafe-arraylist.git
git push -u origin main

# 3. Enable GitHub Pages:
#    Repository → Settings → Pages
#    Source: Deploy from branch → main → / (root)
#    Save → Your game is live at:
#    https://YOUR_USERNAME.github.io/code-cafe-arraylist/
```

---

## 📁 Project Structure

```
code-cafe/
├── index.html          # All HTML screens & overlays
├── styles.css          # Complete CSS (variables, layout, animations)
├── script.js           # Game engine + all 8 levels (2050+ lines)
├── assets/
│   ├── sfx-click.mp3   # Sound effect placeholders (swap with real audio)
│   ├── sfx-correct.mp3
│   ├── sfx-wrong.mp3
│   ├── sfx-level.mp3
│   ├── sfx-star.mp3
│   └── bgm-cafe.mp3    # Background music (optional)
└── README.md
```

---

## 🎮 Game Features

| Feature | Description |
|---------|-------------|
| 🗺️ Level Map | Visual path of 8 unlockable missions |
| ⭐ Star System | 3 stars (1st try), 2 (2nd try), 1 (after hint) |
| 💡 Hints | Costs 1 star — includes coach explanation |
| 🤖 Coach Byte | Animated SVG mentor character with moods |
| 🎊 Confetti | Particle burst on level completion |
| 💾 localStorage | Saves progress, stars, XP, attempts |
| 🖨️ Certificate | Printable completion certificate |
| 👨‍🏫 Teacher Mode | Type `TEACHER` anywhere to access |
| 🌙 Dark Mode | Toggle in Settings |
| ♿ Reduced Motion | For accessibility |
| 📱 Responsive | Mobile-friendly layout |

---

## 🏫 Teacher Mode

Type **`TEACHER`** on any screen (not in an input field) to open the Teacher Panel.

### Teacher Panel Features:
- **Overview tab**: See player name, XP, completed levels, stars per level, attempt counts
- **Attempt Log tab**: Full timestamped log of every answer attempt
- **Export tab**: Download progress as JSON for gradebook import
- **Reset button**: Clear all progress to let a new student start fresh

### Shared Device Workflow:
1. Student plays → Teacher views progress → Click "Reset" → Next student starts

---

## ➕ How to Add New Levels

Open `script.js` and add a new object to the `LEVELS` array:

```javascript
{
  id: 9,                             // Must be sequential
  title: 'Your Level Title',
  emoji: '🆕',
  station: 'Your Station Name',
  mission: 'Description of the mission...',
  canDo: 'I can ... (learning objective)',
  coachIntro: 'Coach Byte says hello!',
  lesson: `<h3>Concept</h3><p>...</p><div class="code-block">...</div>`,

  // Choose task type:
  taskType: 'multi-select',   // or: click-place, list-interact,
                               //     fill-blank, scenario-choice,
                               //     search-demo, code-fix, boss-quiz

  taskInstructions: 'What should the student do?',
  taskData: { /* type-specific data — see existing levels as examples */ },
  hints: ['Hint 1 text', 'Hint 2 text'],
  xp: 150
}
```

### Supported Task Types:

| Type | Interaction | Example Level |
|------|-------------|---------------|
| `multi-select` | Click to select all correct options | Level 1 |
| `click-place` | Click ticket → place in ArrayList | Level 2 |
| `list-interact` | Click list items for get/set | Level 3 |
| `fill-blank` | Click tokens to fill code blanks | Level 4 |
| `scenario-choice` | Multiple choice with list visualization | Level 5 |
| `search-demo` | Select method, see live result | Level 6 |
| `code-fix` | Select correct bug fixes | Level 7 |
| `boss-quiz` | 10-question AP-style quiz | Level 8 |

---

## 🔊 Adding Sound Effects

Replace the placeholder `<audio>` src paths in `index.html` with real `.mp3` files:

```html
<audio id="sfx-click"   src="assets/sfx-click.mp3">
<audio id="sfx-correct" src="assets/sfx-correct.mp3">
<audio id="sfx-wrong"   src="assets/sfx-wrong.mp3">
<audio id="sfx-level"   src="assets/sfx-level.mp3">
<audio id="bgm-cafe"    src="assets/bgm-cafe.mp3" loop>
```

Free sources: [freesound.org](https://freesound.org), [pixabay.com/music](https://pixabay.com/music/)

---

## 🎨 Customization

### Change Theme Colors (`styles.css`)
```css
:root {
  --c-primary: #6B4226;   /* Coffee brown */
  --c-accent:  #D97706;   /* Amber */
  --c-teal:    #0D9488;   /* Teal accent */
}
```

### Change Game Name / Story (`index.html`)
Update the `<title>`, `.logo-main`, and `.logo-sub` text.

### Modify Level Questions
Edit the `taskData` objects in `script.js` for each level. The rendering engine handles everything else.

---

## 🧪 AP CSA Alignment

All Java code follows the **AP Computer Science A Course Description**:
- `import java.util.ArrayList;` required
- Generic types always specified: `ArrayList<String>`, `ArrayList<Integer>`
- Diamond operator `<>` accepted (Java 7+, used on modern AP exams)
- `remove(int)` vs `remove(Object)` distinction explicitly taught
- `IndexOutOfBoundsException` covered
- Both classic `for` and enhanced `for-each` loops covered
- Concurrent modification bug (safe traversal) covered — Level 7

---

## 📊 LocalStorage Schema

```json
{
  "playerName": "Alex Chen",
  "currentLevel": 3,
  "unlockedLevels": [1, 2, 3],
  "levelStars":     { "1": 3, "2": 2 },
  "levelAttempts":  { "1": 1, "2": 2 },
  "levelCompleted": { "1": true, "2": true },
  "xp": 220,
  "settings": {
    "sound": true, "music": false,
    "reducedMotion": false, "darkMode": false, "largeText": false
  },
  "attemptLog": [
    { "ts": "2024-01-15T10:30:00.000Z", "level": 1, "result": "pass", "attempt": 1 }
  ]
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-level-9`
3. Make your changes and test locally
4. Submit a pull request with a clear description

---

## 📄 License

MIT License — free for educational use. Please credit **Code Café: ArrayList Adventures** if you share or modify.

---

*Made with ☕ for AP CSA students everywhere.*

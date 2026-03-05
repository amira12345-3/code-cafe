/* ================================================================
   CODE CAFÉ: ARRAYLIST ADVENTURES  —  script.js
   AP CSA Interactive Game · Vanilla JS · No dependencies
   ================================================================ */

'use strict';

/* ================================================================
   PART 1 — LEVEL DATA
   ================================================================ */

const LEVELS = [
  /* ── LEVEL 1: What is an ArrayList? ─────────────────────────── */
  {
    id: 1,
    title: 'What is an ArrayList?',
    emoji: '📋',
    station: 'Order Counter',
    mission: 'A new customer wants to start a tab! Help Coach Byte set up an ArrayList to hold their orders.',
    canDo: 'declare a valid ArrayList with the correct generic type and import.',
    coachIntro: "Hey! Welcome to Code Café ☕ Before we take any orders, we need an ArrayList to store them. Let's see what you know!",
    lesson: `
<h3>🔑 What is an ArrayList?</h3>
<p>An <strong>ArrayList</strong> is a resizable array from Java's <code>java.util</code> package.
Unlike regular arrays, it can grow and shrink automatically!</p>
<div class="code-block">
<span class="cmt">// Step 1 — Import (at top of file)</span><br>
<span class="kw">import</span> java.util.ArrayList;<br><br>
<span class="cmt">// Step 2 — Declare and create</span><br>
<span class="typ">ArrayList</span>&lt;<span class="typ">String</span>&gt; orders = <span class="kw">new</span> <span class="typ">ArrayList</span>&lt;&gt;();
</div>
<h3>📌 Key Rules</h3>
<ul>
  <li>Always use a <strong>generic type</strong> in angle brackets: <code>&lt;String&gt;</code>, <code>&lt;Integer&gt;</code>, etc.</li>
  <li>The diamond operator <code>&lt;&gt;</code> on the right side is valid in Java 7+</li>
  <li>Without <code>&lt;String&gt;</code> you get a <em>raw type</em> — a common bug!</li>
  <li>Must import <code>java.util.ArrayList</code> or <code>java.util.*</code></li>
</ul>
<div class="tip-box">💡 <strong>AP Tip:</strong> On the AP CSA exam, always use typed ArrayLists like <code>ArrayList&lt;String&gt;</code>. Raw types won't appear on the exam but will cost you in real code!</div>
`,
    taskType: 'multi-select',
    taskInstructions: 'Select ALL lines below that are <strong>valid</strong> ArrayList declarations. There may be more than one correct answer.',
    taskData: {
      options: [
        { code: 'ArrayList&lt;String&gt; orders = new ArrayList&lt;String&gt;();', raw: 'ArrayList<String> orders = new ArrayList<String>();', correct: true, explanation: '✅ Classic, fully-typed declaration — always valid.' },
        { code: 'ArrayList orders = new ArrayList();', raw: 'ArrayList orders = new ArrayList();', correct: false, explanation: '❌ Missing generic type &lt;String&gt;. This compiles but gives warnings (raw type).' },
        { code: 'ArrayList&lt;String&gt; orders = new ArrayList&lt;&gt;();', raw: 'ArrayList<String> orders = new ArrayList<>();', correct: true, explanation: '✅ Diamond operator on the right — valid in Java 7+. The AP exam accepts this.' },
        { code: 'String[] orders = new ArrayList&lt;&gt;();', raw: 'String[] orders = new ArrayList<>();', correct: false, explanation: '❌ Mismatch! Left side is an array, right side is an ArrayList. Different types.' },
        { code: 'ArrayList&lt;String&gt; orders;', raw: 'ArrayList<String> orders;', correct: false, explanation: '❌ Declared but never initialized — calling any method would cause a NullPointerException!' },
        { code: 'ArrayList&lt;int&gt; nums = new ArrayList&lt;&gt;();', raw: 'ArrayList<int> nums = new ArrayList<>();', correct: false, explanation: '❌ Cannot use primitive types as generics. Use Integer: ArrayList&lt;Integer&gt;' }
      ]
    },
    hints: [
      'You need <strong>both</strong> a correct type on the left AND a correct constructor call on the right.',
      'Look for declarations that have a generic type AND use <code>new ArrayList</code>. There are exactly 2 correct ones.'
    ],
    xp: 100
  },

  /* ── LEVEL 2: Creating & Adding ─────────────────────────────── */
  {
    id: 2,
    title: 'Creating & Adding',
    emoji: '➕',
    station: 'Order Pad',
    mission: "Customers are arriving! Add their drink orders to the ArrayList using add() and add(index, value).",
    canDo: 'use add(E) to append items and add(int, E) to insert at a specific index.',
    coachIntro: "Great job on the declaration! Now let's fill up that ArrayList. Two customers are here — let's get their orders in!",
    lesson: `
<h3>🔑 Two Ways to Add</h3>
<div class="code-label">Method 1 — Add to End</div>
<div class="code-block"><span class="typ">ArrayList</span>&lt;<span class="typ">String</span>&gt; orders = <span class="kw">new</span> <span class="typ">ArrayList</span>&lt;&gt;();<br>orders.<span class="mth">add</span>(<span class="str">"Latte"</span>);     <span class="cmt">// [Latte]</span><br>orders.<span class="mth">add</span>(<span class="str">"Espresso"</span>); <span class="cmt">// [Latte, Espresso]</span><br>orders.<span class="mth">add</span>(<span class="str">"Mocha"</span>);    <span class="cmt">// [Latte, Espresso, Mocha]</span></div>
<div class="code-label">Method 2 — Insert at Index</div>
<div class="code-block">orders.<span class="mth">add</span>(<span class="num">1</span>, <span class="str">"Tea"</span>); <span class="cmt">// inserts Tea at index 1</span><br><span class="cmt">// Result: [Latte, Tea, Espresso, Mocha]</span><br><span class="cmt">// Everything after index 1 shifts right!</span></div>
<h3>📌 Key Points</h3>
<ul>
  <li><code>add(E)</code> appends to the <strong>end</strong> — returns <code>true</code></li>
  <li><code>add(int index, E)</code> inserts at a position — <strong>shifts</strong> existing elements right</li>
  <li>Valid insert indices: <code>0</code> to <code>size()</code> (inclusive!)</li>
</ul>
<div class="warn-box">⚠️ <strong>Common Bug:</strong> Forgetting the generic type: <code>new ArrayList()</code> instead of <code>new ArrayList&lt;&gt;()</code>. Always include it!</div>
`,
    taskType: 'click-place',
    taskInstructions: 'Two tasks: (A) Click a ticket, then click <em>"Add to end +"</em> to append it. (B) Click a ticket, then click a numbered slot to insert at that index. Complete both tasks!',
    taskData: {
      tickets: ['Latte','Espresso','Mocha','Tea','Juice'],
      taskA: { instructions: 'Add these 3 drinks to the end in order:', items: ['Latte','Espresso','Mocha'] },
      taskB: { instructions: 'Now insert "Tea" at index 1:', item: 'Tea', targetIndex: 1 }
    },
    hints: [
      'For Task A: Click a ticket to select it (it turns teal), then click the green "+ Add to End" button.',
      'For Task B: Click "Tea" to select it, then click the slot labeled [1] to insert at index 1.'
    ],
    xp: 120
  },

  /* ── LEVEL 3: Access & Update ───────────────────────────────── */
  {
    id: 3,
    title: 'Access & Update',
    emoji: '✏️',
    station: 'Display Board',
    mission: "A customer wants to check their order and then change it. Use get() and set() to help them!",
    canDo: 'use get(index) to read an element and set(index, value) to update it.',
    coachIntro: "Orders are in! But wait — a customer just changed their mind. Let's look up their order with get() and change it with set().",
    lesson: `
<h3>🔑 Reading: get(index)</h3>
<div class="code-block"><span class="typ">ArrayList</span>&lt;<span class="typ">String</span>&gt; orders = <span class="kw">new</span> <span class="typ">ArrayList</span>&lt;&gt;();<br>orders.<span class="mth">add</span>(<span class="str">"Latte"</span>);<br>orders.<span class="mth">add</span>(<span class="str">"Espresso"</span>);<br>orders.<span class="mth">add</span>(<span class="str">"Mocha"</span>);<br><br><span class="typ">String</span> drink = orders.<span class="mth">get</span>(<span class="num">1</span>); <span class="cmt">// "Espresso"</span><br>System.out.println(orders.<span class="mth">get</span>(<span class="num">0</span>)); <span class="cmt">// Latte</span></div>
<h3>🔑 Updating: set(index, value)</h3>
<div class="code-block">orders.<span class="mth">set</span>(<span class="num">1</span>, <span class="str">"Cappuccino"</span>); <span class="cmt">// replaces index 1</span><br><span class="cmt">// Result: [Latte, Cappuccino, Mocha]</span><br><span class="cmt">// Returns the OLD value: "Espresso"</span></div>
<h3>⚠️ IndexOutOfBoundsException</h3>
<div class="warn-box">Trying to access an index that doesn't exist throws <code>IndexOutOfBoundsException</code>!<br><code>orders.get(5)</code> on a 3-element list → 💥 CRASH<br>Valid indices: <strong>0</strong> to <strong>size()-1</strong></div>
`,
    taskType: 'list-interact',
    taskInstructions: 'Two tasks below. Follow Coach Byte\'s instructions for each one.',
    taskData: {
      startList: ['Latte','Espresso','Mocha','Tea'],
      tasks: [
        { type: 'get', question: '📖 Task A: Click the item at <strong>index 2</strong> to "get" it.', targetIndex: 2, answer: 'Mocha' },
        { type: 'set', question: '✏️ Task B: The customer at <strong>index 1</strong> changed to "Cappuccino". Click index 1, then choose the new value.', targetIndex: 1, newValue: 'Cappuccino', choices: ['Cappuccino','Green Tea','Juice','Oat Latte'] }
      ]
    },
    hints: [
      'For get(): Just click the list item that is at index 2. Remember, indexing starts at 0!',
      'For set(): Click index 1 first (Espresso) to select it, then pick "Cappuccino" from the choices that appear.'
    ],
    xp: 130
  },

  /* ── LEVEL 4: Size & Looping ─────────────────────────────────── */
  {
    id: 4,
    title: 'Size & Looping',
    emoji: '🔁',
    station: 'Kitchen Board',
    mission: "The kitchen needs to print all orders! Fill in the blanks to complete the loops that go through the ArrayList.",
    canDo: 'use size() in a for loop and write an enhanced for-each loop over an ArrayList.',
    coachIntro: "Time to loop! The kitchen needs to see ALL orders. There are two loop styles you need to know — let's fill in the blanks!",
    lesson: `
<h3>🔑 size() Method</h3>
<div class="code-block">orders.<span class="mth">size</span>() <span class="cmt">// returns the number of elements</span><br><span class="cmt">// NOT orders.length — that's for arrays!</span></div>
<h3>🔑 Classic For Loop</h3>
<div class="code-block"><span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; orders.<span class="mth">size</span>(); i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(orders.<span class="mth">get</span>(i));<br>}</div>
<h3>🔑 Enhanced For-Each Loop</h3>
<div class="code-block"><span class="kw">for</span> (<span class="typ">String</span> order : orders) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(order);<br>}</div>
<div class="tip-box">💡 Use <strong>enhanced for-each</strong> when you only need to <em>read</em> values. Use <strong>classic for</strong> when you need the index.</div>
<div class="warn-box">⚠️ <strong>Common Bug:</strong> Using <code>orders.length</code> instead of <code>orders.size()</code>. ArrayLists use <code>size()</code>, arrays use <code>length</code>!</div>
`,
    taskType: 'fill-blank',
    taskInstructions: 'Fill in the blanks by clicking tokens from the bank below. Complete both loop patterns.',
    taskData: {
      tasks: [
        {
          label: 'Task A — Classic For Loop',
          template: 'for (int i = 0; i < orders.[B1](); i++) {\n    System.out.println(orders.[B2](i));\n}',
          blanks: ['B1','B2'],
          answers: { B1: 'size', B2: 'get' },
          tokens: ['size','length','get','set','add','remove','i','0','indexOf']
        },
        {
          label: 'Task B — Enhanced For-Each Loop',
          template: 'for (String order : [B1]) {\n    System.out.println([B2]);\n}',
          blanks: ['B1','B2'],
          answers: { B1: 'orders', B2: 'order' },
          tokens: ['orders','order','String','i','get(i)','size()','0']
        }
      ]
    },
    hints: [
      'For the classic loop: Use size() (not length!) to check the limit, and get(i) to retrieve each element.',
      'For the enhanced loop: After the colon comes the ArrayList name (orders), and inside the body you just use the loop variable (order).'
    ],
    xp: 140
  },

  /* ── LEVEL 5: Removing ────────────────────────────────────────── */
  {
    id: 5,
    title: 'Removing Items',
    emoji: '🗑️',
    station: 'Cancelled Orders',
    mission: "Some orders got cancelled! Use remove() correctly — but watch out for the tricky int vs Object overloads!",
    canDo: 'distinguish between remove(int index) and remove(Object o) and apply each correctly.',
    coachIntro: "Uh oh — some orders got cancelled. There are TWO versions of remove() and they work differently. This is a very common AP exam trap!",
    lesson: `
<h3>🔑 Two remove() Overloads</h3>
<div class="code-label">remove(int index) — removes by position</div>
<div class="code-block">orders.<span class="mth">remove</span>(<span class="num">1</span>); <span class="cmt">// removes element at index 1</span><br><span class="cmt">// Returns the removed element</span><br><span class="cmt">// Everything after shifts LEFT</span></div>
<div class="code-label">remove(Object o) — removes by value</div>
<div class="code-block">orders.<span class="mth">remove</span>(<span class="str">"Latte"</span>); <span class="cmt">// removes first "Latte"</span><br><span class="cmt">// Returns true if found and removed</span></div>
<h3>⚠️ The Classic Trap</h3>
<div class="code-block"><span class="typ">ArrayList</span>&lt;<span class="typ">String</span>&gt; list = <span class="kw">new</span> <span class="typ">ArrayList</span>&lt;&gt;();<br>list.<span class="mth">add</span>(<span class="str">"a"</span>); list.<span class="mth">add</span>(<span class="str">"1"</span>); list.<span class="mth">add</span>(<span class="str">"b"</span>);<br><br>list.<span class="mth">remove</span>(<span class="num">1</span>);     <span class="cmt">// removes at INDEX 1 → removes "1"</span><br>list.<span class="mth">remove</span>(<span class="str">"1"</span>);   <span class="cmt">// removes the STRING "1"</span><br><span class="cmt">// remove(1) uses int overload — NOT Object!</span></div>
<div class="warn-box">⚠️ <code>remove(1)</code> vs <code>remove("1")</code> — <em>very</em> different! The literal <code>1</code> is an int, so Java uses the index overload. Passing <code>"1"</code> (String) uses the Object overload.</div>
`,
    taskType: 'scenario-choice',
    taskInstructions: 'Each scenario shows a list and a task. Choose the correct remove() call.',
    taskData: {
      questions: [
        {
          listState: ['Latte','Espresso','Mocha','Tea'],
          question: 'Remove the drink at <strong>position 2</strong> (Mocha).',
          options: ['orders.remove(2)', 'orders.remove("Mocha")', 'orders.remove(3)', 'orders.delete(2)'],
          correct: 0,
          explanation: '<strong>remove(2)</strong> uses the int overload — removes the element at index 2, which is "Mocha". Note: remove("Mocha") would ALSO work here since Mocha is the only one, but the task asked for position-based removal.'
        },
        {
          listState: ['Latte','Espresso','Mocha'],
          question: 'Cancel the <strong>"Espresso"</strong> order by name.',
          options: ['orders.remove(0)', 'orders.remove("Espresso")', 'orders.remove(1)', 'Both B and C are correct'],
          correct: 3,
          explanation: '<strong>Both B and C work!</strong> remove("Espresso") uses the Object overload to find and remove "Espresso". remove(1) removes the element at index 1, which also happens to be "Espresso". On the AP exam, either would be correct — but remove(String) is more robust.'
        },
        {
          listState: ['a','1','b','c'],
          question: 'What does <code>list.remove(1)</code> do to this list?',
          options: [
            'Removes the String "1" (searches by value)',
            'Removes the item at index 1 — which happens to be "1"',
            'Causes a compile error',
            'Does nothing — "1" must be an int to use the int overload'
          ],
          correct: 1,
          explanation: '<strong>The literal 1 is an int</strong>, so Java calls the <code>remove(int index)</code> overload — it removes whatever is at position 1, which happens to be the String "1". To remove by Object value, you must pass <code>"1"</code> (String). This is a classic AP CSA trap!'
        }
      ]
    },
    hints: [
      'Key distinction: remove(1) where 1 is an int literal → uses INDEX overload. remove("1") where "1" is a String → uses OBJECT overload.',
      'When the task says "by position/index" → remove(int). When it says "by name/value" → remove(String).'
    ],
    xp: 150
  },

  /* ── LEVEL 6: Searching ──────────────────────────────────────── */
  {
    id: 6,
    title: 'Searching',
    emoji: '🔍',
    station: 'Menu Board',
    mission: "Customers are asking if their drinks are available! Use indexOf() and contains() to search the menu ArrayList.",
    canDo: 'use indexOf() to find an item\'s position and contains() to check if an item exists.',
    coachIntro: "Search time! We need to check if drinks are in our list and where they are. Two methods will help: indexOf() and contains().",
    lesson: `
<h3>🔑 indexOf(value)</h3>
<div class="code-block">orders.<span class="mth">indexOf</span>(<span class="str">"Mocha"</span>); <span class="cmt">// returns 2 (if at index 2)</span><br>orders.<span class="mth">indexOf</span>(<span class="str">"Water"</span>); <span class="cmt">// returns -1 (not found!)</span><br><span class="cmt">// Returns the FIRST occurrence index, or -1</span></div>
<h3>🔑 contains(value)</h3>
<div class="code-block">orders.<span class="mth">contains</span>(<span class="str">"Latte"</span>); <span class="cmt">// true</span><br>orders.<span class="mth">contains</span>(<span class="str">"Juice"</span>); <span class="cmt">// false</span><br><span class="cmt">// Returns boolean: true or false</span></div>
<h3>📌 Key Facts</h3>
<ul>
  <li><code>indexOf()</code> returns <code>-1</code> when item is NOT found — always check for -1!</li>
  <li><code>contains()</code> returns <code>true/false</code> — good for if-statements</li>
  <li>Both use <code>.equals()</code> internally — case-sensitive!</li>
</ul>
<div class="tip-box">💡 <strong>AP Tip:</strong> <code>indexOf(val) != -1</code> is equivalent to <code>contains(val)</code>, but <code>contains()</code> is more readable!</div>
`,
    taskType: 'search-demo',
    taskInstructions: 'Answer each search question by selecting the correct method and seeing the result.',
    taskData: {
      list: ['Latte','Espresso','Mocha','Tea','Juice'],
      questions: [
        { question: 'Is "Mocha" in the orders list?', method: 'contains', value: 'Mocha', expectedResult: 'true', explanation: 'contains("Mocha") returns true — "Mocha" is in the list at index 2.' },
        { question: 'What index is "Tea" at?', method: 'indexOf', value: 'Tea', expectedResult: '3', explanation: 'indexOf("Tea") returns 3 — "Tea" is the 4th element (index 3).' },
        { question: 'What index is "Water" at?', method: 'indexOf', value: 'Water', expectedResult: '-1', explanation: 'indexOf("Water") returns -1 — "Water" is NOT in the list. Always check for -1!' },
        { question: 'Is "Espresso" in the list?', method: 'contains', value: 'Espresso', expectedResult: 'true', explanation: 'contains("Espresso") returns true — it\'s at index 1.' }
      ]
    },
    hints: [
      'For "is it in the list?" questions → use contains(). It returns true or false.',
      'For "where is it?" questions → use indexOf(). It returns the index, or -1 if not found.'
    ],
    xp: 140
  },

  /* ── LEVEL 7: Traversal Challenge ──────────────────────────── */
  {
    id: 7,
    title: 'Traversal Challenge',
    emoji: '🐛',
    station: 'Rush Hour',
    mission: "The café is busy and we need to remove all 'Decaf' orders! But the loop has a bug — it skips items. Find the fix!",
    canDo: 'identify the concurrent modification bug when removing inside a forward loop and apply the backwards iteration fix.',
    coachIntro: "This is a tricky one! Removing items from an ArrayList while looping forward can skip elements. Can you spot the bug and fix it?",
    lesson: `
<h3>🐛 The Bug: Removal During Forward Traversal</h3>
<div class="code-block"><span class="cmt">// Orders: ["Latte", "Decaf", "Decaf", "Mocha"]</span><br><span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; orders.<span class="mth">size</span>(); i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">if</span> (orders.<span class="mth">get</span>(i).<span class="mth">equals</span>(<span class="str">"Decaf"</span>)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orders.<span class="mth">remove</span>(i); <span class="cmt">// BUG! 🐛</span><br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br><span class="cmt">// After: ["Latte", "Decaf", "Mocha"] ← second Decaf skipped!</span></div>
<p>When you remove at index 1, "Decaf"#2 slides to index 1. But <code>i</code> increments to 2 — skipping it!</p>
<h3>✅ Fix 1 — Iterate Backwards</h3>
<div class="code-block"><span class="kw">for</span> (<span class="kw">int</span> i = orders.<span class="mth">size</span>() - <span class="num">1</span>; i &gt;= <span class="num">0</span>; i--) {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">if</span> (orders.<span class="mth">get</span>(i).<span class="mth">equals</span>(<span class="str">"Decaf"</span>)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orders.<span class="mth">remove</span>(i);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br><span class="cmt">// Shifting doesn't affect un-visited earlier indices!</span></div>
<h3>✅ Fix 2 — Decrement i After Remove</h3>
<div class="code-block"><span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; orders.<span class="mth">size</span>(); i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">if</span> (orders.<span class="mth">get</span>(i).<span class="mth">equals</span>(<span class="str">"Decaf"</span>)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orders.<span class="mth">remove</span>(i);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i--; <span class="cmt">// compensate for shift!</span><br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</div>
<div class="warn-box">⚠️ Never use an enhanced for-each loop when removing elements — it throws <code>ConcurrentModificationException</code>!</div>
`,
    taskType: 'code-fix',
    taskInstructions: 'Study the buggy trace below, then select ALL valid fixes.',
    taskData: {
      buggyCode: `// List: ["Latte","Decaf","Decaf","Mocha"]
for (int i = 0; i < orders.size(); i++) {
    if (orders.get(i).equals("Decaf")) {
        orders.remove(i);  // ← BUG HERE
    }
}`,
      traceSteps: [
        { i: 0, item: 'Latte',  action: 'Not Decaf, skip',                              listAfter: ['Latte','Decaf','Decaf','Mocha'], isBug: false },
        { i: 1, item: 'Decaf',  action: 'REMOVE at i=1 → list shifts!',                 listAfter: ['Latte','Decaf','Mocha'],         isBug: false },
        { i: 2, item: 'Mocha',  action: 'i=2 → gets "Mocha" — 2nd Decaf SKIPPED! 🐛',  listAfter: ['Latte','Decaf','Mocha'],         isBug: true  },
        { i: 3, item: '(end)',  action: 'Loop ends — 1 Decaf remains in list',           listAfter: ['Latte','Decaf','Mocha'],         isBug: true  }
      ],
      options: [
        { id: 'A', label: 'Iterate backwards: for (int i = orders.size()-1; i >= 0; i--)', correct: true, explanation: '✅ Backwards iteration: removing at index i doesn\'t affect indices 0..i-1, so nothing gets skipped.' },
        { id: 'B', label: 'Add i-- after the remove() call inside the if block', correct: true, explanation: '✅ Decrementing i compensates for the left-shift: on the next iteration i++ brings you back to the right index.' },
        { id: 'C', label: 'Change i < orders.size() to i <= orders.size()', correct: false, explanation: '❌ This doesn\'t fix the skip problem AND would cause an IndexOutOfBoundsException!' },
        { id: 'D', label: 'Use an enhanced for-each: for (String o : orders)', correct: false, explanation: '❌ Enhanced for-each throws ConcurrentModificationException when you modify the list inside it!' }
      ]
    },
    hints: [
      'The bug: after removing at index i, the next element slides to index i. But i increments to i+1 — skipping the slid element!',
      'Two valid fixes: (1) iterate backwards so shifts don\'t affect unvisited indices, OR (2) do i-- after remove() to compensate.'
    ],
    xp: 160
  },

  /* ── LEVEL 8: AP CSA Boss Assessment ────────────────────────── */
  {
    id: 8,
    title: 'AP CSA Boss Level',
    emoji: '🏆',
    station: 'Grand Opening',
    mission: "Final exam! Answer 10 AP-style questions to prove you're an ArrayList master. Score 80% to earn your certificate!",
    canDo: 'demonstrate mastery of all ArrayList concepts from Levels 1–7 including tracing, debugging, and method selection.',
    coachIntro: "This is it — the Grand Opening! 10 AP-style questions. Get 8/10 (80%) to graduate. You've got this! ☕🏆",
    lesson: `
<h3>📚 Quick Review Cheatsheet</h3>
<div class="code-block"><span class="cmt">// Declaration</span><br><span class="typ">ArrayList</span>&lt;<span class="typ">String</span>&gt; list = <span class="kw">new</span> <span class="typ">ArrayList</span>&lt;&gt;();<br><br><span class="cmt">// Add</span><br>list.<span class="mth">add</span>(<span class="str">"X"</span>);           <span class="cmt">// appends</span><br>list.<span class="mth">add</span>(<span class="num">0</span>, <span class="str">"Y"</span>);        <span class="cmt">// inserts, shifts right</span><br><br><span class="cmt">// Read / Update</span><br>list.<span class="mth">get</span>(<span class="num">0</span>)             <span class="cmt">// returns element at 0</span><br>list.<span class="mth">set</span>(<span class="num">1</span>, <span class="str">"Z"</span>);       <span class="cmt">// replaces, returns old</span><br><br><span class="cmt">// Remove</span><br>list.<span class="mth">remove</span>(<span class="num">0</span>)          <span class="cmt">// by index (int)</span><br>list.<span class="mth">remove</span>(<span class="str">"X"</span>)       <span class="cmt">// by value (Object)</span><br><br><span class="cmt">// Size & Search</span><br>list.<span class="mth">size</span>()            <span class="cmt">// number of elements</span><br>list.<span class="mth">indexOf</span>(<span class="str">"X"</span>)     <span class="cmt">// first index, or -1</span><br>list.<span class="mth">contains</span>(<span class="str">"X"</span>)   <span class="cmt">// true / false</span><br><br><span class="cmt">// Safe removal loop</span><br><span class="kw">for</span> (<span class="kw">int</span> i = list.<span class="mth">size</span>()-<span class="num">1</span>; i &gt;= <span class="num">0</span>; i--) { ... }</div>
<div class="tip-box">💡 Read each question carefully! The AP exam loves tricky index tracing and overload questions.</div>
`,
    taskType: 'boss-quiz',
    taskInstructions: 'Answer all 10 questions. You need at least 8 correct (80%) to pass!',
    taskData: {
      passingScore: 8,
      questions: [
        {
          code: 'ArrayList&lt;Integer&gt; nums = new ArrayList&lt;&gt;();\nnums.add(5); nums.add(10); nums.add(15);\nSystem.out.println(nums.get(1));',
          question: 'What does this code print?',
          options: ['5','10','15','IndexOutOfBoundsException'],
          correct: 1,
          explanation: '<code>get(1)</code> returns the element at index 1, which is <strong>10</strong>. Remember, index 0 = 5, index 1 = 10, index 2 = 15.'
        },
        {
          code: 'ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();\nlist.add("A"); list.add("B"); list.add("C");\nlist.remove(1);\nSystem.out.println(list.size());',
          question: 'What is printed?',
          options: ['1','2','3','0'],
          correct: 1,
          explanation: 'After adding 3 elements, <code>remove(1)</code> removes "B" (at index 1). The list is now ["A","C"] — size = <strong>2</strong>.'
        },
        {
          code: 'ArrayList&lt;String&gt; orders = new ArrayList&lt;&gt;();\norders.add("Latte");\norders.add(0, "Espresso");\nSystem.out.println(orders.get(0));',
          question: 'What is printed?',
          options: ['"Latte"', '"Espresso"', 'IndexOutOfBoundsException', 'null'],
          correct: 1,
          explanation: '<code>add(0, "Espresso")</code> inserts "Espresso" at index 0, pushing "Latte" to index 1. So <code>get(0)</code> = <strong>"Espresso"</strong>.'
        },
        {
          code: 'ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();\nlist.add("A"); list.add("B");\nlist.get(2);',
          question: 'What happens?',
          options: ['Returns null', 'Returns ""', 'Throws IndexOutOfBoundsException', 'Returns "B"'],
          correct: 2,
          explanation: 'The list has 2 elements (indices 0 and 1). Accessing index 2 is out of bounds → <strong>IndexOutOfBoundsException</strong>. Valid range: 0 to size()-1.'
        },
        {
          code: null,
          question: 'Which method checks if "Tea" is in an ArrayList&lt;String&gt; called menu?',
          options: ['menu.indexOf("Tea") >= 0', 'menu.contains("Tea")', 'menu.find("Tea")', 'Both A and B are correct'],
          correct: 3,
          explanation: '<strong>Both work!</strong> <code>contains("Tea")</code> directly returns true/false. <code>indexOf("Tea") >= 0</code> also works because indexOf returns -1 when not found. Both are acceptable on the AP exam.'
        },
        {
          code: 'ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();\nlist.add("X"); list.add("Y"); list.add("Z");\nlist.set(1, "A");\nSystem.out.println(list);',
          question: 'What is printed?',
          options: ['[X, Y, Z]','[X, A, Z]','[A, X, Z]','[X, Y, A]'],
          correct: 1,
          explanation: '<code>set(1, "A")</code> replaces the element at index 1 ("Y") with "A". The list becomes <strong>[X, A, Z]</strong>.'
        },
        {
          code: 'ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();\nlist.add("A"); list.add("B"); list.add("C"); list.add("B");\nSystem.out.println(list.indexOf("B"));',
          question: 'What is printed?',
          options: ['0','1','3','2'],
          correct: 1,
          explanation: '<code>indexOf("B")</code> returns the index of the <strong>first</strong> occurrence. "B" first appears at index <strong>1</strong>. The second "B" at index 3 is ignored.'
        },
        {
          code: 'ArrayList&lt;String&gt; drinks = new ArrayList&lt;&gt;();\ndrinks.add("Tea"); drinks.add("1"); drinks.add("Water");\ndrinks.remove("1");\nSystem.out.println(drinks.size());',
          question: 'What is printed?',
          options: ['3','2','1','0'],
          correct: 1,
          explanation: '<code>remove("1")</code> passes a String, so it uses the <strong>Object overload</strong> — removes the first occurrence of the String "1". List becomes ["Tea","Water"]. Size = <strong>2</strong>.'
        },
        {
          code: null,
          question: 'You need to remove all items equal to "Decaf" from an ArrayList while iterating. Which approach is safe?',
          options: [
            'for (String s : list) { if (s.equals("Decaf")) list.remove(s); }',
            'for (int i = 0; i < list.size(); i++) { if (list.get(i).equals("Decaf")) list.remove(i); }',
            'for (int i = list.size()-1; i >= 0; i--) { if (list.get(i).equals("Decaf")) list.remove(i); }',
            'list.remove("Decaf"); (call once)'
          ],
          correct: 2,
          explanation: '<strong>Iterating backwards is safe</strong> because removing at index i doesn\'t affect lower indices (already visited). Option A throws ConcurrentModificationException. Option B skips elements. Option D only removes the first occurrence.'
        },
        {
          code: 'ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();\nlist.add("P"); list.add("Q"); list.add("R");\nfor (int i = 0; i < list.size(); i++) {\n    list.add(i, "X");\n}',
          question: 'What does this loop do?',
          options: [
            'Inserts "X" before each original element (runs 3 times)',
            'Runs forever — infinite loop!',
            'Throws an exception after 3 iterations',
            'Adds "X" to the end 3 times'
          ],
          correct: 1,
          explanation: 'This is an <strong>infinite loop</strong>! Each iteration inserts at index i, growing the list by 1. Since <code>list.size()</code> grows each iteration, the condition <code>i < list.size()</code> is always true. Never add to a list inside a standard for loop that iterates by size!'
        }
      ]
    },
    hints: [
      'Remember: Indices start at 0. A list with 3 items has indices 0, 1, 2. get(3) throws an exception!',
      'Watch the remove() overloads: remove(1) is int (by index), remove("1") is Object (by value).'
    ],
    xp: 200
  }
];

/* ================================================================
   PART 2 — GAME STATE & STORAGE
   ================================================================ */

const STORAGE_KEY = 'codecafe_progress_v3';

let state = {
  playerName: '',
  currentLevel: null,
  unlockedLevels: [1],
  levelStars: {},       // levelId → 0-3
  levelAttempts: {},    // levelId → attempt count
  levelCompleted: {},   // levelId → boolean
  xp: 0,
  settings: { sound: true, music: false, reducedMotion: false, darkMode: false, largeText: false },
  attemptLog: [],
  levelInteractState: {} // ephemeral per-level interaction state
};

function saveState() {
  const toSave = { ...state, levelInteractState: {} };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave)); } catch(e) {}
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) { const s = JSON.parse(raw); Object.assign(state, s); }
  } catch(e) {}
}
function resetState() {
  const s = state.settings;
  state = {
    playerName: '', currentLevel: null,
    unlockedLevels: [1], levelStars: {}, levelAttempts: {},
    levelCompleted: {}, xp: 0, settings: s, attemptLog: [], levelInteractState: {}
  };
  saveState();
}
function getTotalStars()    { return Object.values(state.levelStars).reduce((a,b)=>a+b,0); }
function getCompletedCount(){ return Object.keys(state.levelCompleted).length; }
function getMaxStars()      { return LEVELS.length * 3; }

/* ================================================================
   PART 3 — SOUND
   ================================================================ */

const SFX = {
  play(id) {
    if (!state.settings.sound) return;
    const el = document.getElementById(id);
    if (!el || !el.src) return;
    el.currentTime = 0;
    el.play().catch(()=>{});
  },
  click()   { this.play('sfx-click'); },
  correct() { this.play('sfx-correct'); },
  wrong()   { this.play('sfx-wrong'); },
  level()   { this.play('sfx-level'); },
  star()    { this.play('sfx-star'); },
  toggleBGM(on) {
    const el = document.getElementById('bgm-cafe');
    if (!el) return;
    if (on && state.settings.music) { el.play().catch(()=>{}); }
    else { el.pause(); }
  }
};

/* ================================================================
   PART 4 — CONFETTI
   ================================================================ */

const Confetti = {
  canvas: null, ctx: null, particles: [], animId: null,
  COLORS: ['#F59E0B','#6B4226','#10B981','#3B82F6','#EF4444','#8B5CF6','#EC4899','#06B6D4'],
  init() {
    this.canvas = document.getElementById('confetti-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
  },
  burst() {
    if (state.settings.reducedMotion) return;
    if (!this.canvas) this.init();
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth; this.canvas.height = window.innerHeight;
    this.particles = [];
    for (let i = 0; i < 120; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height * 0.3 - 20,
        vx: (Math.random()-0.5)*8, vy: Math.random()*4+2,
        color: this.COLORS[Math.floor(Math.random()*this.COLORS.length)],
        size: Math.random()*8+4, rot: Math.random()*360, vrot: (Math.random()-0.5)*6,
        life: 1, decay: 0.008+Math.random()*0.006
      });
    }
    this.stop();
    this.animId = requestAnimationFrame(()=>this.animate());
  },
  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.particles = this.particles.filter(p=>p.life>0);
    this.particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.vy+=0.15; p.rot+=p.vrot; p.life-=p.decay;
      this.ctx.save();
      this.ctx.translate(p.x,p.y); this.ctx.rotate(p.rot*Math.PI/180);
      this.ctx.globalAlpha = p.life;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size/2,-p.size/4,p.size,p.size/2);
      this.ctx.restore();
    });
    if (this.particles.length > 0) this.animId = requestAnimationFrame(()=>this.animate());
    else this.stop();
  },
  stop() { if (this.animId) { cancelAnimationFrame(this.animId); this.animId=null; } if(this.ctx) this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height); }
};

/* ================================================================
   PART 5 — SCREEN MANAGER
   ================================================================ */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>{
    s.classList.remove('active');
  });
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

/* ================================================================
   PART 6 — COACH BYTE SVG
   ================================================================ */

function coachByteHTML(size=90, mood='happy') {
  const expressions = {
    happy: `<circle cx="33" cy="38" r="4" fill="#FFF8F0"/><circle cx="47" cy="38" r="4" fill="#FFF8F0"/><path d="M30 48 Q40 54 50 48" stroke="#FFF8F0" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    excited: `<circle cx="33" cy="37" r="5" fill="#FFF8F0"/><circle cx="47" cy="37" r="5" fill="#FFF8F0"/><circle cx="33" cy="37" r="2" fill="#6B4226"/><circle cx="47" cy="37" r="2" fill="#6B4226"/><path d="M28 49 Q40 57 52 49" stroke="#FFF8F0" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    thinking: `<circle cx="33" cy="38" r="4" fill="#FFF8F0"/><circle cx="47" cy="38" r="4" fill="#FFF8F0"/><path d="M32 49 Q40 47 48 49" stroke="#FFF8F0" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    sad: `<circle cx="33" cy="38" r="4" fill="#FFF8F0"/><circle cx="47" cy="38" r="4" fill="#FFF8F0"/><path d="M30 52 Q40 46 50 52" stroke="#FFF8F0" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    surprised: `<ellipse cx="33" cy="38" rx="5" ry="6" fill="#FFF8F0"/><ellipse cx="47" cy="38" rx="5" ry="6" fill="#FFF8F0"/><ellipse cx="40" cy="50" rx="5" ry="4" fill="#FFF8F0"/>`
  };
  const face = expressions[mood] || expressions.happy;
  return `<svg viewBox="0 0 80 90" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- Body -->
  <rect x="18" y="55" width="44" height="32" rx="8" fill="#4A2C13"/>
  <!-- Neck -->
  <rect x="32" y="52" width="16" height="8" rx="4" fill="#6B4226"/>
  <!-- Head -->
  <rect x="12" y="14" width="56" height="42" rx="14" fill="#6B4226"/>
  <!-- Antenna -->
  <rect x="38" y="4" width="4" height="12" rx="2" fill="#9C6B42"/>
  <circle cx="40" cy="4" r="4" fill="#F59E0B"/>
  <!-- Ears -->
  <rect x="8" y="28" width="6" height="14" rx="3" fill="#4A2C13"/>
  <rect x="66" y="28" width="6" height="14" rx="3" fill="#4A2C13"/>
  <!-- Face -->
  ${face}
  <!-- Chest badge -->
  <rect x="28" y="62" width="24" height="18" rx="4" fill="#6B4226"/>
  <text x="40" y="74" text-anchor="middle" font-size="8" font-family="monospace" font-weight="bold" fill="#F59E0B">{CB}</text>
  <!-- Buttons -->
  <circle cx="22" cy="64" r="3" fill="#F59E0B"/>
  <circle cx="58" cy="64" r="3" fill="#10B981"/>
</svg>`;
}

/* ================================================================
   PART 7 — SPLASH SCREEN LOGIC
   ================================================================ */

function initSplash() {
  const hasProgress = !!localStorage.getItem(STORAGE_KEY);
  document.getElementById('btn-continue').classList.toggle('hidden', !hasProgress);

  document.getElementById('btn-start').onclick = () => {
    SFX.click();
    if (state.playerName) { resetState(); }
    showScreen('screen-name');
  };

  document.getElementById('btn-continue').onclick = () => {
    SFX.click();
    loadState();
    applySettings();
    if (state.playerName) {
      showScreen('screen-map');
      renderMap();
    } else { showScreen('screen-name'); }
  };

  document.getElementById('btn-settings').onclick = () => openOverlay('overlay-settings');
  document.getElementById('btn-help').onclick    = () => openOverlay('overlay-howto');
}

/* ================================================================
   PART 8 — NAME SCREEN
   ================================================================ */

function initNameScreen() {
  const el = document.getElementById('coach-main');
  el.innerHTML = coachByteHTML(100,'excited');

  document.getElementById('btn-name-go').onclick = submitName;
  document.getElementById('student-name').onkeydown = e => { if (e.key === 'Enter') submitName(); };
}

function submitName() {
  const val = document.getElementById('student-name').value.trim();
  if (!val) { document.getElementById('student-name').classList.add('shake'); setTimeout(()=>document.getElementById('student-name').classList.remove('shake'),500); return; }
  state.playerName = val;
  saveState();
  SFX.click();
  showScreen('screen-map');
  renderMap();
}

/* ================================================================
   PART 9 — LEVEL MAP
   ================================================================ */

function renderMap() {
  document.getElementById('map-player-name').textContent = state.playerName || 'Player';
  document.getElementById('map-xp').textContent = state.xp;

  const completed = getCompletedCount();
  document.getElementById('map-progress-fill').style.width = `${(completed/LEVELS.length)*100}%`;
  document.getElementById('map-progress-text').textContent = `${completed} / ${LEVELS.length} Levels Complete`;
  document.getElementById('btn-view-cert').classList.toggle('hidden', completed < LEVELS.length);

  const mapEl = document.getElementById('level-map');
  mapEl.innerHTML = '';
  LEVELS.forEach((lvl, idx) => {
    const unlocked  = state.unlockedLevels.includes(lvl.id);
    const completed = !!state.levelCompleted[lvl.id];
    const stars     = state.levelStars[lvl.id] || 0;
    const isCurrent = state.unlockedLevels.includes(lvl.id) && !completed;

    // Connector
    if (idx > 0) {
      const conn = document.createElement('div');
      conn.className = 'node-connector' + (state.levelCompleted[LEVELS[idx-1].id] ? ' done' : '');
      mapEl.appendChild(conn);
    }

    const node = document.createElement('div');
    node.className = `level-node ${unlocked ? 'unlocked' : 'locked'} ${completed ? 'completed' : ''} ${isCurrent ? 'active-current' : ''}`;
    node.style.setProperty('--i', idx);
    node.setAttribute('role','listitem');
    node.setAttribute('aria-label', `Level ${lvl.id}: ${lvl.title} ${unlocked ? '(available)' : '(locked)'}`);

    const starsHtml = completed ? Array.from({length:3},(_,i)=>`<span>${i<stars?'⭐':'☆'}</span>`).join('') : '';

    node.innerHTML = `
      <div class="node-number">${completed ? '✓' : lvl.id}</div>
      <div class="node-info">
        <div class="node-title">${lvl.emoji} ${lvl.title}</div>
        <div class="node-subtitle">${lvl.station}</div>
        ${starsHtml ? `<div class="node-stars">${starsHtml}</div>` : ''}
      </div>
      ${!unlocked ? '<div class="node-lock">🔒</div>' : ''}
      ${unlocked && !completed ? '<div class="node-emoji">→</div>' : ''}
    `;

    if (unlocked) {
      node.style.cursor = 'pointer';
      node.onclick = () => { SFX.click(); playLevel(lvl.id); };
    }
    mapEl.appendChild(node);
  });
}

/* ================================================================
   PART 10 — LEVEL PLAYER ENGINE
   ================================================================ */

function playLevel(levelId) {
  const lvl = LEVELS.find(l=>l.id===levelId);
  if (!lvl) return;

  state.currentLevel = levelId;
  if (!state.levelAttempts[levelId]) state.levelAttempts[levelId] = 0;
  state.levelInteractState = {};
  saveState();

  // Populate header
  document.getElementById('hdr-level-num').textContent = `Level ${lvl.id} of ${LEVELS.length}`;
  document.getElementById('hdr-level-title').textContent = lvl.title;
  updateHeaderStars(state.levelStars[levelId]||0);

  // Coach
  document.getElementById('coach-level-avatar').innerHTML = coachByteHTML(72,'happy');
  document.getElementById('coach-msg').innerHTML = lvl.coachIntro;
  document.getElementById('mission-desc').textContent = lvl.mission;
  document.getElementById('can-do-text').textContent = lvl.canDo;

  // Star tracker
  updateStarTracker();
  document.getElementById('attempt-info').textContent = '';

  // Lesson panel
  const lessonBody = document.getElementById('lesson-body');
  lessonBody.innerHTML = `<div class="lesson-body">${lvl.lesson}</div>`;
  lessonBody.classList.remove('collapsed');
  document.getElementById('lesson-toggle').setAttribute('aria-expanded','true');
  document.querySelector('#lesson-toggle .toggle-arrow').style.transform = '';

  // Task
  document.getElementById('task-instructions').innerHTML = lvl.taskInstructions;
  renderTask(lvl);

  // Hide feedback
  const fp = document.getElementById('feedback-panel');
  fp.classList.add('hidden');

  // Buttons
  document.getElementById('btn-hint').onclick  = () => showHintModal(lvl);
  document.getElementById('btn-check').onclick = () => checkAnswer(lvl);
  document.getElementById('btn-next-level').onclick = () => advanceToNextLevel(lvl.id);
  document.getElementById('btn-retry').onclick = () => { SFX.click(); playLevel(levelId); };
  document.getElementById('btn-explain-more').onclick = () => showExplanation(lvl);
  document.getElementById('btn-back-map').onclick = () => { SFX.click(); showScreen('screen-map'); renderMap(); };
  // Hide skip button at level start
  const skipBtnInit = document.getElementById('btn-skip-level');
  if (skipBtnInit) skipBtnInit.classList.add('hidden');

  showScreen('screen-level');
}

function updateHeaderStars(n) {
  document.querySelectorAll('#hdr-stars .star').forEach((s,i)=>{
    s.textContent = i < n ? '⭐' : '☆';
    s.className = 'star ' + (i < n ? 'earned' : 'empty');
  });
}

function updateStarTracker() {
  const lvlId = state.currentLevel;
  const hintsUsed = state.levelInteractState.hintsUsed || 0;
  const attempts = state.levelAttempts[lvlId] || 0;
  let maxStars = 3;
  if (hintsUsed > 0) maxStars = Math.min(maxStars, 1);
  else if (attempts > 0) maxStars = Math.min(maxStars, 2);
  const stars = Array.from({length:3},(_,i)=>i<maxStars?'⭐':'☆').join('');
  document.getElementById('star-tracker').textContent = `${stars} on the line!`;
}

/* ================================================================
   PART 11 — RENDER TASK ROUTER
   ================================================================ */

function renderTask(lvl) {
  const ws = document.getElementById('task-workspace');
  ws.innerHTML = '';
  switch(lvl.taskType) {
    case 'multi-select':   renderMultiSelect(ws, lvl.taskData); break;
    case 'click-place':    renderClickPlace(ws, lvl.taskData); break;
    case 'list-interact':  renderListInteract(ws, lvl.taskData); break;
    case 'fill-blank':     renderFillBlank(ws, lvl.taskData); break;
    case 'scenario-choice':renderScenarioChoice(ws, lvl.taskData); break;
    case 'search-demo':    renderSearchDemo(ws, lvl.taskData); break;
    case 'code-fix':       renderCodeFix(ws, lvl.taskData); break;
    case 'boss-quiz':      renderBossQuiz(ws, lvl.taskData); break;
  }
}

/* ================================================================
   PART 12 — LEVEL 1: MULTI-SELECT
   ================================================================ */

function renderMultiSelect(ws, data) {
  const grid = document.createElement('div');
  grid.className = 'choice-grid';
  grid.innerHTML = `<p class="choice-instruction">Click all valid declarations (may be more than one):</p>`;

  data.options.forEach((opt, i) => {
    const card = document.createElement('div');
    card.className = 'choice-card';
    card.dataset.idx = i;
    card.innerHTML = `
      <div class="choice-check"></div>
      <code style="font-size:.85rem;font-family:var(--ff-code)">${opt.code}</code>
    `;
    card.onclick = () => {
      card.classList.toggle('selected');
      const chk = card.querySelector('.choice-check');
      chk.textContent = card.classList.contains('selected') ? '✓' : '';
      SFX.click();
    };
    grid.appendChild(card);
  });
  ws.appendChild(grid);
}

function checkMultiSelect(lvl) {
  const data = lvl.taskData;
  const cards = document.querySelectorAll('.choice-card');
  const selected = new Set();
  cards.forEach((c,i) => { if(c.classList.contains('selected')) selected.add(i); });
  const correct = new Set(data.options.map((o,i)=>o.correct?i:-1).filter(i=>i>=0));
  const isRight = selected.size===correct.size && [...selected].every(i=>correct.has(i));

  // Show per-card results
  cards.forEach((c,i)=>{
    c.onclick = null;
    c.style.cursor = 'default';
    if (correct.has(i) && selected.has(i)) c.classList.add('correct');
    else if (!correct.has(i) && selected.has(i)) c.classList.add('wrong');
    else if (correct.has(i) && !selected.has(i)) c.classList.add('missed');
  });

  const explainHtml = data.options.map((o,i)=>
    `<p><code style="font-size:.8rem">${o.code}</code><br><span style="font-size:.85rem">${o.explanation}</span></p>`
  ).join('');

  return { isRight, explainHtml };
}

/* ================================================================
   PART 13 — LEVEL 2: CLICK-PLACE (Add items)
   ================================================================ */

function renderClickPlace(ws, data) {
  const iState = state.levelInteractState;
  iState.currentList = [];
  iState.taskADone = false;
  iState.taskBDone = false;
  iState.selectedTicket = null;
  iState.taskData = data;

  ws.innerHTML = `
    <div class="ticket-system">
      <div>
        <div class="ticket-rack-title">🎫 Available Tickets</div>
        <div class="ticket-container" id="ticket-rack"></div>
      </div>
      <div>
        <div class="list-display-title">📦 orders ArrayList</div>
        <div class="arraylist-visual">
          <div class="arraylist-header">ArrayList&lt;String&gt; orders</div>
          <div class="arraylist-slots" id="al-slots"></div>
        </div>
        <button class="add-end-btn" id="add-end-btn">+ Add to End (Task A)</button>
        <div class="generated-code hidden" id="gen-code"></div>
      </div>
    </div>
    <div class="mt-md" id="task-step-display" style="font-size:.9rem;font-weight:600;color:var(--c-teal)"></div>
  `;

  refreshTickets(ws, data);
  refreshALSlots(ws);
  updateTaskStepDisplay(ws, data);

  document.getElementById('add-end-btn').onclick = () => handleAddToEnd(ws, data);
}

function refreshTickets(ws, data) {
  const rack = document.getElementById('ticket-rack');
  if (!rack) return;
  rack.innerHTML = '';
  const iState = state.levelInteractState;
  const usedInA = new Set(iState.currentList);

  data.tickets.forEach(t => {
    const used = iState.currentList.includes(t) && data.taskA.items.includes(t);
    const ticket = document.createElement('div');
    ticket.className = `ticket ${iState.selectedTicket===t?'selected':''} ${used?'used':''}`;
    ticket.textContent = `☕ ${t}`;
    if (!used) {
      ticket.onclick = () => {
        iState.selectedTicket = t;
        SFX.click();
        refreshTickets(ws, data);
        refreshALSlots(ws);
        document.getElementById('add-end-btn').classList.toggle('can-drop', !!t);
      };
    }
    rack.appendChild(ticket);
  });
}

function refreshALSlots(ws) {
  const slots = document.getElementById('al-slots');
  if (!slots) return;
  const iState = state.levelInteractState;
  slots.innerHTML = '';

  iState.currentList.forEach((val, idx) => {
    const slot = document.createElement('div');
    slot.className = 'arraylist-slot';
    slot.innerHTML = `<div class="slot-index">${idx}</div><div class="slot-value">"${val}"</div>`;
    slots.appendChild(slot);
  });

  // Insert zones (only during Task B)
  if (iState.taskADone && !iState.taskBDone) {
    const data = iState.taskData;
    // Show clickable slots for insertion
    const currentLen = iState.currentList.length;
    for (let idx = 0; idx <= currentLen; idx++) {
      const zone = document.getElementById(`insert-zone-${idx}`);
      if (!zone) {
        const existing = slots.children[idx];
        if (existing) {
          const dz = document.createElement('div');
          dz.className = 'slot-dropzone can-drop';
          dz.id = `insert-zone-${idx}`;
          dz.textContent = `↓ Insert at [${idx}]`;
          dz.onclick = () => handleInsertAt(idx, ws, data);
          slots.insertBefore(dz, existing);
        }
      }
    }
    // Zone at end
    const dzEnd = document.createElement('div');
    dzEnd.className = 'slot-dropzone can-drop';
    dzEnd.textContent = `↓ Insert at [${currentLen}]`;
    dzEnd.onclick = () => handleInsertAt(currentLen, ws, iState.taskData);
    slots.appendChild(dzEnd);
  }
}

function handleAddToEnd(ws, data) {
  const iState = state.levelInteractState;
  if (!iState.selectedTicket) return;
  if (iState.taskADone) return;

  const ticket = iState.selectedTicket;
  const expected = data.taskA.items;

  if (expected[iState.currentList.length] === ticket) {
    iState.currentList.push(ticket);
    iState.selectedTicket = null;
    showGenCode(ws, `orders.add("${ticket}");`);
    SFX.correct();
    if (iState.currentList.length >= expected.length) {
      iState.taskADone = true;
      updateTaskStepDisplay(ws, data);
    }
  } else {
    showGenCode(ws, `❌ Add "${expected[iState.currentList.length]}" next!`);
    SFX.wrong();
  }
  refreshTickets(ws, data);
  refreshALSlots(ws);
  updateTaskStepDisplay(ws, data);
}

function handleInsertAt(idx, ws, data) {
  const iState = state.levelInteractState;
  if (!iState.selectedTicket || iState.taskBDone) return;
  if (iState.selectedTicket !== data.taskB.item) {
    showGenCode(ws, `❌ Select "${data.taskB.item}" first!`);
    SFX.wrong();
    return;
  }
  if (idx !== data.taskB.targetIndex) {
    showGenCode(ws, `❌ Wrong index! Insert at index ${data.taskB.targetIndex}.`);
    SFX.wrong();
    return;
  }
  iState.currentList.splice(idx, 0, iState.selectedTicket);
  showGenCode(ws, `orders.add(${idx}, "${data.taskB.item}");`);
  iState.taskBDone = true;
  iState.selectedTicket = null;
  SFX.correct();
  refreshTickets(ws, data);
  refreshALSlots(ws);
  updateTaskStepDisplay(ws, data);
}

function showGenCode(ws, code) {
  const el = document.getElementById('gen-code');
  if (!el) return;
  el.classList.remove('hidden');
  el.innerHTML = `<div class="code-label">Generated Code:</div><div class="code-block"><span class="kw" style="font-size:.9rem">${escapeHtml(code).replace(/orders/g,'<span class="typ">orders</span>').replace(/\.add/g,'.<span class="mth">add</span>')}</span></div>`;
}

function updateTaskStepDisplay(ws, data) {
  const iState = state.levelInteractState;
  const el = document.getElementById('task-step-display');
  if (!el) return;
  if (!iState.taskADone) {
    el.innerHTML = `📌 <b>Task A:</b> ${data.taskA.instructions} → Needs: <code>${data.taskA.items.slice(iState.currentList.length).join(', ')}</code>`;
  } else if (!iState.taskBDone) {
    el.innerHTML = `📌 <b>Task B:</b> ${data.taskB.instructions} → Select <code>"${data.taskB.item}"</code>, then click <b>[${data.taskB.targetIndex}]</b> insert zone.`;
    document.getElementById('add-end-btn').style.display = 'none';
  } else {
    el.innerHTML = `✅ Both tasks complete! Click <b>Check Answer</b>.`;
  }
}

function checkClickPlace(lvl) {
  const iState = state.levelInteractState;
  const data = lvl.taskData;
  const aOk = iState.taskADone;
  const bOk = iState.taskBDone;
  const isRight = aOk && bOk;
  const explainHtml = `
    <p><strong>Task A — add() to end:</strong> You added ${data.taskA.items.join(', ')} using <code>orders.add(value)</code> — each call appends to the end.</p>
    <p><strong>Task B — add(index, value):</strong> You inserted "${data.taskB.item}" at index ${data.taskB.targetIndex} using <code>orders.add(${data.taskB.targetIndex}, "${data.taskB.item}")</code> — all existing elements from that index shifted right.</p>
    <div class="code-block"><span class="typ">orders</span>.<span class="mth">add</span>(<span class="str">"Latte"</span>); <span class="cmt">// add to end</span><br><span class="typ">orders</span>.<span class="mth">add</span>(<span class="num">1</span>, <span class="str">"Tea"</span>); <span class="cmt">// insert at index 1</span></div>
  `;
  return { isRight, explainHtml };
}

/* ================================================================
   PART 14 — LEVEL 3: LIST INTERACT (get/set)
   ================================================================ */

function renderListInteract(ws, data) {
  const iState = state.levelInteractState;
  iState.currentList = [...data.startList];
  iState.currentTask = 0;
  iState.taskResults = [];
  iState.taskData = data;
  // Reset per-task selections
  iState.getSelected = undefined;
  iState.setTargetIdx = undefined;
  iState.setNewValue = undefined;

  renderListInteractTask(ws, data, 0);
}

function renderListInteractTask(ws, data, taskIdx) {
  ws.innerHTML = '';
  const task = data.tasks[taskIdx];
  const iState = state.levelInteractState;
  // Reset selections for this sub-task
  iState.getSelected = undefined;
  iState.setTargetIdx = undefined;
  iState.setNewValue = undefined;

  const qDiv = document.createElement('div');
  qDiv.className = 'q-progress';
  qDiv.innerHTML = `Task ${taskIdx+1} of ${data.tasks.length}`;
  ws.appendChild(qDiv);

  const qText = document.createElement('p');
  qText.innerHTML = task.question;
  qText.style.cssText = 'font-weight:600;margin-bottom:12px;';
  ws.appendChild(qText);

  const listEl = document.createElement('div');
  listEl.className = 'interactive-list';
  listEl.id = 'ilist-container';
  iState.currentList.forEach((val, idx) => {
    const slot = document.createElement('div');
    slot.className = 'ilist-slot';
    slot.dataset.idx = idx;
    slot.innerHTML = `<div class="ilist-index">${idx}</div><div class="slot-value">"${val}"</div>`;
    slot.onclick = () => {
      SFX.click();
      if (task.type === 'get') {
        document.querySelectorAll('.ilist-slot').forEach(s=>s.classList.remove('target'));
        slot.classList.add('target');
        iState.getSelected = idx;
        showSubTaskConfirm(ws, data, taskIdx);
      } else if (task.type === 'set') {
        document.querySelectorAll('.ilist-slot').forEach(s=>s.classList.remove('target'));
        slot.classList.add('target');
        iState.setTargetIdx = idx;
        showValueChoices(ws, data, taskIdx);
      }
    };
    listEl.appendChild(slot);
  });
  ws.appendChild(listEl);
}

/* Show a "Confirm" / "Next Task" button for get-type sub-tasks */
function showSubTaskConfirm(ws, data, taskIdx) {
  document.querySelectorAll('.subtask-confirm-row').forEach(e => e.remove());
  const iState = state.levelInteractState;
  const task = data.tasks[taskIdx];
  const isLast = (taskIdx === data.tasks.length - 1);

  const row = document.createElement('div');
  row.className = 'subtask-confirm-row';

  const btn = document.createElement('button');
  btn.className = 'btn btn-check';
  btn.style.marginTop = '12px';
  btn.textContent = isLast ? '✓ Check Answer' : `Confirm & Next Task →`;
  btn.onclick = () => {
    SFX.click();
    // Grade this sub-task
    const ok = iState.getSelected === task.targetIndex;
    iState.taskResults.push({ taskIdx, type: 'get', ok,
      explanation: `<p><strong>Task A (get):</strong> ${ok ? '✅' : '❌'} <code>orders.get(${task.targetIndex})</code> returns <code>"${task.answer}"</code> — the element at index ${task.targetIndex}.</p>` });
    // Visual on slots
    document.querySelectorAll('.ilist-slot').forEach((s, i) => {
      if (i === task.targetIndex) s.classList.add(ok ? 'correct' : 'wrong');
    });
    if (isLast) {
      // All tasks done — trigger real check
      checkAnswer(LEVELS[state.currentLevel - 1]);
    } else {
      // Advance to next sub-task
      iState.currentTask = taskIdx + 1;
      const wsEl = document.getElementById('workspace');
      renderListInteractTask(wsEl, data, taskIdx + 1);
    }
  };
  row.appendChild(btn);
  ws.appendChild(row);
}

function showValueChoices(ws, data, taskIdx) {
  document.querySelectorAll('.value-choices').forEach(e=>e.remove());
  document.querySelectorAll('.subtask-confirm-row').forEach(e=>e.remove());
  const task = data.tasks[taskIdx];
  const iState = state.levelInteractState;
  const isLast = (taskIdx === data.tasks.length - 1);

  const vcDiv = document.createElement('div');
  vcDiv.className = 'value-choices';

  const label = document.createElement('p');
  label.style.cssText = 'font-weight:600;margin-bottom:8px;color:#6B4226;';
  label.textContent = 'Now choose the new value:';
  vcDiv.appendChild(label);

  task.choices.forEach(choice => {
    const chip = document.createElement('div');
    chip.className = 'value-chip';
    chip.textContent = `"${choice}"`;
    chip.onclick = () => {
      SFX.click();
      document.querySelectorAll('.value-chip').forEach(c=>c.classList.remove('chosen'));
      chip.classList.add('chosen');
      iState.setNewValue = choice;
      // Auto-show confirm button once value is chosen
      showSetConfirm(ws, data, taskIdx);
    };
    vcDiv.appendChild(chip);
  });
  ws.appendChild(vcDiv);
}

/* Confirm button for set-type sub-tasks */
function showSetConfirm(ws, data, taskIdx) {
  document.querySelectorAll('.subtask-confirm-row').forEach(e => e.remove());
  const iState = state.levelInteractState;
  const task = data.tasks[taskIdx];
  const isLast = (taskIdx === data.tasks.length - 1);

  const row = document.createElement('div');
  row.className = 'subtask-confirm-row';

  const btn = document.createElement('button');
  btn.className = 'btn btn-check';
  btn.style.marginTop = '12px';
  btn.textContent = isLast ? '✓ Check Answer' : 'Confirm & Next Task →';
  btn.onclick = () => {
    SFX.click();
    const idxOk = iState.setTargetIdx === task.targetIndex;
    const valOk = iState.setNewValue === task.newValue;
    const ok = idxOk && valOk;
    iState.taskResults.push({ taskIdx, type: 'set', ok,
      explanation: `<p><strong>Task B (set):</strong> ${ok ? '✅' : '❌'} <code>orders.set(${task.targetIndex}, "${task.newValue}")</code> — replaces index ${task.targetIndex} with "${task.newValue}". Returns the old value!</p>` });
    if (isLast) {
      checkAnswer(LEVELS[state.currentLevel - 1]);
    } else {
      iState.currentTask = taskIdx + 1;
      const wsEl = document.getElementById('workspace');
      renderListInteractTask(wsEl, data, taskIdx + 1);
    }
  };
  row.appendChild(btn);
  ws.appendChild(row);
}

function checkListInteract(lvl) {
  const iState = state.levelInteractState;
  const results = iState.taskResults || [];
  let allCorrect = results.length > 0 && results.every(r => r.ok);
  let explainHtml = '';

  results.forEach(r => { explainHtml += r.explanation; });

  // If no results were stored (edge case), mark wrong with guidance
  if (results.length === 0) {
    allCorrect = false;
    explainHtml = '<p>❌ Please complete both tasks above using the interactive list.</p>';
  }

  explainHtml += `<div class="code-block"><span class="cmt">// get() — read an element</span><br><span class="typ">String</span> drink = orders.<span class="mth">get</span>(<span class="num">2</span>);<br><span class="cmt">// set() — update an element, returns old value</span><br><span class="typ">String</span> old = orders.<span class="mth">set</span>(<span class="num">1</span>, <span class="str">"Cappuccino"</span>);</div>`;
  return { isRight: allCorrect, explainHtml };
}

/* ================================================================
   PART 15 — LEVEL 4: FILL BLANK
   ================================================================ */

function renderFillBlank(ws, data) {
  const iState = state.levelInteractState;
  iState.currentTask = 0;
  iState.filledBlanks = {};
  iState.taskData = data;
  iState.activeBlank = null;
  iState.taskCorrect = [];

  renderFillBlankTask(ws, data, 0);
}

function renderFillBlankTask(ws, data, taskIdx) {
  ws.innerHTML = '';
  const task = data.tasks[taskIdx];
  const iState = state.levelInteractState;
  iState.filledBlanks = {};
  iState.activeBlank = null;

  const label = document.createElement('div');
  label.className = 'code-label mt-sm';
  label.textContent = task.label;
  ws.appendChild(label);

  // Build code with blank slots
  const codeDiv = document.createElement('div');
  codeDiv.className = 'fill-code-block';

  let html = escapeHtml(task.template);
  task.blanks.forEach(b => {
    html = html.replace(`[${b}]`, `<span class="blank-slot" data-blank="${b}" id="blank-${b}" tabindex="0">___</span>`);
  });
  // Syntax color remaining
  html = html
    .replace(/\bfor\b/g, '<span class="kw">for</span>')
    .replace(/\bint\b/g, '<span class="kw">int</span>')
    .replace(/\bString\b/g, '<span class="typ">String</span>')
    .replace(/System\.out\.println/g, '<span class="mth">System.out.println</span>');
  codeDiv.innerHTML = html;
  ws.appendChild(codeDiv);

  // Click blanks
  task.blanks.forEach(b => {
    const slot = document.getElementById(`blank-${b}`);
    if (slot) {
      slot.onclick = () => {
        document.querySelectorAll('.blank-slot').forEach(s=>s.classList.remove('active-blank'));
        slot.classList.add('active-blank');
        iState.activeBlank = b;
        SFX.click();
      };
    }
  });

  // Token bank
  const bankLabel = document.createElement('div');
  bankLabel.className = 'code-label mt-md';
  bankLabel.textContent = 'Click a token to fill the selected blank:';
  ws.appendChild(bankLabel);

  const bank = document.createElement('div');
  bank.className = 'token-bank';
  task.tokens.forEach(tok => {
    const t = document.createElement('div');
    t.className = 'token';
    t.textContent = tok;
    t.onclick = () => {
      if (!iState.activeBlank) {
        // Select first unfilled blank
        const unfilled = task.blanks.find(b=>!iState.filledBlanks[b]);
        if (unfilled) iState.activeBlank = unfilled;
        else return;
      }
      iState.filledBlanks[iState.activeBlank] = tok;
      const slot = document.getElementById(`blank-${iState.activeBlank}`);
      if (slot) { slot.textContent = tok; slot.classList.add('filled'); slot.classList.remove('active-blank'); }
      iState.activeBlank = null;
      SFX.click();
    };
    bank.appendChild(t);
  });
  ws.appendChild(bank);

  if (data.tasks.length > 1) {
    const prog = document.createElement('p');
    prog.className = 'text-muted text-sm mt-sm';
    prog.textContent = `Task ${taskIdx+1} of ${data.tasks.length}`;
    ws.appendChild(prog);
  }
}

function checkFillBlank(lvl) {
  const data = lvl.taskData;
  const iState = state.levelInteractState;
  const taskIdx = iState.currentTask || 0;
  const task = data.tasks[taskIdx];
  let allCorrect = true;
  let explainHtml = '';

  task.blanks.forEach(b => {
    const filled = iState.filledBlanks[b];
    const expected = task.answers[b];
    const ok = filled === expected;
    if (!ok) allCorrect = false;
    const slot = document.getElementById(`blank-${b}`);
    if (slot) {
      slot.textContent = ok ? filled : (filled||'???');
      slot.className = 'blank-slot ' + (ok?'correct-slot':'wrong-slot');
    }
    explainHtml += `<p>Blank [${b}]: Expected <code>${expected}</code>, got <code>${filled||'nothing'}</code> — ${ok?'✅':'❌'}</p>`;
  });

  // If task A passes, advance to task B on retry
  if (allCorrect && taskIdx < data.tasks.length - 1) {
    iState.currentTask = taskIdx + 1;
    iState.taskCorrect.push(true);
    setTimeout(() => {
      renderFillBlankTask(document.getElementById('task-workspace'), data, taskIdx+1);
      // Re-bind check button for new task
    }, 1400);
    return { isRight: false, partialPass: true, explainHtml: `✅ Task ${taskIdx+1} correct! Loading next task...` };
  }

  const isRight = allCorrect && (taskIdx >= data.tasks.length - 1);
  return { isRight, explainHtml };
}

/* ================================================================
   PART 16 — LEVEL 5: SCENARIO CHOICE
   ================================================================ */

function renderScenarioChoice(ws, data) {
  const iState = state.levelInteractState;
  iState.currentQ = 0;
  iState.answers = [];
  iState.taskData = data;
  renderScenarioQ(ws, data, 0);
}

function renderScenarioQ(ws, data, qIdx) {
  ws.innerHTML = '';
  const q = data.questions[qIdx];
  const iState = state.levelInteractState;

  const prog = document.createElement('p');
  prog.className = 'q-progress';
  prog.textContent = `Question ${qIdx+1} of ${data.questions.length}`;
  ws.appendChild(prog);

  const scenario = document.createElement('div');
  scenario.className = 'scenario-card';
  const pillsHtml = q.listState.map((v,i)=>`<div class="list-pill"><span class="pill-idx">[${i}]</span><span>"${v}"</span></div>`).join('');
  scenario.innerHTML = `
    <div style="font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--c-text-muted);margin-bottom:6px">ArrayList State:</div>
    <div class="scenario-list">${pillsHtml}</div>
    <p style="margin-top:10px;font-weight:600">${q.question}</p>
  `;
  ws.appendChild(scenario);

  const optList = document.createElement('div');
  optList.className = 'options-list';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span style="font-weight:700;color:var(--c-text-muted);margin-right:8px">${String.fromCharCode(65+i)}.</span>${escapeHtml(opt)}`;
    btn.onclick = () => {
      document.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      iState.answers[qIdx] = i;
      SFX.click();
    };
    optList.appendChild(btn);
  });
  ws.appendChild(optList);
}

function checkScenarioChoice(lvl) {
  const data = lvl.taskData;
  const iState = state.levelInteractState;
  const qIdx = iState.currentQ || 0;
  const q = data.questions[qIdx];
  const selected = iState.answers[qIdx];
  const isRight = selected === q.correct;

  // Mark options
  document.querySelectorAll('.option-btn').forEach((b,i)=>{
    b.onclick = null;
    if (i === q.correct) b.classList.add('correct');
    else if (i === selected && !isRight) b.classList.add('wrong');
  });

  const explainHtml = q.explanation;

  if (isRight && qIdx < data.questions.length - 1) {
    iState.currentQ = qIdx + 1;
    setTimeout(() => renderScenarioQ(document.getElementById('task-workspace'), data, qIdx+1), 1400);
    return { isRight: false, partialPass: true, explainHtml: `✅ Correct! Loading next scenario...` };
  }

  return {
    isRight: isRight && (qIdx >= data.questions.length - 1),
    explainHtml: `<strong>Question ${qIdx+1}:</strong> ${explainHtml}`
  };
}

/* ================================================================
   PART 17 — LEVEL 6: SEARCH DEMO
   ================================================================ */

function renderSearchDemo(ws, data) {
  const iState = state.levelInteractState;
  iState.currentQ = 0;
  iState.answers = [];
  iState.taskData = data;
  renderSearchQ(ws, data, 0);
}

function renderSearchQ(ws, data, qIdx) {
  ws.innerHTML = '';
  const q = data.questions[qIdx];
  const iState = state.levelInteractState;

  const prog = document.createElement('p');
  prog.className = 'q-progress';
  prog.textContent = `Question ${qIdx+1} of ${data.questions.length}`;
  ws.appendChild(prog);

  const pillsHtml = data.list.map((v,i)=>`<div class="list-pill"><span class="pill-idx">[${i}]</span><span>"${v}"</span></div>`).join('');

  const demo = document.createElement('div');
  demo.className = 'search-demo';
  demo.innerHTML = `
    <p style="font-weight:600">${q.question}</p>
    <div>
      <div class="ticket-rack-title">orders:</div>
      <div class="search-list-display">${pillsHtml}</div>
    </div>
    <div>
      <div class="ticket-rack-title">Choose the correct method:</div>
      <div class="method-buttons" id="method-btns"></div>
    </div>
    <div>
      <div class="ticket-rack-title">Generated code:</div>
      <div class="search-query-display" id="query-display"><span style="opacity:.4">// click a method above</span></div>
    </div>
    <div>
      <div class="ticket-rack-title">Result:</div>
      <div class="result-display" id="result-display">?</div>
    </div>
  `;
  ws.appendChild(demo);

  const methods = ['contains','indexOf'];
  const btnContainer = document.getElementById('method-btns');
  methods.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'method-btn ' + (iState.answers[qIdx]?.method===m ? 'active' : '');
    btn.textContent = `.${m}("${q.value}")`;
    btn.onclick = () => {
      document.querySelectorAll('.method-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      iState.answers[qIdx] = { method: m, value: q.value };
      const result = m==='contains' ? (data.list.includes(q.value) ? 'true' : 'false') : String(data.list.indexOf(q.value));
      document.getElementById('query-display').innerHTML = `<span class="typ">orders</span>.<span class="mth">${m}</span>(<span class="str">"${q.value}"</span>)`;
      const rd = document.getElementById('result-display');
      rd.textContent = `→ ${result}`;
      rd.classList.add('showing');
      SFX.click();
    };
    btnContainer.appendChild(btn);
  });
}

function checkSearchDemo(lvl) {
  const data = lvl.taskData;
  const iState = state.levelInteractState;
  const qIdx = iState.currentQ || 0;
  const q = data.questions[qIdx];
  const ans = iState.answers[qIdx];
  const isRight = ans && ans.method === q.method;

  const explainHtml = q.explanation;

  if (isRight && qIdx < data.questions.length - 1) {
    iState.currentQ = qIdx + 1;
    setTimeout(() => renderSearchQ(document.getElementById('task-workspace'), data, qIdx+1), 1400);
    return { isRight: false, partialPass: true, explainHtml: `✅ Correct! Next question...` };
  }
  return { isRight: isRight && (qIdx >= data.questions.length-1), explainHtml };
}

/* ================================================================
   PART 18 — LEVEL 7: CODE FIX
   ================================================================ */

function renderCodeFix(ws, data) {
  const iState = state.levelInteractState;
  iState.selected = new Set();

  const codeDiv = document.createElement('div');
  codeDiv.innerHTML = `<div class="code-label">Buggy Code:</div><div class="code-block"><pre style="margin:0;white-space:pre-wrap;font-size:.82rem">${escapeHtml(data.buggyCode).replace(/orders/g,'<span class="typ">orders</span>').replace(/\.get|\.remove|\.size|\.equals/g, m=>`.<span class="mth">${m.slice(1)}</span>`)}</pre></div>`;
  ws.appendChild(codeDiv);

  const traceDiv = document.createElement('div');
  traceDiv.className = 'buggy-trace';
  traceDiv.innerHTML = `<div class="trace-header">🔍 Step-by-step trace (what actually happens):</div>`;
  data.traceSteps.forEach(step => {
    const row = document.createElement('div');
    row.className = `trace-step ${step.isBug?'bug-step':''}`;
    row.innerHTML = `
      <div class="trace-i">i=${step.i}</div>
      <div class="trace-desc">
        <strong>${step.item}</strong> → ${step.action}<br>
        <span class="trace-state">List: [${step.listAfter.map(v=>`"${v}"`).join(', ')}]</span>
      </div>
      ${step.isBug ? '<div style="color:#B91C1C;font-weight:700">🐛 BUG!</div>' : ''}
    `;
    traceDiv.appendChild(row);
  });
  ws.appendChild(traceDiv);

  const fixLabel = document.createElement('div');
  fixLabel.style.cssText = 'font-weight:700;margin:12px 0 6px;';
  fixLabel.textContent = 'Select ALL valid fixes:';
  ws.appendChild(fixLabel);

  const fixList = document.createElement('div');
  fixList.className = 'fix-options';
  data.options.forEach(opt => {
    const fo = document.createElement('div');
    fo.className = 'fix-option';
    fo.dataset.id = opt.id;
    fo.innerHTML = `
      <div class="fix-option-label">${opt.id}. ${escapeHtml(opt.label)}</div>
    `;
    fo.onclick = () => {
      if (iState.selected.has(opt.id)) iState.selected.delete(opt.id);
      else iState.selected.add(opt.id);
      fo.classList.toggle('selected', iState.selected.has(opt.id));
      SFX.click();
    };
    fixList.appendChild(fo);
  });
  ws.appendChild(fixList);
}

function checkCodeFix(lvl) {
  const data = lvl.taskData;
  const iState = state.levelInteractState;
  const correctIds = new Set(data.options.filter(o=>o.correct).map(o=>o.id));
  const isRight = iState.selected.size === correctIds.size && [...iState.selected].every(id=>correctIds.has(id));

  document.querySelectorAll('.fix-option').forEach(fo => {
    const id = fo.dataset.id;
    const opt = data.options.find(o=>o.id===id);
    fo.onclick = null;
    if (opt.correct && iState.selected.has(id)) fo.classList.add('correct');
    else if (!opt.correct && iState.selected.has(id)) fo.classList.add('wrong');
    else if (opt.correct && !iState.selected.has(id)) fo.classList.add('missed');
  });

  const explainHtml = data.options.map(opt=>
    `<p><strong>${opt.id}:</strong> ${opt.explanation}</p>`
  ).join('');

  return { isRight, explainHtml };
}

/* ================================================================
   PART 19 — LEVEL 8: BOSS QUIZ
   ================================================================ */

function renderBossQuiz(ws, data) {
  const iState = state.levelInteractState;
  iState.currentQ = 0;
  iState.answers = [];
  iState.score = 0;
  iState.taskData = data;
  renderBossQ(ws, data, 0);
}

function renderBossQ(ws, data, qIdx) {
  ws.innerHTML = '';
  const q = data.questions[qIdx];
  const iState = state.levelInteractState;

  // Progress bar
  const progBar = document.createElement('div');
  progBar.className = 'boss-progress-bar';
  progBar.innerHTML = `
    <div class="boss-q-label">Q ${qIdx+1}/${data.questions.length}</div>
    <div class="boss-progress-track"><div class="boss-progress-fill" style="width:${(qIdx/data.questions.length)*100}%"></div></div>
    <div class="boss-score-display">✅ ${iState.score}/${qIdx}</div>
  `;
  ws.appendChild(progBar);

  const qArea = document.createElement('div');
  qArea.className = 'boss-question-area';
  if (q.code) {
    const codeHtml = q.code
      .replace(/&lt;/g,'<').replace(/&gt;/g,'>')
      .replace(/</g,'&lt;').replace(/>/g,'&gt;');
    qArea.innerHTML += `<div class="boss-q-code"><div class="code-block"><pre style="margin:0;white-space:pre-wrap;font-size:.82rem">${syntaxColor(codeHtml)}</pre></div></div>`;
  }
  qArea.innerHTML += `<div class="boss-q-text">${q.question}</div>`;

  const optDiv = document.createElement('div');
  optDiv.className = 'boss-options';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'boss-opt';
    btn.innerHTML = `<strong style="color:var(--c-text-muted)">${String.fromCharCode(65+i)}.</strong> ${escapeHtml(opt)}`;
    btn.onclick = () => {
      document.querySelectorAll('.boss-opt').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      iState.answers[qIdx] = i;
      SFX.click();
    };
    optDiv.appendChild(btn);
  });
  qArea.appendChild(optDiv);

  // Confirm button
  const nextRow = document.createElement('div');
  nextRow.className = 'boss-next-btn';
  const confirmBtn = document.createElement('button');
  confirmBtn.className = 'btn btn-check';
  confirmBtn.textContent = qIdx < data.questions.length-1 ? '✓ Confirm & Next →' : '✓ Submit Final Answer';
  confirmBtn.onclick = () => confirmBossAnswer(ws, data, qIdx);
  nextRow.appendChild(confirmBtn);
  qArea.appendChild(nextRow);

  ws.appendChild(qArea);
}

function confirmBossAnswer(ws, data, qIdx) {
  const q = data.questions[qIdx];
  const iState = state.levelInteractState;
  const selected = iState.answers[qIdx];
  if (selected === undefined) return;

  const isRight = selected === q.correct;
  if (isRight) iState.score++;

  // Show correct/wrong
  document.querySelectorAll('.boss-opt').forEach((b,i) => {
    b.onclick = null;
    if (i === q.correct) b.classList.add('correct');
    else if (i === selected && !isRight) b.classList.add('wrong');
  });

  // Brief explanation
  const expDiv = document.createElement('div');
  expDiv.style.cssText = 'padding:8px 0;font-size:.85rem;';
  expDiv.innerHTML = `${isRight?'✅':'❌'} ${q.explanation}`;
  ws.querySelector('.boss-question-area').appendChild(expDiv);

  SFX[isRight?'correct':'wrong']();

  const nextBtn = ws.querySelector('.boss-next-btn button');
  nextBtn.onclick = null;
  nextBtn.textContent = qIdx < data.questions.length-1 ? 'Next Question →' : 'See Results';
  nextBtn.className = 'btn btn-next';
  nextBtn.onclick = () => {
    if (qIdx < data.questions.length-1) {
      renderBossQ(ws, data, qIdx+1);
    } else {
      showBossResults(ws, data, iState.score);
    }
  };
}

function showBossResults(ws, data, score) {
  ws.innerHTML = '';
  const pass = score >= data.passingScore;
  const pct = Math.round((score/data.questions.length)*100);

  const resultDiv = document.createElement('div');
  resultDiv.className = `boss-result ${pass?'pass':'fail'}`;
  resultDiv.innerHTML = `
    <div class="boss-result-score">${score}/${data.questions.length}</div>
    <div class="boss-pass-msg">${pass ? '🎉 You Passed! Welcome to the team!' : '📚 Keep studying — you need 8/10 to pass!'}</div>
    <div style="font-size:1.2rem">${pass ? '☕ ArrayList Master!' : `You scored ${pct}% — need 80%. Review and try again!`}</div>
    <div class="boss-retry-btn">
      ${pass ? '' : '<button class="btn btn-primary" id="boss-retry">🔄 Retry Boss Level</button>'}
    </div>
  `;
  ws.appendChild(resultDiv);

  // Store result for check
  const iState = state.levelInteractState;
  iState.bossScore = score;
  iState.bossPassed = pass;

  if (!pass) {
    document.getElementById('boss-retry').onclick = () => {
      iState.bossScore = undefined;
      renderBossQuiz(ws, data);
    };
  } else {
    SFX.level();
    Confetti.burst();
  }
}

/* ================================================================
   PART 20 — CHECK ANSWER DISPATCHER
   ================================================================ */

function checkAnswer(lvl) {
  SFX.click();
  const iState = state.levelInteractState;
  let result;

  switch(lvl.taskType) {
    case 'multi-select':    result = checkMultiSelect(lvl); break;
    case 'click-place':     result = checkClickPlace(lvl); break;
    case 'list-interact':   result = checkListInteract(lvl); break;
    case 'fill-blank':      result = checkFillBlank(lvl); break;
    case 'scenario-choice': result = checkScenarioChoice(lvl); break;
    case 'search-demo':     result = checkSearchDemo(lvl); break;
    case 'code-fix':        result = checkCodeFix(lvl); break;
    case 'boss-quiz':
      const bossState = iState;
      if (bossState.bossPassed === undefined) { return; } // boss handles internally
      result = { isRight: bossState.bossPassed, explainHtml: bossState.bossPassed ? 'Passed the Boss Level! 🏆' : 'Did not reach 80%. Keep trying!' };
      break;
    default: result = { isRight: false, explainHtml: '' };
  }

  if (result.partialPass) {
    showFeedback({ isRight: false, partialPass: true, explainHtml: result.explainHtml }, lvl);
    return;
  }

  // Increment attempt counter
  if (lvl.taskType !== 'boss-quiz') {
    state.levelAttempts[lvl.id] = (state.levelAttempts[lvl.id]||0) + 1;
    updateStarTracker();
  }

  // Log attempt
  state.attemptLog.push({
    ts: new Date().toISOString(),
    level: lvl.id,
    result: result.isRight ? 'pass' : 'fail',
    attempt: state.levelAttempts[lvl.id]
  });

  if (result.isRight) {
    const stars = calcStars(lvl.id);
    state.levelStars[lvl.id] = Math.max(stars, state.levelStars[lvl.id]||0);
    state.levelCompleted[lvl.id] = true;
    const nextId = lvl.id + 1;
    if (nextId <= LEVELS.length && !state.unlockedLevels.includes(nextId)) {
      state.unlockedLevels.push(nextId);
    }
    state.xp += lvl.xp * (stars/3);
    state.xp = Math.round(state.xp);
    saveState();
    SFX.level();
    Confetti.burst();
    updateHeaderStars(stars);

    document.getElementById('coach-level-avatar').innerHTML = coachByteHTML(72,'excited');
    document.getElementById('coach-msg').innerHTML = `🎉 Amazing work, ${state.playerName}! You earned ${stars} ⭐!`;
  } else {
    SFX.wrong();
    document.getElementById('coach-level-avatar').innerHTML = coachByteHTML(72,'sad');
    document.getElementById('coach-msg').innerHTML = `Almost! Try again — review the lesson for a hint! 💪`;
  }

  showFeedback(result, lvl);
  saveState();
}

function calcStars(lvlId) {
  const hints = state.levelInteractState.hintsUsed || 0;
  const attempts = state.levelAttempts[lvlId] || 1;
  if (hints > 0)    return 1;
  if (attempts > 1) return 2;
  return 3;
}

/* ================================================================
   PART 21 — FEEDBACK PANEL
   ================================================================ */

function showFeedback(result, lvl) {
  const fp = document.getElementById('feedback-panel');
  const status = document.getElementById('feedback-status');
  const msg = document.getElementById('feedback-msg');
  const nextBtn = document.getElementById('btn-next-level');
  const retryBtn = document.getElementById('btn-retry');

  fp.classList.remove('hidden');

  if (result.partialPass) {
    status.className = 'feedback-status correct';
    status.innerHTML = '✅ Partial Pass — Next Task Loading...';
    msg.innerHTML = result.explainHtml;
    nextBtn.classList.add('hidden');
    retryBtn.classList.add('hidden');
    return;
  }

  const skipBtn = document.getElementById('btn-skip-level');

  if (result.isRight) {
    const stars = calcStars(lvl.id);
    status.className = 'feedback-status correct';
    status.innerHTML = `✅ Correct! ${'⭐'.repeat(stars)} +${Math.round(lvl.xp*(stars/3))} XP`;
    msg.innerHTML = result.explainHtml;
    nextBtn.classList.remove('hidden');
    retryBtn.classList.add('hidden');
    if (skipBtn) skipBtn.classList.add('hidden');
    if (lvl.id >= LEVELS.length) {
      nextBtn.textContent = '🏆 View Certificate!';
      nextBtn.onclick = () => showCertificate();
    } else {
      nextBtn.textContent = `Next: Level ${lvl.id+1} →`;
      nextBtn.onclick = () => advanceToNextLevel(lvl.id);
    }
  } else {
    status.className = 'feedback-status wrong';
    const attempts = state.levelAttempts[lvl.id] || 1;
    status.innerHTML = `❌ Not quite — Attempt ${attempts}`;
    msg.innerHTML = result.explainHtml || 'Review the lesson and try again!';
    retryBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    // Show skip button after first failed attempt (not on last level)
    if (skipBtn && lvl.id < LEVELS.length) {
      skipBtn.classList.remove('hidden');
      skipBtn.onclick = () => skipLevel(lvl);
    }
  }

  fp.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showExplanation(lvl) {
  document.getElementById('feedback-code').classList.remove('hidden');
  document.getElementById('feedback-code').innerHTML = `<div class="code-label">Level ${lvl.id} Reference:</div>${lvl.lesson.replace(/<h3>/g,'<p><strong>').replace(/<\/h3>/g,'</strong></p>')}`;
}

function advanceToNextLevel(currentId) {
  SFX.click();
  const nextId = currentId + 1;
  if (nextId <= LEVELS.length) {
    playLevel(nextId);
  } else {
    showCertificate();
  }
}

/* ── Skip Level: unlock next but award max 1 star ─────────────── */
function skipLevel(lvl) {
  SFX.click();
  // Award 0 stars for skipping — level is marked complete but unlocks next
  const prevStars = state.levelStars[lvl.id] || 0;
  // Deduct 1 star from current level total (min 0)
  const awarded = Math.max(0, prevStars - 1);
  state.levelStars[lvl.id] = awarded;
  state.levelCompleted[lvl.id] = true;

  // Unlock next level
  const nextId = lvl.id + 1;
  if (nextId <= LEVELS.length && !state.unlockedLevels.includes(nextId)) {
    state.unlockedLevels.push(nextId);
  }

  // Log the skip
  state.attemptLog.push({
    ts: new Date().toISOString(),
    level: lvl.id,
    result: 'skipped',
    attempt: state.levelAttempts[lvl.id] || 0
  });

  saveState();

  // Show confirmation in feedback
  const fp = document.getElementById('feedback-panel');
  const status = document.getElementById('feedback-status');
  const msg = document.getElementById('feedback-msg');
  const nextBtn = document.getElementById('btn-next-level');
  const retryBtn = document.getElementById('btn-retry');
  const skipBtn = document.getElementById('btn-skip-level');

  status.className = 'feedback-status wrong';
  status.innerHTML = `⏭️ Level Skipped — 1 ⭐ deducted`;
  msg.innerHTML = `<p>You chose to skip <strong>Level ${lvl.id}: ${lvl.title}</strong>.<br>
  A star has been deducted from this level's score. You can always come back and try it again from the Level Map! 💪</p>
  <p style="color:#6B7280;font-size:0.875rem">Tip: Completing levels without skipping earns up to 3 ⭐ and more XP.</p>`;

  retryBtn.classList.remove('hidden');
  if (skipBtn) skipBtn.classList.add('hidden');

  if (nextId <= LEVELS.length) {
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = `▶ Continue to Level ${nextId} →`;
    nextBtn.onclick = () => advanceToNextLevel(lvl.id);
  } else {
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = '🏆 View Certificate!';
    nextBtn.onclick = () => showCertificate();
  }

  document.getElementById('coach-level-avatar').innerHTML = coachByteHTML(72, 'thinking');
  document.getElementById('coach-msg').innerHTML =
    `No worries, ${state.playerName}! You can revisit Level ${lvl.id} any time from the map. Keep going! ☕`;

  fp.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ================================================================
   PART 22 — HINT SYSTEM
   ================================================================ */

function showHintModal(lvl) {
  SFX.click();
  const iState = state.levelInteractState;
  const hintsUsed = iState.hintsUsed || 0;
  const hintIdx = Math.min(hintsUsed, lvl.hints.length - 1);
  document.getElementById('hint-preview').innerHTML = `<strong>Hint ${hintIdx+1}:</strong> ${lvl.hints[hintIdx]}`;
  openOverlay('overlay-hint');

  document.getElementById('btn-confirm-hint').onclick = () => {
    iState.hintsUsed = (iState.hintsUsed || 0) + 1;
    updateStarTracker();
    closeOverlay('overlay-hint');
    SFX.click();
    document.getElementById('coach-msg').innerHTML = `💡 Hint: ${lvl.hints[hintIdx]}`;
    document.getElementById('coach-level-avatar').innerHTML = coachByteHTML(72,'thinking');
  };
}

/* ================================================================
   PART 23 — CERTIFICATE
   ================================================================ */

function showCertificate() {
  document.getElementById('cert-student-name').textContent = state.playerName || 'Student';
  document.getElementById('cert-xp-display').textContent = `XP: ${state.xp}`;

  const totalStars = getTotalStars();
  const maxStars = getMaxStars();
  document.getElementById('cert-star-display').textContent = '⭐'.repeat(totalStars) + '☆'.repeat(maxStars-totalStars);

  const d = new Date();
  document.getElementById('cert-date').textContent = d.toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'});

  document.getElementById('btn-cert-back').onclick = () => { showScreen('screen-map'); renderMap(); };
  SFX.level();
  Confetti.burst();
  showScreen('screen-certificate');
}

/* ================================================================
   PART 24 — OVERLAYS
   ================================================================ */

function openOverlay(id)  { document.getElementById(id).classList.remove('hidden'); }
function closeOverlay(id) { document.getElementById(id).classList.add('hidden'); }

function initOverlays() {
  // Settings close
  document.getElementById('btn-close-settings').onclick = () => closeOverlay('overlay-settings');
  document.getElementById('btn-close-hint').onclick     = () => closeOverlay('overlay-hint');
  document.getElementById('btn-cancel-hint').onclick    = () => closeOverlay('overlay-hint');
  document.getElementById('btn-close-teacher').onclick  = () => closeOverlay('overlay-teacher');
  document.getElementById('btn-close-howto').onclick    = () => closeOverlay('overlay-howto');

  // Close on backdrop
  document.querySelectorAll('.overlay').forEach(ov=>{
    ov.onclick = e => { if(e.target===ov) closeOverlay(ov.id); };
  });

  // Settings toggles
  const settingMap = [
    ['snd-sfx',     'sound'],
    ['snd-bgm',     'music'],
    ['set-reduced', 'reducedMotion'],
    ['set-dark',    'darkMode'],
    ['set-large',   'largeText']
  ];
  settingMap.forEach(([elId, key]) => {
    const el = document.getElementById(elId);
    if (!el) return;
    el.checked = state.settings[key];
    el.onchange = () => {
      state.settings[key] = el.checked;
      applySettings();
      saveState();
    };
  });

  // Map settings buttons
  document.getElementById('btn-map-settings').onclick = () => openOverlay('overlay-settings');
  document.getElementById('btn-view-cert').onclick = () => showCertificate();
}

function applySettings() {
  document.body.classList.toggle('dark-mode',       state.settings.darkMode);
  document.body.classList.toggle('reduced-motion',  state.settings.reducedMotion);
  document.body.classList.toggle('large-text',      state.settings.largeText);
  SFX.toggleBGM(state.settings.music);
  // Sync checkboxes
  const ids = ['snd-sfx','snd-bgm','set-reduced','set-dark','set-large'];
  const keys= ['sound','music','reducedMotion','darkMode','largeText'];
  ids.forEach((id,i)=>{ const el=document.getElementById(id); if(el) el.checked=state.settings[keys[i]]; });
}

/* ================================================================
   PART 25 — LESSON PANEL TOGGLE
   ================================================================ */

function initLessonToggle() {
  const toggle = document.getElementById('lesson-toggle');
  const body   = document.getElementById('lesson-body');
  if (!toggle || !body) return;
  toggle.onclick = () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    body.classList.toggle('collapsed', expanded);
    toggle.querySelector('.toggle-arrow').style.transform = expanded ? 'rotate(-90deg)' : '';
  };
  toggle.onkeydown = e => { if(e.key==='Enter'||e.key===' ') { e.preventDefault(); toggle.click(); } };
}

/* ================================================================
   PART 26 — TEACHER MODE
   ================================================================ */

let keyBuffer = '';
let keyTimer  = null;

function initTeacherMode() {
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    keyBuffer += e.key.toUpperCase();
    if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);

    const indicator = document.getElementById('key-buffer-display');
    indicator.textContent = keyBuffer;
    indicator.classList.add('visible');

    clearTimeout(keyTimer);
    keyTimer = setTimeout(() => {
      keyBuffer = '';
      indicator.classList.remove('visible');
    }, 2000);

    if (keyBuffer.includes('TEACHER')) {
      keyBuffer = '';
      indicator.classList.remove('visible');
      openTeacherMode();
    }
  });

  document.getElementById('btn-reset-all').onclick = () => {
    if (confirm('Reset ALL progress? This cannot be undone.')) {
      resetState();
      closeOverlay('overlay-teacher');
      showScreen('screen-splash');
      initSplash();
      alert('Progress reset! Start fresh.');
    }
  };

  document.getElementById('btn-export').onclick = exportProgress;

  document.querySelectorAll('.tab-btn[data-tab]').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const tab = document.getElementById(btn.dataset.tab);
      if (tab) tab.classList.add('active');
    };
  });
}

function openTeacherMode() {
  // Build overview
  const ov = document.getElementById('teacher-overview');
  let html = `<p><strong>Player:</strong> ${state.playerName || 'N/A'} &nbsp;|&nbsp; <strong>XP:</strong> ${state.xp}</p>
  <p><strong>Completed:</strong> ${getCompletedCount()} / ${LEVELS.length} &nbsp;|&nbsp; <strong>Total Stars:</strong> ${getTotalStars()} / ${getMaxStars()}</p><hr>`;
  html += LEVELS.map(l=>`
    <div class="teacher-level-row">
      <span>Lv.${l.id}: ${l.title}</span>
      <span>${state.levelCompleted[l.id]?'✅':'⬜'} ${state.levelStars[l.id]||0}⭐ | Attempts: ${state.levelAttempts[l.id]||0}</span>
    </div>
  `).join('');
  ov.innerHTML = html;

  // Build log
  const log = document.getElementById('teacher-log');
  if (state.attemptLog.length === 0) {
    log.innerHTML = '<p class="text-muted">No attempts logged yet.</p>';
  } else {
    log.innerHTML = state.attemptLog.slice().reverse().map(e=>
      `<div class="log-entry">[${e.ts.replace('T',' ').slice(0,19)}] Lv.${e.level} → ${e.result} (attempt ${e.attempt})</div>`
    ).join('');
  }

  openOverlay('overlay-teacher');
}

function exportProgress() {
  const data = JSON.stringify(state, null, 2);
  document.getElementById('export-json-preview').textContent = data;

  const blob = new Blob([data], {type:'application/json'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `codecafe_progress_${state.playerName||'student'}.json`;
  a.click(); URL.revokeObjectURL(url);
}

/* ================================================================
   PART 27 — UTILITY FUNCTIONS
   ================================================================ */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function syntaxColor(code) {
  return code
    .replace(/\b(ArrayList|String|Integer|int|boolean|void|new|for|if|return|true|false|null)\b/g, (m) => {
      const types = ['ArrayList','String','Integer'];
      const kws   = ['int','boolean','void','new','for','if','return','true','false','null'];
      if (types.includes(m))  return `<span class="typ">${m}</span>`;
      return `<span class="kw">${m}</span>`;
    })
    .replace(/"([^"]*)"/g, `<span class="str">"$1"</span>`)
    .replace(/\b(\d+)\b/g, `<span class="num">$1</span>`)
    .replace(/\/\/.*/g, m=>`<span class="cmt">${m}</span>`)
    .replace(/\.(add|get|set|remove|size|indexOf|contains|equals|println)\b/g, m=>`.<span class="mth">${m.slice(1)}</span>`);
}

/* ================================================================
   PART 28 — INIT
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applySettings();
  Confetti.init();

  initSplash();
  initNameScreen();
  initOverlays();
  initTeacherMode();
  initLessonToggle();

  // Map settings & teacher buttons
  document.getElementById('btn-map-settings').onclick = () => openOverlay('overlay-settings');

  // Check if returning player
  if (state.playerName) {
    document.getElementById('btn-continue').classList.remove('hidden');
  }

  // Re-bind lesson toggle when level screen is re-rendered
  document.getElementById('screen-level').addEventListener('click', () => {
    if (!document.getElementById('lesson-toggle').__bound) {
      initLessonToggle();
      document.getElementById('lesson-toggle').__bound = true;
    }
  });

  console.log('%c☕ Code Café: ArrayList Adventures', 'color:#D97706;font-size:20px;font-weight:bold');
  console.log('%cAP CSA Game loaded. Type TEACHER anywhere to enable Teacher Mode.', 'color:#6B4226');
});


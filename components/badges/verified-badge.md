# Verified Blue Badge Documentation

A curated collection of official-style verified blue tick marks, creator badges, pulse animations, and multi-platform styling (Twitter/X, Meta, Gold Organization, Neon).

---

### ১. ব্লু টিক মার্ক বা ভেরিফাইড ব্যাজ (Official Blue Tick Mark)
আইকন হিসেবে ফন্ট অসামের (Font Awesome) বৃত্তাকার চেক মার্ক আইকনটি ব্যবহার করা হয়েছে এবং সেটিকে টুইটার/এক্স (Twitter/X)-এর অফিশিয়াল ব্লু কালার কোড দিয়ে ডিজাইন করা হয়েছে।

* **কালার কোড (Official Color):** `#1D9BF0` (টুইটার/এক্স ভেরিফাইড ব্লু)
* **ফন্ট অসাম ক্লাস:** `fas fa-circle-check`

#### ব্যবহৃত কোড স্নীপেট (React / JSX):
```jsx
<span style={{ color: '#1D9BF0' }} title="Verified Creator">
  <i className="fas fa-circle-check"></i>
</span>
```

#### স্ট্যান্ডার্ড এইচটিএমএল (HTML & CSS):
```html
<span class="badge-verified-blue" title="Verified Creator">
  <i class="fas fa-circle-check"></i>
</span>
```

---

### ২. অ্যানিমেটেড পালস ভেরিফাইড ব্যাজ (Animated Pulse Badge)
লিডারবোর্ড বা বিশেষ প্রোফাইল পেজে ব্যাজটিকে আরও আকর্ষণীয় ও জীবন্ত করতে `animate-pulse` বা সিএসএস পালস গ্লো ইফেক্ট যুক্ত করা হয়:

```jsx
<span style={{ color: '#1D9BF0' }} title="Top Verified Creator">
  <i className="fas fa-circle-check animate-pulse"></i>
</span>
```

#### পিউর সিএসএস পালস অ্যানিমেশন (Pure CSS):
```css
.badge-pulse {
  animation: badgePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  display: inline-flex;
}

@keyframes badgePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.15); filter: drop-shadow(0 0 6px rgba(29, 155, 240, 0.6)); }
}
```

---

### ৩. অন্যান্য ভেরিফাইড ভ্যারিয়েন্ট (Popular Variants)

| ভ্যারিয়েন্ট নাম | কালার কোড | বিবরণ |
| :--- | :--- | :--- |
| **Twitter/X Blue** | `#1D9BF0` | স্ট্যান্ডার্ড অফিশিয়াল ভেরিফাইড অ্যাকাউন্ট |
| **Gold / Organization** | `#E7A43B` | অফিশিয়াল বিজনেস ও অর্গানাইজেশন ব্যাজ |
| **Meta / Instagram Gradient**| `linear-gradient(#833AB4, #FD1D1D, #FCB045)` | ইনস্টাগ্রাম ক্রিয়েটর ভাইব |
| **Cyberpunk Neon Cyan** | `#00FFCC` | হাই-টেক ডার্ক মোড নিয়ন গ্লো |

---

### ৪. ফন্ট অসাম সিডিএন সেটআপ (Font Awesome CDN)
প্রজেক্টে এই আইকনটি কাজ করানোর জন্য `index.html` ফাইলের `<head>` ট্যাগে ফন্ট অসামের সিডিএন লিংকটি যুক্ত থাকতে হবে:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

---

### ৫. পিউর এসভিজি অপশন (Zero-Dependency SVG Option)
ফন্ট অসাম ছাড়া সরাসরি পিউর এসভিজি হিসেবে ব্যবহার করতে:

```html
<svg class="verified-svg" viewBox="0 0 24 24" width="18" height="18" fill="#1D9BF0">
  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.95-4.95 1.41 1.41-6.36 6.37z"/>
</svg>
```

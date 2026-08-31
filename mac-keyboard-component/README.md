# 🍏 Aceternity UI Apple Magic Keyboard (With Mechanical Audio & Keystroke Animations)

এই ফোল্ডারে থাকা ফাইলগুলো ব্যবহার করে আপনি যেকোনো React / Next.js / Vite প্রজেক্টে হুবহু এই ইন্টারেক্টিভ অ্যাপল ম্যাজিক কিবোর্ডটি সাউন্ড এফেক্টসহ ব্যবহার করতে পারবেন।

---

## 📁 ক্লিন ফাইল স্ট্রাকচার (Clean Structure)

```text
mac-keyboard-component/
├── components/
│   └── ui/
│       └── keyboard.jsx      # ✅ Tested & Perfected JSX component (Zero external icon dependency)
├── lib/
│   └── utils.js              # Standard cn() helper
├── public/
│   └── sounds/
│       ├── config.json       # Sound sprite map defining key audio timestamps
│       └── sound.ogg         # 2.6MB Authentic CherryMX mechanical keystroke sound audio
├── KeyboardDemo.jsx          # Ready-to-use example component
└── README.md                 # সম্পূর্ণ ব্যবহার নির্দেশিকা (This guide)
```

---

## 🚀 নতুন যেকোনো প্রজেক্টে সেটআপ করার সহজ ৩টি ধাপ:

### ধাপ ১: প্রয়োজনীয় প্যাকেজ ইনস্টল করুন
আপনার প্রজেক্টের টার্মিনালে এই কমান্ডটি চালান:
```bash
npm install framer-motion clsx tailwind-merge
```
*(নোট: আমরা সমস্ত আইকনকে স্বয়ংসম্পূর্ণ ভেক্টর SVG হিসেবে ভেতরে যুক্ত করেছি, তাই `@tabler/icons-react` বা কোনো থার্ড-পার্টি আইকন প্যাকেজের প্রয়োজন নেই!)*

---

### ধাপ ২: ফাইলগুলো আপনার প্রজেক্টে কপি করুন

1. **অডিও ফাইল:**
   - `mac-keyboard-component/public/sounds/` ফোল্ডারটিকে আপনার প্রজেক্টের রুট ডিরেক্টরির `public/sounds/`-এ পেস্ট করুন।
   - নিশ্চিত করুন `public/sounds/sound.ogg` এবং `public/sounds/config.json` ফাইল দুটি রয়েছে।

2. **ইউটিলিটি ফাইল:**
   - `mac-keyboard-component/lib/utils.js` ফাইলটিকে আপনার প্রজেক্টের `src/lib/utils.js`-এ পেস্ট করুন।

3. **কিবোর্ড কম্পোনেন্ট:**
   - `mac-keyboard-component/components/ui/keyboard.jsx` ফাইলটিকে আপনার প্রজেক্টের `src/components/ui/keyboard.jsx`-এ পেস্ট করুন।

---

### ধাপ ৩: কোডে ব্যবহার করুন

যেকোনো পেজ বা কম্পোনেন্টে এভাবে ইম্পোর্ট করে ব্যবহার করুন:

```jsx
import { Keyboard } from "@/components/ui/keyboard";

export default function MyPage() {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center p-8 bg-slate-950">
      {/* 
        Props:
        - enableSound={true}: মাউস ক্লিক বা কিবোর্ডে টাইপ করলে মেকানিক্যাল সাউন্ড হবে।
        - showPreview={true}: কিবোর্ডের উপরে টাইপ করা কী-টি সুন্দর নিয়ন গ্লো সহ দেখাবে।
      */}
      <Keyboard enableSound={true} showPreview={false} />
    </div>
  );
}
```

---

## ✨ এই ভার্সনের বিশেষ সুবিধাসমূহ:
- 🔊 **বাস্তব CherryMX মেকানিক্যাল সাউন্ড:** পিসির আসল কিবোর্ডে টাইপ করলে অথবা মাউস দিয়ে স্ক্রিনের কিবোর্ডে ক্লিক করলে সাথে সাথে খটখট সাউন্ড হবে।
- 🖱️ **ন্যাচারাল মাউস ডিপ্রেশন:** মাউস ক্লিকে বাটনটি ১.৫ পিক্সেল ভেতরে দেবে গিয়ে বাস্তব কিবোর্ডের মতো ফিডব্যাক দেয়।
- ⚪ **সলিড প্রিমিয়াম অ্যালুমিনিয়াম ফিনিশ:** পেছনের কোনো ব্যাকগ্রাউন্ড কালার কিবোর্ডের ভেতর দিয়ে রিফ্লেক্ট বা ব্লিড করবে না।
- 🌐 **জিরো ডিপেন্ডেন্সি এরর:** কোনো প্রকার মডিউল রেজল্যুশন বা এক্সপোর্ট এরর ছাড়াই সরাসরি বিল্ড ও রান হবে।

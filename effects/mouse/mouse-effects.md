# Mouse Interactive Effects Documentation

A curated collection of canvas-based particle physics and trail effects triggered by mouse interaction, tuned with compact, tight cursor radius and smooth particle dynamics.

---

### ১. গ্যালাক্সি ভর্টেক্স ইফেক্ট (Galaxy Vortex Effect)
এই ইফেক্টটিতে মাউসের চারপাশে কণাগুলো চক্রাকারে ঘোরে এবং স্পাইরাল (Vortex) আকার ধারণ করে। কার্সরের খুব কাছাকাছি টাইট এলাকায় ঘূর্ণন সীমাবদ্ধ রাখা হয়েছে।
* **ফাংশন নাম:** `initGalaxy`
* **মাউস মুভমেন্ট লজিক:** মাউসের পজিশনে কণাগুলো স্পন হয়। প্রতিটি কণার জন্য কোণ (`angle`) এবং ব্যাসার্ধ (`radius`) বৃদ্ধি করে ঘূর্ণন তৈরি করা হয়:
  ```javascript
  this.angle += this.spinSpeed;
  this.radius += this.radiusExpansion; // 0.15 to 0.50 (Compact Spread)
  this.x = this.startX + Math.cos(this.angle) * this.radius;
  this.y = this.startY + Math.sin(this.angle) * this.radius;
  ```
* **কালার প্যালেট (Colors):**
  * বেগুনী (Indigo): `rgba(99, 102, 241, alpha)`
  * বেগুনি-গোলাপী (Purple): `rgba(168, 85, 247, alpha)`
  * সায়ান (Cyan): `rgba(34, 211, 238, alpha)`
  * সবুজ (Green): `rgba(8, 203, 0, alpha)`
  * পিঙ্ক (Pink): `rgba(255, 121, 198, alpha)`
* **সাইজ (Size):** শুরুর সাইজ ০.৬ থেকে ২.১ পিক্সেল। প্রতি ফ্রেমে এটি ০.০১২ পিক্সেল করে সংকুচিত হয়।
* **কণা উৎপাদনের হার:** মাউস মুভমেন্টে প্রতি ফ্রেমে ২টি করে কণা তৈরি হয় এবং সর্বোচ্চ ১০০টি কণা ক্যানভাসে সক্রিয় থাকতে পারে।

---

### ২. ফুলঝুরি বা স্পার্কলার ইফেক্ট (Sparkler Physics Effect)
এই ইফেক্টটিতে মাউস কার্সর থেকে কণাগুলো স্পার্কের মতো বের হয়ে মৃদু গতিতে অভিকর্ষ বা গ্র্যাভিটির টানে নিচের দিকে ঝরে পড়ে।
* **ফাংশন নাম:** `initSparkler`
* **মাউস মুভমেন্ট লজিক:** কণাগুলো কার্সরের কাছাকাছি মৃদু গতিতে ছড়িয়ে পড়ে এবং গ্র্যাভিটি ওয়াই-অক্ষের গতি বৃদ্ধি করে নিচের দিকে টানে:
  ```javascript
  this.speedY += this.gravity; // gravity = 0.035
  this.x += this.speedX;       // initial speed = 0.4 to 2.2
  this.y += this.speedY;
  ```
* **কালার প্যালেট (Colors):**
  * সোনালী (Amber): `rgba(251, 191, 36, alpha)`
  * কমলা (Orange): `rgba(251, 146, 60, alpha)`
  * লাল (Rose): `rgba(244, 63, 94, alpha)`
  * বেগুনি (Purple): `rgba(168, 85, 247, alpha)`
  * সায়ান (Cyan): `rgba(34, 211, 238, alpha)`
* **সাইজ (Size):** শুরুর সাইজ ০.৬ থেকে ২.৪ পিক্সেল। প্রতি ফ্রেমে এটি ০.০২ পিক্সেল করে ছোট হতে থাকে।
* **কণা উৎপাদনের হার:** মাউস মুভমেন্টে প্রতি ফ্রেমে ২টি করে কণা তৈরি হয় এবং সর্বোচ্চ ৮০টি কণা ক্যানভাসে সক্রিয় থাকতে পারে।

---

### ৩. কন্সটেলেশন লিংক ইফেক্ট (Constellation Links Effect)
এই ইফেক্টটিতে মাউস কার্সর থেকে ডট তৈরি হয়ে ধীরে ধীরে চারপাশে থাকে এবং নির্দিষ্ট ছোট দূরত্বের মধ্যে থাকলে তাদের মধ্যে সংযোগ লাইন তৈরি হয়।
* **ফাংশন নাম:** `initConstellation`
* **মাউস মুভমেন্ট লজিক:** মাউস পজিশন থেকে কণাগুলো মৃদু গতিতে ছড়ায়। দুটি বিন্দুর মধ্যবর্তী দূরত্ব ৪৫ পিক্সেলের কম হলে তাদের মধ্যে একটি সূক্ষ্ম লাইনে সংযোগ স্থাপন করা হয়:
  ```javascript
  const maxDistance = 45; // Tight proximity threshold
  if (dist < maxDistance) {
    const avgAlpha = (particles[i].alpha + particles[j].alpha) / 2;
    const lineAlpha = (1 - dist / maxDistance) * avgAlpha * 0.4;
    ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
    ctx.beginPath();
    ctx.moveTo(particles[i].x, particles[i].y);
    ctx.lineTo(particles[j].x, particles[j].y);
    ctx.stroke();
  }
  ```
* **কালার প্যালেট (Colors):**
  * বেগুনী (Indigo): `rgba(99, 102, 241, alpha)`
  * বেগুনি-গোলাপী (Purple): `rgba(168, 85, 247, alpha)`
  * সায়ান (Cyan): `rgba(34, 211, 238, alpha)`
  * সবুজ (Green): `rgba(8, 203, 0, alpha)`
  * পিঙ্ক (Pink): `rgba(255, 121, 198, alpha)`
* **সাইজ (Size):** কণাগুলোর সাইজ ০.৭ থেকে ২.১ পিক্সেল।
* **কণা উৎপাদনের হার:** মাউস মুভমেন্টে প্রতি ফ্রেমে ২টি করে কণা তৈরি হয় এবং সর্বোচ্চ ৬০টি কণা ক্যানভাসে সক্রিয় থাকতে পারে।


---

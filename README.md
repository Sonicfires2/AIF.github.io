# 🌸 Anime Interest Floor (AIF) Website

Welcome to the **Anime Interest Floor** repository. Dive into a community hub for not just anime enthusiasts but also lovers of Gacha, gaming, coding, and beyond. At AIF, we believe in more than just the joy of anime; we're about togetherness, respectfulness, and celebrating diversity.

## 🚀 Installation & Usage

1. Clone this repository.
2. Open `main.html` in your preferred browser.

🔔 **Note:** Ensure you've linked `main.js` correctly to unlock all dynamic functionalities.

🌐 **Live Website:** [AIF Website](https://sonicfires2.github.io/AIF.github.io/main.html).

## 🤝 Contributing

Interested in making a contribution? Wonderful!

1. Fork the repository.
2. Create a new branch.
3. Make your changes and improvements.
4. Submit a pull request.

## 📞 Contact Us

Have questions? Want to chat? Reach out on:

- 📸 Instagram
- 💬 Discord
- 📧 Email: [animeinterestfloor@gmail.com](mailto:animeinterestfloor@gmail.com)

## 🖥️ Website Structure

### 1️⃣ Welcome

- **Navbar**: Swiftly navigate through our sections.
- **Intro Section**:
  - **Title**: Welcoming you to the Anime Interest Floor.
  - **Image**: Our proud AIF logo or an intro image.
  - **Paragraph**: A short & sweet hello from us.

### 2️⃣ Values

- **We Are...**: A peek into our diverse community.
- **Value Titles and Descriptions**:
  - 🤝 **Togetherness**: Celebrating our unity.
  - 💕 **Respectfulness**: Our ethos of mutual respect.
  - 🌍 **Diversity**: Embracing and cherishing every unique member.

### 3️⃣ Activities

- **Photos**: Relive our past events and activities.
- **Symbols and Descriptions**:
  - 🍿 **Anime Buffet**: Dive into anime marathons.
  - 🎮 **Gaming Night**: Gear up for thrilling game nights.
  - 📺 **Anime Showing**: Discover and enjoy curated anime.

### 4️⃣ Leadership

- **Slide Bar**: Visualizing our leadership hierarchy.
- **Roles & Descriptions**:
  - **Titles**: From President to Members, know the roles.
  - 📸 **(Upcoming)**: Get to know our leadership with photos and bios.

### 5️⃣ Why Us?

- 🌟 **Benefits**: Unveiling perks of being a part of AIF.

### 6️⃣ Housing Info

- **Floor Activities**: Experience events exclusive to our space.
- **Housing Process**: Navigate the application process with ease.

### 7️⃣ Contact

- **Links & Info**: All you need to connect with us.

## 🖥️ **JavaScript Functionality Breakdown**

#### 🖼️ **1. Activities JavaScript**
**Overview:** This section handles the behavior of displaying images associated with SVG icons clicked by the user.

- **`currMiddleImage`**: Global variable tracking the displayed middle image.
- **Event listeners for SVG icons**: Switches the main image when a different SVG icon is clicked.
- **`imageToOldPosition()`**: Helper function to revert all the images to their default sources.

#### 📅 **2. Leadership JavaScript**
**Overview:** Manages a dynamic timeline for leadership positions and roles.

- **`DOM`**: Constant holding string references to class names.
- **Event listeners**: Ensure timeline responsiveness.
- **Marker positioning**: Determine the positioning of the active marker.
- **Step and Slide Activation/Deactivation**: Manage active step and slide.

#### 🌐 **3. General Javascript for Website Navigation**
**Overview:** Provides utility and navigation functions for various website elements.

- **`backToInvisible()`**: Hides a visual element after 2 seconds.
- **`Copy()`**: Inform user of email copy action with a visual alert.
- **Scrolling functions**: Smooth navigation to different sections of the page.
- **Card Toggle**: Toggle the active state of a clicked card.

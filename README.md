# User Profile Cards Application

A modern React application that displays user profiles in beautiful, responsive cards with social media integration and interactive elements.

## 📷 Project Preview

![Project Preview](public/react_task3_render_users_card.png)

## 🚀 Features

- **Responsive Design**: Mobile-first approach with responsive grid layout
- **Interactive Cards**: Hover effects and smooth transitions
- **Social Media Integration**: Links to GitHub, LinkedIn, and Instagram
- **User Information**: Displays name, profession, bio, location, and experience
- **Stats Overview**: Shows followers, following, and projects count
- **Verification Badge**: Verified user indicators
- **Experience Tracking**: Years of experience display

## 🛠️ Tech Stack

- **React** (v19.2.0)
- **Tailwind CSS** (v4.1.18)
- **Vite** (with Rolldown)
- **JavaScript**

## 📦 Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

## 🚀 Usage

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the provided URL (usually http://localhost:5173)

3. The application will display a grid of user profile cards

## 📁 Project Structure

```
src/
├── components/
│   └── Card.jsx          # User profile card component
├── data.js              # User data and profiles
├── App.jsx              # Main application component
├── main.jsx             # Entry point
├── index.css            # Global styles
```

## 📊 User Data

The application includes diverse user profiles with the following information:
- Name
- Email
- Profession
- Bio
- Profile and cover images
- Social media links
- Skills
- Experience details
- Location
- Years of experience
- Followers/Following/Projects counts
- Verification status

## 📱 Responsive Design

The application is fully responsive and adapts to different screen sizes:
- **Mobile**: 1 card per row
- **Tablet**: 2 cards per row
- **Desktop**: 3-4 cards per row

## 🔧 Customization

### Adding New Users
To add new users, update the `src/data.js` file with the required user information.

### Modifying Card Appearance
Update the `src/components/Card.jsx` file to modify the card design and layout.

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Modern UI components
- Hover animations
- Smooth transitions
- Responsive utility classes
- Custom gradients and shadows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues

If you encounter any issues or have feature requests, please open an issue in the repository.

## ⭐ Show Your Support

Give a ⭐ if this project helped you or you liked it!
# Simple Flutter Website

This project is a simple website built using Flutter, featuring three screens: **Home**, **Products**, and **Service**. Additionally, it includes an app bar and an **About Us** section to provide information about the website or company.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [How to Run](#how-to-run)
- [Screens](#screens)
  - [1. Home Screen](#1-home-screen)
  - [2. Products Screen](#2-products-screen)
  - [3. Service Screen](#3-service-screen)
- [About Us Section](#about-us-section)
- [Contributing](#contributing)
- [License](#license)

---

## Project Structure

The project structure follows the typical Flutter project layout:

```dart
lib/
├── main.dart
├── screens/
│   ├── home_screen.dart
│   ├── products_screen.dart
│   └── service_screen.dart
└── widgets/
    ├── about_us.dart
    └── app_bar.dart
```
## Files
- `main.dart`: Entry point of the Flutter web application.
- `screens/`: Directory that holds the individual screen files.
- `widgets/`: Reusable components such as the AppBar and About Us section.

## Features
- **Three Main Screens**: Home, Products, and Service, accessible via navigation.
- **App Bar**: A top navigation bar that allows users to switch between screens easily.
- **About Us Section**: Provides information about the company or website in a separate widget.

## Setup and Installation

### Prerequisites
- Flutter SDK installed on your system.
- [Install Flutter](https://flutter.dev/docs/get-started/install) if you haven't already.

### Steps

#### Clone this repository:

```bash
git clone https://github.com/nms-glass-aluminium/nms-glass.git
```
## Screens

### 1. Home Screen
The Home screen is the default screen that welcomes users to the website. It contains a brief introduction and general information.

### 2. Products Screen
The Products screen showcases the products or services offered by the company. It may include images, descriptions, and prices.

### 3. Service Screen
The Service screen provides details about the services offered by the company. This could include service descriptions, pricing, and other relevant information.

## About Us Section
The About Us section is a separate widget that gives a brief description of the company or website. It is accessible via the app bar, allowing users to easily navigate to it from any screen.

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you'd like to change.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

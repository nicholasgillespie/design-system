## Overview

This project is a comprehensive **Design System** that provides a cohesive set of design and code standards. It includes tokens for key attributes such as color, typography, and spacing, among others. These tokens are instrumental in constructing user interfaces that are both consistent and scalable.

The design system is built with Node.js and Express, and uses EJS as a templating engine. It also utilizes SCSS for more advanced CSS preprocessing, and follows the CUBE CSS methodology for structuring CSS.

The system provides:

- **Colors**: Adaptable, consistent color schemes with a guide on palette, light and dark themes.
- **Typography**: Dynamic font sizes and font families for adaptable, consistent text display.
- **Spacing**: Dynamic, fluid spacing sizes derived from font sizes for consistent layout.
- **Compositions**: Flexible, reusable layouts with versatile compositions.
- **Utilities**: Quick, inline style adjustments with utility classes, minimizing extra CSS.

The system's commitment to simplicity and pragmatism is demonstrated through the use of SCSS and design tokens to manage key aspects of the design language, the creation of utility classes, and the crafting of helper functions.

You can find the Design System project repository on [GitHub](https://github.com/nicholasgillespie/ng-design-system.git).

## Getting Started

### Prerequisites

- Node.js (20.10.0+ or `dotenv` for older versions)
- npm

### Installation

### Clone the repo

```bash
git clone https://github.com/nicholasgillespie/ng-design-system.git
```

### Change directory into the folder created

```bash
cd ng-design-system
```

### Install dependencies

```bash
npm install
```

### Environment Variables

The server uses environment variables for configuration. These are stored in a `config.env` file at the root of the project. You will need to create this file and define the following variables:

```bash
SITE_PROTO=http
SITE_HOST=localhost
SITE_PORT=8000
```

### Start a local server to preview the site

```bash
npm run start
```

The server will start and listen on the port specified in your environment variables (SITE_PORT). It will log a message to the console indicating the URL at which the application is running.

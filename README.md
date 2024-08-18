# Carefinder

Carefinder is a simple and efficient tool designed to help users find, export, and share hospital information within Nigeria. Access to healthcare in Nigeria can be challenging, and Carefinder aims to ease this process by providing users with a platform to locate hospitals, access their contact details, and share this information seamlessly.

## Table of Contents

- [Carefinder](#carefinder)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Hospital Search](#hospital-search)
    - [Export Hospitals](#export-hospitals)
    - [Share Hospitals](#share-hospitals)
    - [User Authentication](#user-authentication)
    - [Markdown Support](#markdown-support)
  - [Technology Stack](#technology-stack)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Best Practices](#best-practices)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)

## Features

### Hospital Search

- **Description**: Users can search for hospitals within their region by inputting their location or selecting from a list of nearby cities.
- **Details Provided**: The platform lists hospitals along with their contact details, including address, phone number, and email.

### Export Hospitals

- **Description**: Users can export the list of hospitals to a CSV file, making it easy to save and share the information.

### Share Hospitals

- **Description**: Users can share the list of hospitals via email or by generating a shareable link.
- **Implementation**: This feature leverages superbase's built-in email and link-sharing functionalities.

### User Authentication

- **Description**: Admin users must create an account to access the platform's admin features.
- **Implementation**: Clerk's built-in authentication feature, supporting multiple authentication methods, including email/password and social media logins.

### Markdown Support

- **Description**: Admin users can write content (create hospital entries and corresponding details) using Markdown. This feature simplifies content formatting, link insertion, and image embedding.
- **Editor**: The platform provides a simple text editor that supports Markdown syntax.

## Technology Stack

- **Frontend**: Next.js, Shadcn, Tailwind CSS
- **Backend**: Superbase, Prisma
- **Authentication**: Clerk
<!-- - **File Storage and Sharing**: Firebase -->
- **Database**: Supabase, Prisma
- **Language**: TypeScript
- **Testing**: jest

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OLADAPO-AI/temp-alt-capstone.git
   cd carefinder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add your Firebase, Clerk, and Supabase credentials:

   ```plaintext
   NEXT_PUBLIC_SUPERBASE_API_KEY=your-api-key
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_KEY=your-supabase-key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

- **Search Hospitals**: Navigate to the search page, enter your location or choose from the list of cities, and view the list of hospitals.
- **Export List**: Click on the "Export" button to download the list of hospitals as a CSV file.
- **Share List**: Use the Social media button to generate a shareable link on the modal.
- **Admin Features**: Log in as an admin to access hospital entry creation and Markdown content editing.

## Best Practices

- **Scalable Codebase**: Follow proper linting and formatting with Prettier and ESLint.
- **TypeScript**: Ensure type safety by using TypeScript with either Vue.js or React.
- **Backend Choice**: Use Superbase, Prisma and Clerk backend to store user data and handle authentication.
- **Form Validation**: Implement thorough form validation across the platform.
- **Testing**: Include at least 2 unit tests and 3 component tests in the codebase.

## Testing

- **Unit Tests**: Located in the `tests/unit` folder.
- **Component Tests**: Located in the `tests/components` folder.

Run tests with:

```bash
npm run test
```

## Contributing

We welcome contributions! Please read our Contributing Guide for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

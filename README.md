

## Project Summary:

The project, named User Dashboard, demonstrates proficiency in Angular 9+ by building a user-friendly application
that showcases a list of users with pagination. It leverages Angular CLI for project setup and Angular Material
for UI components, emphasizing proper styling, animations, and caching for optimized performance. The application
fetches user data from a specified HTTP endpoint and allows for instant search functionality by user ID.
Detailed user information is accessible by clicking on a user card, enhancing user engagement through interactive elements.
A key focus of the project is on delivering a smooth user experience, demonstrated by features like a loading indicator
and a cache mechanism to minimize redundant network requests.

## Features:

- Pagination: Displays users in a paginated list, fetching data dynamically.
- Instant Search: Allows searching for users by ID, with immediate display of results.
- User Detail View: Offers a detailed view of user information upon clicking a user card.
- Caching: Implements caching to prevent redundant network calls for previously fetched data.
- Loading Indicator: Includes a loading spinner to signify ongoing network requests.
- Angular Material: Utilizes Angular Material for elegant UI components.

## Prerequisites:

- Node.js (LTS version)
- Angular CLI (version 9 or higher)

## Setup:

-  ### Install Angular CLI
   ```
   npm install -g @angular/cli
   ```
-  ### Clone the Repository
  ```
   git clone https://github.com/LaithAlebrahim/user-dashboard.git
   cd user-dashboard
  ```
-  ### Install Dependencies
  ```
  npm install
  ```
-  ### Run the Application
  ```
  npm run start
  ```
   Open your browser and navigate to `http://localhost:4200/` to view the application.

## Implementation Details:

- Angular CLI: Utilized for project scaffolding.
- Angular Material: Adopted for designing the UI components.
- Routing & Navigation: Configured for navigating between the user-list and user-details.
- Search Functionality: Implemented an instant search feature to filter users by ID.
- Caching Mechanism: Applied to cache users data and reduce network calls.
- UI Feedback: Incorporated a loading indicator to enhance the user experience during data retrieval.

## Code Structure:

- `src/app/components/`: Contains Angular components (e.g., users-list, user-details).
- `src/app/shared/services/`: Houses services for HTTP requests and caching logic.
- `src/app/shared/models/`: Defines models/interfaces to type-check the user data.
- `src/app/app-routing.module.ts`: Manages routing for the application.
- `src/environments` :  Includes environment files for managing API base URLs.


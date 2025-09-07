# Petrol Pump Dispensing Log Application

## Overview

This full-stack web application allows authenticated users to log fuel dispensing details at a petrol pump. Users can add new dispensing records and view a filterable list of all past records. The application ensures secure access using JWT token-based authentication and supports uploading payment proofs for each transaction.

---

## Features

### 1. Login Page
- Simple login form with **Username** and **Password** fields.
- Uses **JWT token-based authentication** to protect other pages.
- Redirects to the **Dispensing Records** page upon successful login.
- Displays an error message on failed login attempts.

### 2. Entry Page (Add Dispensing Record)
- Accessible only to authenticated users.
- Form fields:
  - **Dispenser No:** Dropdown with predefined options (D-01, D-02, D-03, D-04).
  - **Quantity Filled:** Numeric input (in liters).
  - **Vehicle Number:** Text input for vehicle registration.
  - **Payment Mode:** Options: Cash, Credit Card, UPI.
  - **Payment Proof:** File upload (.jpg, .png, .pdf).
- Upon submission:
  - Record is saved to the database.
  - File is stored on the server.
  - Redirects to the **Listing Page**.

### 3. Listing Page (Dispensing Records)
- Accessible only to authenticated users.
- Displays all records in a table with:
  - Dispenser No, Quantity, Vehicle Number, Payment Mode, Timestamp.
  - Link/button to view/download uploaded payment proof.
- Filtering capabilities:
  - By **Dispenser No**.
  - By **Payment Mode**.
  - By **Date Range** (start and end dates).
- Updates dynamically based on the filter criteria.

---

## Tech Stack

- **Frontend:** Angular 18
- **Backend:** ASP.NET Core 8 Web API  
- **Database:** SQL Server  
- **ORM:** Entity Framework Core  
- **Runtime:** Node.js 18

---

## Prerequisites

- Node.js 18+  
- Angular CLI  
- .NET 8 SDK  
- SQL Server

---

## Setup Instructions

### 1. Backend Setup

1. Clone the repository and navigate to the backend folder:
   ```
   cd ../API/PPDispensingLogApp
   ```
2. Update appsettings.json with your database connection string:
   ```json
   "ConnectionStrings": {"DispenserLogAppConnectionString": "Server=SERVER_NAME;Database=DB_NAME;TrustServerCertificate=True;Trusted_Connection=True"}
   ```
3. Restore dependencies:
   ```
   dotnet restore
   ```
4. Apply initial migration and update the database through Package manager console:
   ```
   Add-Migration MIGRATION_NAME
   Update-Database
   ```
5. Run the backend:
   ```
   dotnet run
   ```

### 2. Frontend Setup

1. Navigate to the frontend folder:
   ```
   cd ..UI/PPDispensingLogUI
   ```
2. Install dependencies::
   ```bash
   npm install
   ```
3. Configure the API base URL in src/environments if needed:
   ```
   apiUrl: 'https://YOUR_API_SERVER/api'
   ```
4. Start the Angular development server:
   ```bash
   ng serve -o
   ```


## Notes
- Make sure to run the db migration and update commands.
- Ensure that the API service is running before running the UI Application.
- This application is set up with a single user by default, credentials:
  ```
  Username = admin
  Password = admin@10
  ```
  

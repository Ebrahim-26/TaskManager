# 🗂️ Task Manager Dashboard

## 📋 Project Overview
The **Task Manager Dashboard** is a web-based task management tool with a clean and responsive UI.  
It helps users create, read, update and delete tasks effectively through **three main panels**. It also includes a toast notification at the bottom-left corner that appears as a confirmation when creating, deleting, or updating tasks.

---

## 🧭 Panels Overview

### **Dashboard Panel**
- The dashboard component also serves as a filter panel, allowing users to view tasks based on the status.
- Displays all tasks categorized as:
  - 🟥 **To-Do**
  - 🟨 **In Progress**
  - 🟩 **Completed**
- Includes a **Pie Chart** for a visual summary of task distribution.

---

### **Task List Panel**
- Shows a **list of all tasks** with detailed information.
- Features:
  - **Search** functionality.
  - **Edit** existing tasks.
  - 🟩🟨🟥 **Status Indicator** at the right of each card:
    - Green → Completed  
    - Yellow → In Progress  
    - Red → To-Do  
- Each task card displays:
  - **Title**
  - **Description**
  - **Status**
  - **Type**
  - **Assignee**
  - **Due Date**
  - **Priority**

---

### **Task Creation Panel**
- Provides an interface to **create new tasks** with:
  - **Title**
  - **Description**
  - **Status**
  - **Type**
  - **Assignee**
  - **Due Date**
  - **Priority**
---
### **Dock**
- The application includes a bottom dock that provides quick access to theme toggling, the API fetch view, and controls for adding or editing the task assignee and type.
---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone <repository-url>

# Navigate into the project folder
cd task-manager

# Install dependencies
npm install

#To run in Development
npm run dev

#Build and run
npm run build
npm start
```

### **🌐 API Information**
- This Project uses JSONPlaceholder as mock API
- ```https://jsonplaceholder.typicode.com/posts```

### **API Features**
- Fetches post data from the API
- Loading state displayed while fetching data
- Error state shown if there’s an issue fetching data

### **Tech Stack**
- **Frontend:** ReactJS, NextJs
- **Styling:** Tailwind, Mui
- **API:** JSONPlaceholder

### **ScreenShot of the web app:**

<img width="1919" height="923" alt="image" src="https://github.com/user-attachments/assets/0d0980c9-c166-4e80-ba77-2a3f787c05f9" />

## Mockup Design
![mockupdesign](https://github.com/user-attachments/assets/3caa7a0f-de52-464c-b41c-7963e12334b3)



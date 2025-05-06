# Tech Quiz Testing App

A simple React + Vite quiz application, instrumented with Cypress for both component and end-to-end testing.

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Getting Started](#getting-started)  
- [Available Scripts](#available-scripts)  
---

## Overview

This project presents a 5-question quiz fetched from a mock API. Users can:

1. Start a quiz  
2. Answer each question in turn  
3. View their final score  
4. Restart the quiz  

We use **Cypress** to write:

- **Component tests** for the Quiz component (buttons, question rendering, score logic)  
- **E2E tests** to simulate a full user flow in the browser  

---

## Features

- Fetches random questions from a service  
- Interactive “Start”, “Next”, and “Restart” buttons  
- Live score tracking  
- Responsive UI  

---

## Getting Started

### Prerequisites

- **Node.js** ≥ v16  
- **npm** or **yarn**  

### Install dependencies

```bash
npm install
# or
yarn install

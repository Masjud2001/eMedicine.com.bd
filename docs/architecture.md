# eMedicine - Architecture Documentation

This document outlines the project's folder structure, component hierarchy, and design system.

---

## 📂 Folder Structure

```
c:\Users\jitis\Desktop\eMedicine.com.bd
├── docs/                      # Project documentation (overview, architecture, etc.)
├── public/                    # Static assets
└── src/
    ├── app/                   # Next.js App Router (pages and layouts)
    │   ├── (auth)/            # Auth routes (Login, Register, Forgot Password)
    │   ├── about/             # About Us page
    │   ├── cart/              # Shopping Bag / Cart page
    │   ├── checkout/          # Shipping and Payment layout
    │   ├── consultation/      # Doctor consultation marketplace
    │   ├── contact/           # Contact and Inquiry form
    │   ├── faq/               # Knowledge Center / FAQ
    │   ├── product/           # Dynamic Product Detail routes ([id])
    │   ├── refill/            # Auto-refill request page
    │   ├── shop/              # Product listing and filtering
    │   ├── track-order/       # Live logistics tracking
    │   └── upload-prescription/ # Dedicated Rx upload page
    ├── components/            # Reusable UI components
    │   ├── auth/              # Sign In and Sign Up views
    │   ├── checkout/          # Checkout-specific logic (shipping, payment summary)
    │   ├── home/              # Homepage-specific sections (Hero, CategoryGrid, Carousels)
    │   ├── layout/            # Core layout components (Header, Footer)
    │   ├── product/           # ProductDetail view and Gallery
    │   ├── shared/            # Common app-wide components (ProductCard, Banner, etc.)
    │   ├── shop/              # Shop sidebar and content grid
    │   ├── track/             # Tracking status and rider components
    │   └── ui/                # Base atomic UI elements (Button, Input, Badge, etc.)
    ├── constants/             # App-wide constants and config
    ├── data/                  # Mock data for products, categories, and doctors
    ├── hooks/                 # Custom React hooks (useCart, etc.)
    ├── lib/                   # Utility functions and library wrappers (utils.ts)
    ├── types/                 # TypeScript interfaces and types
    └── styles/                # Global CSS and Tailwind theme config
```

---

## 🎨 Design System

### **Color Palette (Healthcare Focused)**
- **Primary**: Green (`#16a34a` / `text-primary-500` / `bg-primary-500`)
- **Secondary**: Blue (`#0891b2` / `text-secondary-500` / `bg-secondary-500`)
- **Accent**: Red (`#ef4444` / `text-accent-500` / `bg-accent-500`)
- **Background**: Neutral Gray (`#f8fafc` / `bg-[#f8fafc]`/ `bg-white`)

### **Typography**
- **Heading**: Plus Jakarta Sans (`font-jakarta`) - Modern, high-trust feel.
- **Body**: Inter (`font-sans`) - Clear, accessible, and professional.

### **Interactive Patterns**
- **Hover Effects**: All cards use a lift or shadow-intensification animation.
- **Micro-animations**: Lucide icons are used with hover state changes for better feedback.
- **Loading States**: Skeletal loaders and circular spinners are implemented for high-friction actions like checkout.

---

## 🛠️ Key Component Hierarchy

- **Header Layer**: Top utility bar → Main header with search → Mobile menu drawer.
- **Home Layer**: Hero (banners) → Quick services (Rx, Consult) → CategoryGrid → Product Carousels → Trust Section.
- **Shop Layer**: Sidebar (filtering logic) → Grid view (sorting/active tags) → ProductCard.
- **Checkout Layer**: Shipping info form → Payment selection → Summary sidebar.

---

## 🔒 Security & Verification

- **Prescription Check**: Rx is required for specialized drugs, marked by specific visual badges on cards.
- **Mock Persistence**: Cart state and auth state are currently managed with React state (ready for localStorage or DB integration).
- **Payment Symbols**: High-visibility trust badges for bKash and Nagad payment methods included in the UI.

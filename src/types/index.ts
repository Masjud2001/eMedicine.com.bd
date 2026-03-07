export interface Product {
    id: string;
    name: string;
    brand: string;
    genericName?: string;
    category: string;
    subCategory?: string;
    mrp: number;
    price: number;
    discountPercentage: number;
    image: string;
    images?: string[];
    description: string;
    shortDescription: string;
    stockStatus: "In Stock" | "Out of Stock" | "Requested";
    prescriptionRequired: boolean;
    rating: number;
    reviewsCount: number;
    tags?: string[];
    sku: string;
    safetyDisclaimer?: string;
}

export interface Category {
    id: string;
    name: string;
    icon: string;
    image: string;
    slug: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
    product: Product;
}

export interface Order {
    id: string;
    items: CartItem[];
    totalAmount: number;
    shippingAddress: {
        fullName: string;
        phone: string;
        address: string;
        city: string;
        area: string;
    };
    paymentMethod: "COD" | "bKash" | "Nagad" | "Card";
    status: "Pending" | "Confirmed" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
    createdAt: string;
}

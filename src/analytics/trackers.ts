import { Product } from "../types/Product";
import { trackEvent } from "./analytics";
import { ANALYTICS_EVENTS } from "./events";

export function trackAddItemToCart(product: Product) {
  trackEvent(ANALYTICS_EVENTS.ADD_CART, {
    product_id: product.id,
    product_name: product.name,
    product_category: product.category,
    price: product.price,
  });
}

// Ici se fait le lien entre notre domaine - dans le sens de notre monde à nous (ratatouille) - et le monde de Next.js
import { OrderPage } from "@ratatouille/modules/order/react/pages/order/OrderPage";
import "@ratatouille/app/app.css";

export default function Home() {
  return <OrderPage />;
}

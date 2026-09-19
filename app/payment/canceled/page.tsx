import { redirect } from 'next/navigation';

export default function PaymentCanceledPage() {
  redirect('/products');
}

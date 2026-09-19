import { redirect } from 'next/navigation';

export default function ProductIndexRedirect() {
  redirect('/products');
}

import { redirect } from 'next/navigation';

export default function ZamowieniaRedirect() {
  redirect('/orders');
}

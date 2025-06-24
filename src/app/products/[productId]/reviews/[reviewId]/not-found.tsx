'use client';
import { usePathname } from 'next/navigation';
export default function NotFound() {
  const pathName = usePathname();
  //console.log(pathName.split('/'));

  const productId = pathName.split('/')[2];
  const reviewId = pathName.split('/')[4];
  return (
    <h1>
      Review {reviewId} not found for product {productId}
    </h1>
  );
}

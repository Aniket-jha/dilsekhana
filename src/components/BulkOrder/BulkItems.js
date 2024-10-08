import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import BulkOrderItems from './BulkOrderItems';

const BulkItems = () => {
    const items = [
        {
          id: 1,
          image: "/assets/img/dish-13.png",
          title: "Egg, kiwi and sauce chilli",
          tags: ["breakfast", "brunch"],
          price: 39,
          quantity: 1,
          category: ["breakfast", "lunch", "dinner"],
        },
        {
          id: 2,
          image: "/assets/img/dish-6.png",
          title: "Potatoes with pork and dried fruits",
          tags: ["breakfast", "brunch"],
          price: 39,
          quantity: 1,
          category: ["breakfast", "dinner"],
        },
        {
          id: 3,
          image: "/assets/img/dish-5.png",
          title: "Rice with shrimps and kiwi",
          tags: ["breakfast", "brunch"],
          price: 39,
          quantity: 1,
          category: ["breakfast", "lunch"],
        },
        {
          id: 7,
          image: "/assets/img/dish-7.png",
          title: "Fruits with rice chips",
          tags: ["breakfast", "brunch"],
          price: 39,
          quantity: 1,
          category: ["breakfast", "lunch"],
        },
        {
          id: 8,
          image: "/assets/img/dish-10.png",
          title: "Vegetables with rice chips",
          tags: ["breakfast", "brunch"],
          price: 39,
          quantity: 1,
          category: ["breakfast", "lunch", "dinner"],
        },
        {
          id: 9,
          image: "/assets/img/dish-11.png",
          title: "Pork with vegetables and...",
          tags: ["breakfast", "brunch"],
          price: 39,
          quantity: 1,
          category: ["breakfast", "lunch"],
        },
        {
          id: 4,
          image: "/assets/img/dish-1.png",
          title: "Spaghetti with mushrooms and...",
          tags: ["breakfast", "brunch", "dinner"],
          price: 39,
          quantity: 1,
          category: ["others"],
        },
        {
          id: 5,
          image: "/assets/img/dish-2.png",
          title: "Veal meat, tomatoes and...",
          tags: ["breakfast", "brunch"],
          price: 39,
          quantity: 1,
          category: ["others"],
        },
        {
          id: 6,
          image: "/assets/img/dish-4.png",
          title: "Sliced pork, avocado and...",
          tags: ["breakfast", "brunch"],
          price: 39,
          quantity: 1,
          category: ["others"],
        },
      ];
  return (
    <section className="lunch-section gap " style={{ background: "#fcfcfc" }}>
        <div className="px-8 row">
        
            {items.map(
              (item) =>
                <BulkOrderItems  item={item} />
            )}
         
        </div>
      </section>
  )
}

export default BulkItems
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// Import required modules
import users from '../../../public/data/users'
import AvatarCard from './AvatarCard';
import { Pagination} from 'swiper/modules';

const AvatarSlider=()=> {
  return (
    <div
      className='text-white h-full max-w-6xl container '
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
      pagination={{
        clickable:true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {users.map((user, idx) => (
            <SwiperSlide key={idx}>
              <div>
                <AvatarCard
                  img={user.img}
                  name={user.name}
                  handle={user.handle}
                  gradient={user.gradient}
                />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default AvatarSlider
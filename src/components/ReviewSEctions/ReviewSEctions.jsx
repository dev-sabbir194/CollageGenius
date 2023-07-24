import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ReviewSEctions = () => {

  const reviews = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg ",
      name: "John Doe",
      description: "This college is amazing!",
      rating: 5,
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1139495117/photo/facing-my-future-with-confidence.jpg?b=1&s=612x612&w=0&k=20&c=0IxGuRpfxxEdRZDAH5y1gpcRU5saje8EUKNlKPgKv-g= ",
      name: "Jane Smith",
      description: "Highly recommend this college!",
      rating: 4,
    },
    {
      id: 3,
      image:
        "https://t4.ftcdn.net/jpg/02/39/97/31/360_F_239973168_THApLcIPF6hu7ElDjH74MA5M9qr7MePg.jpg ",
      name: "Mike Johnson",
      description: "Great facilities and faculty.",
      rating: 4.5,
    },
  ];

  const [swiper, setSwiper] = useState(null);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSwiper={setSwiper}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div>
              <img src={review.image} alt={`Review by ${review.name}`} />
              <h3>{review.name}</h3>
              <p>{review.description}</p>
              <div>Rating: {review.rating}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSEctions;

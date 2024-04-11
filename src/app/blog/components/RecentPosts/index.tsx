
import Carousel from "@/components/Carousel";

const RecentPosts = (): JSX.Element => {

  const images = [
    "../../../../assets/images/slider2.jpeg",
    "../../../../assets/images/slider3.jpeg",
    "../../../../assets/images/slider4.jpeg",
    "../../../../assets/images/slider2.jpeg"
  ];
  return (
    <div className="h-80">
     <Carousel images={images}/>
    </div>
  );
};

export default RecentPosts;

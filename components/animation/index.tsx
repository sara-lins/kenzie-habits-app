import Lottie from "react-lottie";
import { useState } from "react";
import image from "../../assets/41068-man-filling-a-list.json";
import { ContainerAnimation } from "../../styles/home.style";

const AnimationHome = () => {
  const [animate] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ContainerAnimation>
      <Lottie
        options={defaultOptions}
        isStopped={animate.isStopped}
        isPaused={animate.isPaused}
        height={300}
        width={300}
      />
    </ContainerAnimation>
  );
};

export default AnimationHome;

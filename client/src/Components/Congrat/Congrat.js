import Confetti from "react-confetti/dist/types/Confetti";
import { useWindowSize } from "react-use";

const Congrat = () => {
    const { width, height } = useWindowSize();
    return <Confetti width={width} height={height} />;
  }
  
  export default Congrat
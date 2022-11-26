import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import horse from "./svg/horse.svg";
import gator from "./svg/gator.svg";
import cow from "./svg/cow.svg";
import heart from "./svg/heart.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  horse,
  gator,
};

function AnimalShow({ type }) {
  return (
    <div>
        <img alt="animal" src={svgMap[type]} />
    </div>
  );
}

export default AnimalShow;

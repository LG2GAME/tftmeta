import "./backdrop.scss";
import { images } from "@assets/images";

export default function Backdrop() {
  return (
    <div className="background-image">
      <img src={images.backdropImage} alt="" />
    </div>
  );
}

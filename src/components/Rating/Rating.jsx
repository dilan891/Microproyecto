import { RiEmotionHappyLine } from "react-icons/ri";
import { RiEmotionLaughLine } from "react-icons/ri";
import { RiEmotionNormalLine } from "react-icons/ri";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { IoMdSad } from "react-icons/io";
import styled from "./Rating.module.css";

export function StyledRating(props) {
    let value = props.value
    if (value <= 1) {
      return <p className={styled.text}><IoMdSad className={styled.icon5} /> <RiEmotionUnhappyLine className={styled.icon6} /> <RiEmotionNormalLine className={styled.icon6} /> <RiEmotionHappyLine className={styled.icon6} /> <RiEmotionLaughLine className={styled.icon6} /></p>;
    }
    if (value <= 2) {
      return <p className={styled.text}><IoMdSad className={styled.icon6} /> <RiEmotionUnhappyLine className={styled.icon4} /> <RiEmotionNormalLine className={styled.icon6} /> <RiEmotionHappyLine className={styled.icon6} /> <RiEmotionLaughLine className={styled.icon6} /></p>
    }
    if (value <= 3) {
      return <p className={styled.text}><IoMdSad className={styled.icon6} /> <RiEmotionUnhappyLine className={styled.icon6} /> <RiEmotionNormalLine className={styled.icon3} /> <RiEmotionHappyLine className={styled.icon6} /> <RiEmotionLaughLine className={styled.icon6} /></p>
    }
    if (value <= 4) {
      return <p className={styled.text}><IoMdSad className={styled.icon6} /> <RiEmotionUnhappyLine className={styled.icon6} /> <RiEmotionNormalLine className={styled.icon6} /> <RiEmotionHappyLine className={styled.icon2} /> <RiEmotionLaughLine className={styled.icon6} /></p>
    }
    if (value <= 5) {
      return <p className={styled.text}><IoMdSad className={styled.icon6} /> <RiEmotionUnhappyLine className={styled.icon6} /> <RiEmotionNormalLine className={styled.icon6} /> <RiEmotionHappyLine className={styled.icon6} /> <RiEmotionLaughLine className={styled.icon} /></p>
    }
  }
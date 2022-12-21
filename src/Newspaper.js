import React, { useContext, useState } from "react";
import "./Newpaper.css";
import uparrow from "./image/upload.png";
import downarrow from "./image/down-arrow.png";
import font from "./image/font.png";
import title from "./image/title.png";
import link from "./image/link.png";
import magnifier from "./image/zoom-in.png";
import { ReadableFontContext } from "./App";
export const Newspaper = () => {
  // Functinality of content scaling
  const [counter, setCounter] = useState(100);
  const IncreaseScale = () => {
    setCounter(counter + 1);
  };
  const DecreseScale = () => {
    setCounter(counter - 1);
  };

  //  end of scaling functinality
  const [ReadClicked, setReadClicked] = useState(true);
  const readFont = useContext(ReadableFontContext);
  const ReadableFontHandler = () => {
    if (ReadClicked === true) {
      readFont.setReadFont({ letterSpacing: "1px" });
      setReadClicked(false);
    } else {
      readFont.setReadFont();
      setReadClicked(true);
    }
  };

  // Functinality of hight title
  const [HighLightText, setHighLightText] = useState(true);
  const [HighText, setHighText] = useState();
  const HighlightTextHandle = () => {
    if (HighLightText === true) {
      setHighText({ border: "solid red 2px" });
      setHighLightText(false);
    } else {
      setHighText();
      setHighLightText(true);
    }
  };
  // End of Highlight Title functinality

  // functinolity of highlight link
  const [HighLightLinkClick, setHighLightLinkClick] = useState(true);
  const [HighLightLink, setHighLightLink] = useState();
  const HighLightLinkHandler = () => {
    if (HighLightLinkClick === true) {
      console.log("hi");
      setHighLightLink({ border: "solid black 2px" });
      setHighLightLinkClick(false);
    } else {
      setHighLightLink();
      setHighLightLinkClick(true);
    }
  };

  // Functinality of font size
  const [fontSize, setFontSize] = useState(16);
  const IncreseFontHandler = () => {
    setFontSize(fontSize + 1);
  };
  const DecreseFontHandler = () => {
    setFontSize(fontSize - 1);
  };

  // Functinaliy of line height
  const [lineHeight, setLineHeight] = useState(30);
  const IncreseLineHandler = () => {
    setLineHeight(lineHeight + 1);
  };
  const DecreseLineHandler = () => {
    setLineHeight(lineHeight - 1);
  };

  // align center functinality
  const [isCenterClick, setisCenterClick] = useState(true);
  const [center, setCenter] = useState();
  const alignCenterHandler = () => {
    if (isCenterClick === true) {
      setCenter("center");
      setisCenterClick(false);
    } else {
      setCenter();
      setisCenterClick(false);
    }
  };

  // letter spacing functionality
  const [letterSpacing, setLetterSpacing] = useState(0);
  const IncreseLetterSpace = () => {
    setLetterSpacing(letterSpacing + 1);
  };
  const DecreseLetterSpace = () => {
    setLetterSpacing(letterSpacing - 1);
  };
// align content left
  const [isClickLeft, setisClickLeft] = useState(true);
  const AlignLeftHandler = () => {
    if (isClickLeft === true) {
      setCenter("left");
      setisClickLeft(false);
    } else {
      setisClickLeft(true);
      setCenter();
    }
  };
  // Align content right
  const [isClickRight, setisClickRight] = useState(true);
  const rightAlignHandler = () => {
    if (isClickRight === true) {
      setCenter("right");
      setisClickRight(false);
    }
    else{
      setCenter()
      setisClickRight(false)
    }
  };
// MAngnifier functinality

   const hovertext=()=>{
    var res;
    
    var temp=document.getElementsByClassName("NewspaperConatiner");
    for (let i = 0; i < temp.length; i++) {
      console.log(temp[i]);
      res.appendChild(temp[i].cloneNode(true))
    }
    console.log(temp);
}
  
  return (
  <div
    className="NewspaperConatiner"
      style={{
        zoom: `${counter}%`,
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
        textAlign: center,
        letterSpacing: `${letterSpacing}px`,
        // textAlign:leftAlign,
      }}
    >
      <nav>
        <ul className="Nav">
          <li className="Nav__item " style={HighLightLink}>
            <a href="//">Issue, june</a>{" "}
          </li>
          <li className="Nav__item Nav--align" style={HighLightLink}>
            {" "}
            <a href="//">News</a>
          </li>
        </ul>
      </nav>
      <div
        class="w3-sidebar w3-bar-block w3-card"
        style={{ width: "45%", right: "0" }}
      >
        <div className="ToolsContainer">
        <div
            className="Readable-font-container background"
            onClick={ReadableFontHandler}
            value={ReadClicked}
          >
            <img className="FontImg" src={font} alt="" />
            <h2 style={{ marginLeft: "4%" }}>Readable font</h2>
          </div>
          <div className="ContentScalingContainer background">
            <h2>Content scaling</h2>
            <div className="ContentScaling">
              <button
                className="button"
                onClick={IncreaseScale}
                value={counter}
              >
                <img className="arrow" src={uparrow} alt="" />
              </button>
              {counter}%
              <button className="button" onClick={DecreseScale}>
                <img className="arrow" src={downarrow} alt="" />
              </button>
            </div>
          </div>
         

          <div
            className="Highlight-title-container background"
            onClick={HighlightTextHandle}
            value={HighLightText}
          >
            <img src={title} className="FontImg" alt="" />
            <h2>HighLight title</h2>
          </div>

          <div
            className="Highlight-link-container background"
            onClick={HighLightLinkHandler}
            value={HighLightLinkClick}
          >
            <img src={link} className="FontImg" alt="" />
            <h2>HighLight Links</h2>
          </div>
          <div className="text-mangnifier-container background" >
            <img src={magnifier} className="FontImg" alt="" />
            <h2>text-magnifier</h2>
          </div>
          <div
            className="ContentScalingContainer background"
            style={{ marginTop: "4%" }}
          >
            <h2>Adujust font size</h2>
            <div className="ContentScaling">
              <button className="button">
                <img
                  className="arrow"
                  src={uparrow}
                  alt=""
                  value={fontSize}
                  onClick={IncreseFontHandler}
                />
              </button>
              <b>{fontSize}px</b>
              <button className="button">
                <img
                  className="arrow"
                  value={fontSize}
                  onClick={DecreseFontHandler}
                  src={downarrow}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div
            className="align-center-container background"
            onClick={alignCenterHandler}
            value={isCenterClick}
          >
            <h2>Align center</h2>
          </div>
          <div className="LineHeightContainer background">
            <h2>Adujust Line Height</h2>
            <button className="button">
              <img
                className="arrow"
                src={uparrow}
                alt=""
                value={lineHeight}
                onClick={IncreseLineHandler}
              />
            </button>
            <b>{lineHeight}px</b>
            <button className="button">
              <img
                className="arrow"
                value={lineHeight}
                onClick={DecreseLineHandler}
                src={downarrow}
                alt=""
              />
            </button>
          </div>
          <div
            className="align-left-container background"
            value={isClickLeft}
            onClick={AlignLeftHandler}
          >
            <h2>Align left</h2>
          </div>
          <div className="letterspacingContainer background">
            <h2>Adujust letter spacing</h2>
            <button className="button" onClick={IncreseLetterSpace}>
              <img
                className="arrow"
                src={uparrow}
                alt=""
                value={letterSpacing}
              />
            </button>
            <b>{letterSpacing}px</b>
            <button className="button" onClick={DecreseLetterSpace}>
              <img
                className="arrow"
                value={letterSpacing}
                src={downarrow}
                alt=""
              />
            </button>
          </div>
          <div
            className="align-left-container background"
            value={isClickRight}
            onClick={rightAlignHandler}
          >
            <h2>Align right</h2>
          </div>
        </div>
      </div>
      <header className="Heading"></header>
      <div className="News1" onMouseOver={hovertext} id="new1container">
        <div className="News1__dis">
          <h2 className="News1__dis__heading" style={HighText}>
            ET HARUM QUIDEM RERUM FACILIS EST ET EXPEDITA DISTINCTIO.
          </h2>
          <p id="News11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            officiis aliquid inventore at commodi, mollitia perspiciatis!
            Perferendis adipisci qui sit aperiam maiores expedita sed
            reprehenderit unde! Officiis, maxime vitae? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magni qui sit soluta ab, suscipit
            culpa eius quae dignissimos unde cumque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Id, obcaecati. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex veniam quasi impedit quaerat
            vel culpa distinctio sequi rem omnis provident. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Fugit quam reprehenderit
            nulla molestias provident eligendi exercitationem doloribus incidunt
            animi maxime.{" "}
          </p>
        </div>
        <div className="news1__img"></div>
      </div>
      <div className="News2 News1">
        <div className="News2__img "></div>
        <div className="News2__dis">
          <h2 className="Newws2__dis__heading" style={HighText}>
            ET HARUM QUIDEM RERUM FACILIS EST.
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            aliquid natus explicabo, atque, labore totam quisquam odio saepe
            obcaecati et, suscipit repellat aspernatur mollitia dignissimos
            placeat unde itaque blanditiis? Itaque rerum a voluptas pariatur
            quae, id, iusto impedit ducimus et sapiente reprehenderit laborum
            consectetur ex tenetur natus at corrupti eos. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Neque autem eos alias
            perferendis a explicabo consequuntur sed dolores aperiam esse!
          </p>
        </div>
      </div>
      <div className="Footer">
        <div className="Footer__item">
          <h2 className="Footer_item_head" style={HighText}>
            Your Title Here
          </h2>
          <p className="Footer__item_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            eligendi ab quasi error repellat! Impedit ea nobis praesentium vero
            nostrum obcaecati ipsum, accusamus eius quam ipsa ex animi. Ab
            tempore rerum veniam numquam eos doloremque labore expedita aliquid
            enim dolorum, iusto aut laborum omnis libero harum dicta, quasi
            tempora et.
          </p>
        </div>
        <div className="Footer__item">
          <h2 className="Footer_item_head" style={HighText}>
            Your Title Here
          </h2>
          <p className="Footer__item_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            eligendi ab quasi error repellat! Impedit ea nobis praesentium vero
            nostrum obcaecati ipsum, accusamus eius quam ipsa ex animi. Ab
            tempore rerum veniam numquam eos doloremque labore expedita aliquid
            enim dolorum, iusto aut laborum omnis libero harum dicta, quasi
            tempora et.
          </p>
        </div>
        <div className="Footer__item">
          <h2 className="Footer_item_head" style={HighText}>
            Your Title Here
          </h2>
          <p className="Footer__item_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            eligendi ab quasi error repellat! Impedit ea nobis praesentium vero
            nostrum obcaecati ipsum, accusamus eius quam ipsa ex animi. Ab
            tempore rerum veniam numquam eos doloremque labore expedita aliquid
            enim dolorum, iusto aut laborum omnis libero harum dicta, quasi
            tempora et.
          </p>
        </div>
      </div>
    </div>
  );
};

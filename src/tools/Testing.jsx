

import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  { src: "https://storage.googleapis.com/a1aa/image/RLWGjhfOrrbuMtLu7hb10wdQQLqm7MWorax23WJNb-4.jpg" ,width: 4, height: 3 },
  { src: "https://storage.googleapis.com/a1aa/image/M1N39wg2FIklTfmbm81_0ZT2D1FMgKXsgKBoduzraH0.jpg" ,width: 4, height: 3 },
  { src: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg" ,width: 4, height: 3 },
  { src: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg" ,width: 4, height: 3 },
  { src: "https://storage.googleapis.com/a1aa/image/RUgZfDPj7ka2xFm43Q15rdceMdJI7yiGZG_JTI4jpDU.jpg" ,width: 4, height: 3}

];

export default function Testing() {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      {/* Image Grid */}
      <Gallery
        photos={photos}
        onClick={(event, { index }) => setIndex(index)}
      />

      {/* Lightbox for Fullscreen View */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos.map((photo) => ({ src: photo.src }))}
        index={index}
      />
    </div>
  );
}

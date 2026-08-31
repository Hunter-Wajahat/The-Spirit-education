import React from "react";
import "./readQuran.css";
import { useParams } from "react-router-dom";

const ReadQuran = () => {
  const { para } = useParams();

  const createParaPages = (paraNumber, firstPage, pageCount = 18) =>
    Array.from({ length: pageCount }, (_, index) => ({
      pageAddress: `para${String(paraNumber).padStart(2, "0")}/${firstPage + index}.jpg`,
      key: index + 1
    }));

  const quran = {
    para01: [
    {
      pageAddress: "para01/1.jpg",
      key: 1
    },
    {
      pageAddress: "para01/2.jpg",
      key: 2
    },
    {
      pageAddress: "para01/3.jpg",
      key: 3
    },
    {
      pageAddress: "para01/4.jpg",
      key: 4
    },
    {
      pageAddress: "para01/5.jpg",
      key: 5
    },
    {
      pageAddress: "para01/6.jpg",
      key: 6
    },
    {
      pageAddress: "para01/7.jpg",
      key: 7
    },
    {
      pageAddress: "para01/8.jpg",
      key: 8
    },
    {
      pageAddress: "para01/9.jpg",
      key: 9
    },
    {
      pageAddress: "para01/10.jpg",
      key: 10
    },
    {
      pageAddress: "para01/11.jpg",
      key: 11
    },
    {
      pageAddress: "para01/12.jpg",
      key: 12
    },
    {
      pageAddress: "para01/13.jpg",
      key: 13
    },
    {
      pageAddress: "para01/14.jpg",
      key: 14
    },
    {
      pageAddress: "para01/15.jpg",
      key: 15
    },
    {
      pageAddress: "para01/16.jpg",
      key: 16
    },
    {
      pageAddress: "para01/17.jpg",
      key: 17
    },
    {
      pageAddress: "para01/18.jpg",
      key: 18
    },
    {
      pageAddress: "para01/19.jpg",
      key: 19
    },
    {
      pageAddress: "para01/20.jpg",
      key: 20
    }
  ],
    para02: [
    {
      pageAddress: "para02/021.jpg",
      key: 1
    },
    {
      pageAddress: "para02/022.jpg",
      key: 2
    },
    {
      pageAddress: "para02/023.jpg",
      key: 3
    },
    {
      pageAddress: "para02/024.jpg",
      key: 4
    },
    {
      pageAddress: "para02/025.jpg",
      key: 5
    },
    {
      pageAddress: "para02/026.jpg",
      key: 6
    },
    {
      pageAddress: "para02/027.jpg",
      key: 7
    },
    {
      pageAddress: "para02/028.jpg",
      key: 8
    },
    {
      pageAddress: "para02/029.jpg",
      key: 9
    },
    {
      pageAddress: "para02/030.jpg",
      key: 10
    },
    {
      pageAddress: "para02/031.jpg",
      key: 11
    },
    {
      pageAddress: "para02/032.jpg",
      key: 12
    },
    {
      pageAddress: "para02/033.jpg",
      key: 13
    },
    {
      pageAddress: "para02/034.jpg",
      key: 14
    },
    {
      pageAddress: "para02/035.jpg",
      key: 15
    },
    {
      pageAddress: "para02/036.jpg",
      key: 16
    },
    {
      pageAddress: "para02/037.jpg",
      key: 17
    },
    {
      pageAddress: "para02/038.jpg",
      key: 18
    }
  ],
    para03: [
    {
      pageAddress: "para03/039.jpg",
      key: 1
    },
    {
      pageAddress: "para03/040.jpg",
      key: 2
    },
    {
      pageAddress: "para03/041.jpg",
      key: 3
    },
    {
      pageAddress: "para03/042.jpg",
      key: 4
    },
    {
      pageAddress: "para03/043.jpg",
      key: 5
    },
    {
      pageAddress: "para03/044.jpg",
      key: 6
    },
    {
      pageAddress: "para03/045.jpg",
      key: 7
    },
    {
      pageAddress: "para03/046.jpg",
      key: 8
    },
    {
      pageAddress: "para03/047.jpg",
      key: 9
    },
    {
      pageAddress: "para03/048.jpg",
      key: 10
    },
    {
      pageAddress: "para03/049.jpg",
      key: 11
    },
    {
      pageAddress: "para03/050.jpg",
      key: 12
    },
    {
      pageAddress: "para03/051.jpg",
      key: 13
    },
    {
      pageAddress: "para03/052.jpg",
      key: 14
    },
    {
      pageAddress: "para03/053.jpg",
      key: 15
    },
    {
      pageAddress: "para03/054.jpg",
      key: 16
    },
    {
      pageAddress: "para03/055.jpg",
      key: 17
    },
    {
      pageAddress: "para03/056.jpg",
      key: 18
    }
  ],
    para04: createParaPages(4, 57),
    para05: createParaPages(5, 75),
    para06: createParaPages(6, 93),
    para07: createParaPages(7, 111),
    para08: createParaPages(8, 129),
    para09: createParaPages(9, 147),
    para10: createParaPages(10, 165),
    para11: createParaPages(11, 183),
    para12: createParaPages(12, 201),
    para13: createParaPages(13, 219),
    para14: createParaPages(14, 237),
    para15: createParaPages(15, 255),
    para16: createParaPages(16, 273),
    para17: createParaPages(17, 291),
    para18: createParaPages(18, 309),
    para19: createParaPages(19, 327),
    para20: createParaPages(20, 345),
    para21: createParaPages(21, 363),
    para22: createParaPages(22, 381),
    para23: createParaPages(23, 399),
    para24: createParaPages(24, 417),
    para25: createParaPages(25, 435),
    para26: createParaPages(26, 453),
    para27: createParaPages(27, 471),
    para28: createParaPages(28, 489, 20),
    para29: createParaPages(29, 507, 20),
    para30: createParaPages(30, 525, 21)
}
  const pages = quran[para] || [];

  return (
    <section className="a4Viewer">
      {pages.map(page=> (
        <div key={page.key} className="a4Pages">
        <img
          src={`${import.meta.env.VITE_SERVER_URL}/quran/${page.pageAddress}`}
          alt="Page 1"
          className="a4Page"
        />
      </div>
      ))}

    </section>
  );
};

export default ReadQuran;
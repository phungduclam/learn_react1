import React from "react";
import AlbumList from "../components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "nhac moi moi ngay",
      thumbnailUrl:
        "http://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/a/6/a/5a6a65a42eb827ba3819872d3c9551b1.jpg",
    },

    {
      id: 2,
      name: "nhac moi moi ngay",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/7/b/b/17bbe40f5152720e7374d20cf2c6fdb2.jpg",
    },

    {
      id: 3,
      name: "nhac moi moi ngay",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/0/d/8/a/0d8ae5cdaec28478f217b0837ffa4daa.jpg",
    },

    {
      id: 4,
      name: "nhac moi moi ngay",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/b/e/1/7/be170a13a867bd3bd3c0b230d13a3ceb.jpg",
    },
  ];

  return (
    <div>
      <h2>toi nghi bay h khong ai nghe zingmp3 dau</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;

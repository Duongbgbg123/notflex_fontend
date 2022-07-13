import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './featured.scss';

export default function Featured({ lists, type, setGenre }) {
  const [content, setContent] = useState();
  const [banner, setBanner] = useState();

  useEffect(() => {
    const myInterval = setInterval(() => {
      const getData = async () => {
        const listRandom = Math.ceil(Math.random() * 24);
        if (lists[0]) {
          const listsSlug = lists[0].items[listRandom];
          if (lists[0]) {
            await fetch(`https://ophim1.com/phim/${listsSlug.slug}`, {
              headers: {
                'Content-Type': [
                  'application/json',
                  'application/x-www-form-urlencoded',
                  'video/mp4',
                ],
              },
            })
              .then((response) => response.json())
              .then((resp) => setBanner(resp.movie));
          }
        }
      };
      getData();
    }, 3000);
    return () => clearInterval(myInterval);
  }, [lists]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      {banner && (
        <>
          <img src={banner.thumb_url} alt="" />
          <div className="info">
            <h1 className="info-title">{banner.name}</h1>
            <span className="desc">{banner.content.slice(3, 100)}</span>
            <div className="buttons">
              <button
                className="play"
                onClick={() =>
                  alert('Donate Duong Do tk 0731000783026 để mở chức năng này')
                }
              >
                <PlayArrow />
                <span>Play</span>
              </button>
              <button
                className="more"
                onClick={() =>
                  alert('Donate Duong Do tk 0731000783026 để mở chức năng này')
                }
              >
                <InfoOutlined />
                <span>Info</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

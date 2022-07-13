import './listItem.scss';
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem({ index, item }) {
  // console.log(item, index);
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [urlMovie, setUrlMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(`https://ophim1.com/phim/${item.slug}`, {
          headers: {
            'Content-Type': [
              'application/json',
              'application/x-www-form-urlencoded',
              'video/mp4',
              'text/plain',
            ],
          },
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => {
            setMovie(res.movie);
            setUrlMovie(res.episodes[0].server_data[0].link_embed);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to="/watch" state={urlMovie}>
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.thumb_url} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <div className="desc">{movie.name}</div>

                <span>{movie.duration}</span>
                {/* <span className="limit">+</span> */}
                {/* <span>{movie.year}</span> */}
                <div className="genre">{movie.genre}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './home.scss';
import List from '../../components/list/List';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import { Pagination } from '../../components/Pagination/Pagination';
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const resData1 = await fetch(
          `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${pagination}`
        )
          .then((resp) => resp.json())
          .then((resp) => {
            if (resp) {
              fetch(
                `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${
                  pagination + 1
                }`
              )
                .then((response) => response.json())
                .then((response) => setLists([resp, response]));
            }
          });
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre, pagination]);

  const handlePageChange = (newPage) => {
    setPagination(newPage);
  };

  return (
    <div className="home">
      <Navbar />
      <Featured lists={lists} type={type} setGenre={setGenre} />

      <div className="list-container">
        <div className="list-title">Phim Mới Cập Nhật</div>
        {lists &&
          lists.map((list, index) => {
            return <List key={index} list={list} />;
          })}
      </div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <Footer />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import Feed from './Feed/Feed';
import './Feeds.scss';
function Feeds() {
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => {
        return res.json();
      })
      .then(res => {
        setcomments(res);
      });
  }, []);

  return (
    <section className="feeds">
      <Feed userNickName="ria" currentComments={comments} />
    </section>
  );
}

export default Feeds;

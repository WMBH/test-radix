import React, { useCallback } from 'react';

const PageItem = ({ number, onClick }) => {
  const page = number + 1;
  const onClickItem = useCallback(() => {
    onClick(page);
  }, [page, onClick]);

  return (
    <li className="page-item">
      <div className="page-link" onClick={onClickItem}>
        {page}
      </div>
    </li>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  return (
    <nav>
      <ul className="pagination">
        {[...Array(Math.ceil(totalPosts / postsPerPage))].map((_, index) => (
          <PageItem key={index} number={index} onClick={paginate} />
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

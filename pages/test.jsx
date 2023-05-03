import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

function CakeTablePage({ tables }) {
  const router = useRouter();
  const { user_pk } = router.query;
  const [currentPage, setCurrentPage] = useState(1);
  const tablesPerPage = 8;
  const totalPages = Math.ceil(tables.length / tablesPerPage);
  const indexOfLastTable = currentPage * tablesPerPage;
  const indexOfFirstTable = indexOfLastTable - tablesPerPage;
  const currentTables = tables.slice(indexOfFirstTable, indexOfLastTable);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {currentTables.map((table) => (
        <div key={table.user_pk}>
          <p>{table.nickname}</p>
          {table.visitors.map((visitor, index) => (
            <div key={`${table.user_pk}-${index}`}>
              <p>{visitor.visitor_name}</p>
              <p>{visitor.pickcake}</p>
              <p>{visitor.letter}</p>
            </div>
          ))}
        </div>
      ))}
      <div>
        {currentPage > 1 && (
          <button onClick={handlePrevPage}>이전 페이지</button>
        )}
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>다음 페이지</button>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // 데이터 가져오는 로직
  useEffect(() => {
    if (!user_pk) return;

    fetch(`https://manage.neokkukae.store/api/caketables/${user_pk}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCakeData(data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [user_pk]);

  // visitors 배열만 남기고 필터링
  const filteredTables = tables.map(({ visitors, ...rest }) => ({
    visitors,
    ...rest,
  }));

  return {
    props: {
      tables: filteredTables,
    },
  };
}

export default CakeTablePage;

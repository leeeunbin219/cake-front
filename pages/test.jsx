import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
// export default function Test() {
//   const [caketables, setCaketables] = useState([]);
//   useEffect(() => {
//     (async() => {
//     const nickname = await (
//         // await fetch(`https://manage.neokkukae.store/api/caketables/list/`
//         await fetch(`http://127.0.0.1:8000/api/caketables/list/`
//         )
//       ).json();
//       console.log(nickname)
//     })();
//   }, []);
//   return (
//     <div>
//       {caketables.map((caketable) => <div>{caketable.nickname}</div>)}
//     </div>
//   )
// }

// export default function Test() {
//   const [caketables, setCaketables] = useState([]);
//   useEffect(() => {
//     (async () => {
//       const [data1, data2] = await (
//         await fetch(`http://127.0.0.1:8000/api/caketables/list`)
//       ).json();
//       setCaketables(data2);
//     })();
//   }, []);
//   return (
//     <div>
//       {!caketables && <h4>Loading..</h4>}
//       {caketables?.map((caketable) => (
//         <div key={caketable.user_pk}>
//           <div>{caketable.nickname}</div>
//           <div>{caketable.tablecolor}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function Test({data2}) {
//   const router = useRouter();
//  const onClick = (pk) => {
//   router.push(`/caketables/${pk}`);
//  };
//   return (
//     <div>
//       {data2?.map((caketable) => (

// <div key={caketable.user_pk} onClick={()=>onClick(caketable.pk
// )}>
//       <div> <Link  href={`/caketable/${caketable.pk}`}><div>{caketable.nickname}</div></Link></div>
//       <div>{caketable.tablecolor}</div>
//       </div>
//       ))}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const [data1, data2] = await (
//     await fetch(`http://127.0.0.1:8000/api/caketables/list`)).json();
//   return {
//     props: {
//       data2,
//     },
//   };
// }

export default function Test({ data2 }) {
  const router = useRouter();
  const onClick = (user_pk, nickname, tablecolor, total_visitor) => {
    router.push(
      {
        pathname: `/caketables`,
        query: {
          nickname,
          tablecolor,
          total_visitor
        },
      },
      `/caketables`
    );
  };
  return (
    <div>
      {data2?.map((caketable) => (
        <div
          onClick={() => onClick(caketable.user_pk, caketable.nickname, caketable.tablecolor, caketable.total_visitor)}
          key={caketable.user_pk}
        >
          {/* <Link href={`/caketables/${caketable.user_pk}`}> */}
          <Link
            href={{
              pathname: `/caketables/${caketable.user_pk}`,
              query: {
                nickname: caketable.nickname,
                tablecolor: caketable.tablecolor,
                total_visitor: caketable.total_visitor,
              },
            }}
            as={`/caketables/${caketable.user_pk}`}
          >
            <div>{caketable.nickname}</div>
            {/* <div>{caketable.tablecolor}</div> */}
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const [data1, data2] = await (
    await fetch(`http://127.0.0.1:8000/api/caketables/list`)
  ).json();
  return {
    props: {
      data2,
    },
  };
}

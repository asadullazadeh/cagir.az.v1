import Image from "next/image";

//this page shows *** xidmetler -> xidmet(temizlik xidmeti) -> obyekt temizliyi

const XidmetPage = ({ data }) => {
  return (
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p> {data.description}</p>
    </div>
  );
};

export default XidmetPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const { butunXidmetler } = data;

  const allPaths = butunXidmetler.map((path) => {
    return {
      params: {
        cat: path.altxidmet,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths, //{ params: { cat:"temizlik-xidmeti", id: 'ev-temizleme' } },
                    //{ params: {cat:"temizlik-xidmeti", id: 'obyekt-temizliyi' },.... }
    fallback: false, //any paths not returned by getStaticPaths will result in a 404 page.
  };
}

export async function getStaticProps(context) {
  const id = context.params.id; //id=butun alt xidmet id'leri
  const { butunXidmetler } = await import("/data/data.json"); //butunxidmetlerin infolari
  const xidmetData = butunXidmetler.find((altxidmet) => id === altxidmet.id);
  return {
    props: { data: xidmetData }, // will be passed to the page component as props
  };
}

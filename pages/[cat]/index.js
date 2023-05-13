import Image from "next/image";
import Link from "next/link";

//this page shows*** xidmetler->xidmet(temizlik xidmeti)

const XidmetCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1> Xidmet in {pageName} </h1>
      <br></br>
      <div>
        {data.map((altxidmet) => (
          <Link
            key={altxidmet.id}
            href={`/${altxidmet.altxidmet}/${altxidmet.id}`}
            passHref
          >
            <h2>{altxidmet.title}</h2>
            <Image
              width={300}
              height={300}
              alt={altxidmet.title}
              src={altxidmet.image}
            />
            <p>{altxidmet.description}</p>
            <br></br>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default XidmetCatPage;

export async function getStaticPaths({ data }) {
  const { xidmet_kateqoriyasi } = await import("/data/data.json");
  const allPaths = xidmet_kateqoriyasi.map((altxidmet) => {
    return {
      params: {
        cat: altxidmet.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { butunXidmetler } = await import("/data/data.json");
  const data = butunXidmetler.filter((altxidmet) => altxidmet.altxidmet === id);
  return {
    props: { data, pageName: id },
  };
}

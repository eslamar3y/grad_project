import { Await, useLoaderData } from "react-router-dom";
import ExpertsList from "./ExpertsList";
import { Suspense } from "react";

export default function Experts() {
  const { expertsData } = useLoaderData();

  return (
    <section className="pb-8 pt-8">
      <h1 className="text-center font-bold text-[42px] pb-20">Experts</h1>
      <div className=" bg-[#8488CD] mt-40">
        <section className="relative bottom-32 mt-20 mb-20">
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <Await resolve={expertsData}>
              {
                (loadedData) => <ExpertsList doctors={loadedData} />
              }
            </Await>
          </Suspense>
        </section>
      </div>
    </section>
  );
}

import { Await, useLoaderData } from "react-router-dom";
import DeseaseList from "./DeseaseList";
import { Suspense } from "react";

export default function FishDiseases() {
  const { diseaseData } = useLoaderData();

  return (
    <main className=" bg-mainColor pt-16 pb-16">
      <h1 className="font-bold text-[42px] text-center pb-20">Fish Diseases</h1>
      <div className=" bg-secondColor mt-40">
        <section className="relative bottom-32 mt-20 mb-20">
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <Await resolve={diseaseData}>
              {
                (loadedDisease) => <DeseaseList diseases={loadedDisease} />
              }
            </Await>
          </Suspense>
        </section>
      </div>
    </main>
  );
}

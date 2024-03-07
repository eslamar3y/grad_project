import { Await, useLoaderData } from "react-router-dom";
import DeseaseList from "./DeseaseList";
import { Suspense } from "react";

export default function FishDiseases() {
  const { diseaseData } = useLoaderData();

  return (
    <main className=" bg-mainColor pt-16 pb-16">
      <h1 className="font-bold text-[42px] text-center pb-20">Fish Diseases</h1>
      <section className="w-full mt-20 mb-20">
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <Await resolve={diseaseData}>
            {
              (loadedDisease) => <DeseaseList diseases={loadedDisease} />
            }
          </Await>
        </Suspense>
      </section>
    </main>
  );
}

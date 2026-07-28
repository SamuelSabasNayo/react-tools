"use client";

type Depot = {
  title: string;
  company: string;
  depotNumber: string;
  country: string;
  city: string;
  location: string;
  tanks: string;
}

import { useActionState } from "react";
import { FormState, createDepot } from "@/actions/depots";

export default function EditDepotForm({ depot }: { depot: Depot}) {
  const initialState: FormState = {
    errors: {}
  };

  const [state, formAction, isPending] = useActionState(
    createDepot,
    initialState
  );

  return (
    <form action={formAction} className="">
      <div>
        <label>
          Title
          <input
            type="text"
            className=""
            name="name"
          />
        </label>
      </div>
      <div>
        <label>
          Company
          <input
            type="text"
            className=""
            name="company"
            />
        </label>
      </div>
      <div>
        <label>
          Depot Number
          <input
            type="number"
            className=""
            name="depotNumber"
          />
        </label>
      </div>
      <div>
        <label>
          Country
          <input
            type="text"
            className=""
            name="country"
          />
      </label>
      </div>
      <div>
        <label>
          City
          <input
            type="text"
            className=""
            name="city"
          />
        </label>
      </div>
      <div>
        <label>
          Location
          <input
            type="text"
            className=""
            name="location"
          />
        </label>
      </div>
      <div>
        <label>
          Tanks
          <input
            type="number"
            className=""
            name="tanks"
          />
        </label>
      </div>
    <button
      type="submit"
      disabled={isPending}
    >
      Submit
    </button>
    </form>
  );
};
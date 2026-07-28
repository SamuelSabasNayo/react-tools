"use client";

// import { Submit } from "@/components/submit";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { FormState, createDepot } from "@/actions/depots";

export default function AddDepotPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createDepot,
    initialState
  );

  return (
    <form action={formAction}>
      <div>
        <label>
          Name
          <input 
            type="text"
            className=""
            name="name"
            />
        </label>
        {/* {state.errors.name && <p>{state.errors.name}</p>} */}
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
        {/* {state.errors.company && <p>{state.errors.company}</p>} */}
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
        {/* {state.errors.depotNumber && <p>{state.errors.depotNumber}</p>} */}
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
        {/* {state.errors.country && <p>{state.errors.country}</p>} */}
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
        {/* {state.errors.city && <p>{state.errors.city}</p>} */}
        <label>
          Location
          <input
            type="text"
            className=""
            name="location"
          />
        </label>
        {/* {state.errors.location && <p>{state.errors.location}</p>} */}
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
        {/* {state.errors.tanks && <p>{state.errors.tanks}</p>} */}
      </div>
    <button
      type="submit"
      disabled={isPending}
    >
      Submit
    </button>
      {/* <Submit /> */}
    </form>
  );
};
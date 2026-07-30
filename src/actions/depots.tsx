"use server";

import { redirect } from "next/navigation";

export type Errors = {
  name?: string;
  company?: string;
  depotNumber?: string;
  country?: string;
  city?: string;
  location?: string;
  tanks?: string;
};

export type FormState = {
  errors: Errors;
};

export async function createDepot(prevState: FormState, formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const depotNumber = formData.get("depotNumber") as string;
  const country = formData.get("country") as string;
  const city = formData.get("city") as string;
  const location = formData.get("location") as string;
  const tanks = formData.get("tanks") as string;

  const errors: Errors = {};
  
  if (!name) {
    errors.name = "Name is required";
  }
  
  if (!company) {
    errors.name = "Company is required";
  }
  
  if (!depotNumber) {
    errors.name = "Depot Number is required";
  }
  
  if (!country) {
    errors.name = "Country is required";
  }
  
  if (!city) {
    errors.name = "City is required";
  }
  
  if (!location) {
    errors.name = "Location is required";
  }
  
  if (!tanks) {
    errors.name = "Tanks are required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  console.log("Added depot data:  ", name, company, parseInt(depotNumber), country, city, location, tanks);
  
  await new Promise((resolve) => setTimeout(resolve, 3000));
  redirect("/depots-db-create");
};
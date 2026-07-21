"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateDepot() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [depotNumber, setDepotNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimeZone] = useState("");
  const [totalCapacity, setTotalCapacity] = useState("");
  const [tanks, setTanks] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Body:  ",
        name,
        company,
        depotNumber,
        country,
        city,
        location,
        timezone,
        totalCapacity,
        tanks
      );
      const response = await fetch("http://localhost:8080/api/v1/depots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNGJiZDNhOC00NTQxLTQwODEtYjkzZi00YzNlNjU1MDIwYTQiLCJkZXBvdElkIjoiMWUyYjU4NzMtMDFkZS00NTRhLWE1NDgtMDMzYjY1NjBiNDNmIiwic2lkIjoiYzdjYmVkZDEtYzU3NS00N2ZiLWFkMDYtMWQwNzg5NDAyM2EwIiwiaWF0IjoxNzg0NjE2Mjc2LCJleHAiOjE3ODQ3MDYyNzZ9.NusMlRIR9RwmCfGPH8drU6KCj9IMpmO_WdTjp-rt3xg",
        },
        body: JSON.stringify({
        name,
        company,
        depotNumber,
        country,
        city,
        location,
        timezone,
        totalCapacity,
        tanks
      })
      });

      console.log("Response:  ", response);

      if (response.ok) {
        router.push("/depots");
      }
    } catch (error) {
      console.error("Error:  ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input 
          type="text"
          className=""
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Company
        <input
          type="text"
          className=""
          name="company"
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <label>
        Depot Number
        <input
          type="number"
          className=""
          name="depotNumber"
          onChange={(e) => setDepotNumber(e.target.value)}
        />
      </label>
      <label>
        Country
        <input
          type="text"
          className=""
          name="country"
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <label>
        City
        <input
          type="text"
          className=""
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          className=""
          name="location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        Total Capacity
        <input
          type="number"
          className=""
          name="totalCapacity"
          onChange={(e) => setTotalCapacity((e.target.value))}
        />
      </label>
      <label>
        Tanks
        <input
          type="number"
          className=""
          name="tanks"
          onChange={(e) => setTanks((e.target.value))}
        />
      </label>
      <button
        type="submit"
        className=""
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
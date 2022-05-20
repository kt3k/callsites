// Copyright 2022 Yoshiya Hinosawa. All rights reserved. MIT license.
// Copyright 2018-2021 Sindre Sorhus. All rights reserved. MIT license.
import callsites from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";

Deno.test("callsites", () => {
  assertEquals(callsites()[0].getFileName(), import.meta.url);
});

Deno.test("callsites - nested case", () => {
  const g = () => callsites();
  const f = () => g();

  const sites = f().slice(0, 3).map((site) => ({
    fileName: site.getFileName(),
    functionName: site.getFunctionName(),
  }));

  const fileName = import.meta.url;

  assertEquals(sites, [
    { fileName, functionName: "g" },
    { fileName, functionName: "f" },
    { fileName, functionName: null },
  ]);
});

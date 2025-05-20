import { createTypeSpecLibrary } from "@typespec/compiler";

export const $lib = createTypeSpecLibrary({
  name: "zod-emitter",
  diagnostics: {},
});

export const { reportDiagnostic, createDiagnostic } = $lib;

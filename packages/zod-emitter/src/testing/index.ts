import { resolvePath } from "@typespec/compiler";
import { createTestLibrary, TypeSpecTestLibrary } from "@typespec/compiler/testing";
import { fileURLToPath } from "url";

export const ZodEmitterTestLibrary: TypeSpecTestLibrary = createTestLibrary({
  name: "zod-emitter",
  packageRoot: resolvePath(fileURLToPath(import.meta.url), "../../../../"),
});

import { EmitContext, emitFile, resolvePath } from "@typespec/compiler";

export async function $onEmit(context: EmitContext) {
  await emitFile(context.program, {
    path: resolvePath(context.emitterOutputDir, "output.txt"),
    content: "Hello world. This is gonna do the zod thing\n",
  });
}

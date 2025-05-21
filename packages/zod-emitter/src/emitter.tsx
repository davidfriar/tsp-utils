import { Output, SourceDirectory, SourceFile } from "@alloy-js/core";
import { writeOutput } from "@typespec/emitter-framework";
import { EmitContext } from "@typespec/compiler";

export async function $onEmit(context: EmitContext) {
  await writeOutput(
    context.program,
    <Output>
      <SourceDirectory path="src" />
      <SourceFile path="README.md" filetype="md">
        Hello world! Now I'm using the framework, which is nice.
      </SourceFile>
    </Output>,
    context.emitterOutputDir,
  );
}

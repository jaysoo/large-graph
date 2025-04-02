This repo fails with `JSON.parse` error due to a large graph.

```shell
$ nx report

Failed to process project graph.
     - RangeError: Invalid string length
      at JSON.stringify (<anonymous>)
      at serializeJson (/private/tmp/adp/node_modules/.pnpm/nx@20.7.0_@swc-node+register@1.9.2_@swc+core@1.5.29_@swc+helpers@0.5.15__@swc+types@0.1.21_ty_afs6gbd3umac6pdj5ganmibqay/node_modules/nx/src/utils/json.js:61:17)
      at writeJsonFile (/private/tmp/adp/node_modules/.pnpm/nx@20.7.0_@swc-node+register@1.9.2_@swc+core@1.5.29_@swc+helpers@0.5.15__@swc+types@0.1.21_ty_afs6gbd3umac6pdj5ganmibqay/node_modules/nx/src/utils/fileutils.js:59:53)
      at writeToCache (/private/tmp/adp/node_modules/.pnpm/@nx+js@20.7.0_@babel+traverse@7.27.0_@swc-node+register@1.9.2_@swc+core@1.5.29_@swc+helpers@0_7jdm3du2tflziee7cscsdwnzei/node_modules/@nx/js/src/plugins/typescript/plugin.js:31:32)
      at exports.createNodesV2 (/private/tmp/adp/node_modules/.pnpm/@nx+js@20.7.0_@babel+traverse@7.27.0_@swc-node+register@1.9.2_@swc+core@1.5.29_@swc+helpers@0_7jdm3du2tflziee7cscsdwnzei/node_modules/@nx/js/src/plugins/typescript/plugin.js:70:13)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
      at async LoadedNxPlugin.createNodes (/private/tmp/adp/node_modules/.pnpm/nx@20.7.0_@swc-node+register@1.9.2_@swc+core@1.5.29_@swc+helpers@0.5.15__@swc+types@0.1.21_ty_afs6gbd3umac6pdj5ganmibqay/node_modules/nx/src/project-graph/plugins/loaded-nx-plugin.js:26:36)
      at async LoadedNxPlugin.createNodes.<computed> (/private/tmp/adp/node_modules/.pnpm/nx@20.7.0_@swc-node+register@1.9.2_@swc+core@1.5.29_@swc+helpers@0.5.15__@swc+types@0.1.21_ty_afs6gbd3umac6pdj5ganmibqay/node_modules/nx/src/project-graph/plugins/loaded-nx-plugin.js:36:28)
      at async createNodes (/private/tmp/adp/node_modules/.pnpm/nx@20.7.0_@swc-node+register@1.9.2_@swc+core@1.5.29_@swc+helpers@0.5.15__@swc+types@0.1.21_ty_afs6gbd3umac6pdj5ganmibqay/node_modules/nx/src/project-graph/plugins/isolation/plugin-worker.js:76:36)
      at async consumeMessage (/private/tmp/adp/node_modules/.pnpm/nx@20.7.0_@swc-node+register@1.9.2_@swc+core@1.5.29_@swc+helpers@0.5.15__@swc+types@0.1.21_ty_afs6gbd3umac6pdj5ganmibqay/node_modules/nx/src/project-graph/plugins/isolation/messaging.js:42:26)
```


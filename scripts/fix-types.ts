// import fg from 'fast-glob'
// import fs from 'fs-extra'

// tsc --emitDeclarationOnly 会生成 .type 文件，在这里需要对那些声明文件进行修改
/**
 * 修正自动生成的 type 文件
 * 这里主要是为了兼容 vue-demi(目前监控项目用不上，先保留在这)
 */
export async function fixTypes() {
  // const files = await fg(['types/**/*.d.ts', 'packages/*/dist/*.d.ts'], {
  //   onlyFiles: true
  // })
  // for (const f of files) {
  //   const raw = await fs.readFile(f, 'utf-8')
  //   const changed = raw
  //     .replace(/"@vue\/composition-api"/g, "'vue-demi'")
  //     .replace(/"vue"/g, "'vue-demi'")
  //     .replace(/'vue'/g, "'vue-demi'")
  //   await fs.writeFile(f, changed, 'utf-8')
  // }
}

fixTypes()

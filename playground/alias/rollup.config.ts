/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-12-11 21:08:12
 * @LastEditTime: 2023-12-12 19:12:59
 * @LastEditors: wsy
 */
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins:[]
})

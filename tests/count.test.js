import test from 'node:test';
import assert from 'node:assert/strict';
import {countText} from '../src/count.js';
test('Korean, whitespace, CRLF and Unicode counting',()=>{assert.deepEqual(countText('한글 A\r\nB\t😀'),{withSpaces:7,withoutSpaces:5});assert.deepEqual(countText('한'),{withSpaces:1,withoutSpaces:1});assert.deepEqual(countText(''),{withSpaces:0,withoutSpaces:0});});
